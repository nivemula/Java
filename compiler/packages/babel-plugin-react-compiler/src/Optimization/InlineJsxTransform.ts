/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Effect,
  GeneratedSource,
  HIRFunction,
  Instruction,
  makeInstructionId,
  ObjectMethod,
  ObjectProperty,
  Primitive,
} from '../HIR';
import {
  createTemporaryPlace,
  markInstructionIds,
  markPredecessors,
  reversePostorderBlocks,
} from '../HIR/HIRBuilder';

export function inlineJsxTransform(fn: HIRFunction): void {
  for (const [, block] of fn.body.blocks) {
    let nextInstructions: Array<Instruction> | null = null;
    for (let i = 0; i < block.instructions.length; i++) {
      const instr = block.instructions[i]!;
      switch (instr.value.kind) {
        case 'JsxExpression': {
          nextInstructions ??= block.instructions.slice(0, i);

          const symbolPlace = createTemporaryPlace(fn.env, instr.value.loc);
          const symbolInstruction: Instruction = {
            id: makeInstructionId(0),
            lvalue: {...symbolPlace, effect: Effect.Mutate},
            value: {
              kind: 'LoadGlobal',
              binding: {kind: 'Global', name: 'Symbol'},
              loc: instr.value.loc,
            },
            loc: instr.loc,
          };
          nextInstructions.push(symbolInstruction);

          const symbolForPlace = createTemporaryPlace(fn.env, instr.value.loc);
          const symbolForInstruction: Instruction = {
            id: makeInstructionId(0),
            lvalue: {...symbolForPlace, effect: Effect.Read},
            value: {
              kind: 'PropertyLoad',
              object: symbolInstruction.lvalue,
              property: 'for',
              loc: instr.value.loc,
            },
            loc: instr.loc,
          };
          nextInstructions.push(symbolForInstruction);

          const symbolValuePlace = createTemporaryPlace(
            fn.env,
            instr.value.loc,
          );
          const symbolValueInstruction: Instruction = {
            id: makeInstructionId(0),
            lvalue: {...symbolValuePlace, effect: Effect.Mutate},
            value: {
              kind: 'Primitive',
              value: 'react.element',
              loc: instr.value.loc,
            },
            loc: instr.loc,
          };
          nextInstructions.push(symbolValueInstruction);

          const $$typeofPlace = createTemporaryPlace(fn.env, instr.value.loc);
          const $$typeofInstruction: Instruction = {
            id: makeInstructionId(0),
            lvalue: {...$$typeofPlace},
            value: {
              kind: 'MethodCall',
              receiver: symbolInstruction.lvalue,
              property: symbolForInstruction.lvalue,
              args: [symbolValueInstruction.lvalue],
              loc: instr.value.loc,
            },
            loc: instr.loc,
          };
          const $$typeofProperty: ObjectProperty = {
            kind: 'ObjectProperty',
            key: {name: '$$typeof', kind: 'string'},
            type: 'property',
            place: {...$$typeofPlace, effect: Effect.Capture},
          };

          const reactElementInstruction: Instruction = {
            id: makeInstructionId(0),
            lvalue: {...instr.lvalue, effect: Effect.Store},
            value: {
              kind: 'ObjectExpression',
              properties: [$$typeofProperty],
              loc: instr.value.loc,
            },
            loc: instr.loc,
          };

          nextInstructions.push($$typeofInstruction);
          nextInstructions.push(reactElementInstruction);

          break;
        }
        case 'JsxFragment': {
          // nextInstructions ??= block.instructions.slice(0, i);
          // similar to above
          // don't emit the `instr`, create new instructions and push to nextInstructions
          break;
        }
        default: {
          if (nextInstructions !== null) {
            nextInstructions.push(instr);
          }
        }
      }
    }
    if (nextInstructions !== null) {
      block.instructions = nextInstructions;
    }
  }
  /**
   * Step 4:
   * Fixup the HIR to restore RPO, ensure correct predecessors, and
   * renumber instructions. Note that the renumbering instructions
   * invalidates scope and identifier ranges, so we fix them in the
   * next step.
   */
  reversePostorderBlocks(fn.body);
  markPredecessors(fn.body);
  markInstructionIds(fn.body);

  /**
   * Step 5:
   * Fix scope and identifier ranges to account for renumbered instructions
   */
  for (const [, block] of fn.body.blocks) {
    const terminal = block.terminal;
    if (terminal.kind === 'scope' || terminal.kind === 'pruned-scope') {
      /*
       * Scope ranges should always align to start at the 'scope' terminal
       * and end at the first instruction of the fallthrough block
       */
      const fallthroughBlock = fn.body.blocks.get(terminal.fallthrough)!;
      const firstId =
        fallthroughBlock.instructions[0]?.id ?? fallthroughBlock.terminal.id;
      terminal.scope.range.start = terminal.id;
      terminal.scope.range.end = firstId;
    }
  }
}
