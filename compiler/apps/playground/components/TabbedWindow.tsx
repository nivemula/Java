/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useCallback } from "react";

type TabsRecord = Map<string, React.ReactNode>;

export default function TabbedWindow(props: {
  defaultTab: string | null;
  tabs: TabsRecord;
  tabsOpen: Set<string>;
  setTabsOpen: (newTab: Set<string>) => void;
}): React.ReactElement {
  if (props.tabs.size === 0) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ width: "calc(100vw - 650px)" }}
      >
        No compiler output detected, see errors below
      </div>
    );
  }
  return (
    <div className="flex flex-row">
      {Array.from(props.tabs.keys()).map((name) => {
        return (
          <TabbedWindowItem
            name={name}
            key={name}
            tabs={props.tabs}
            tabsOpen={props.tabsOpen}
            setTabsOpen={props.setTabsOpen}
          />
        );
      })}
    </div>
  );
}

function TabbedWindowItem({
  name,
  tabs,
  tabsOpen,
  setTabsOpen,
}: {
  name: string;
  tabs: TabsRecord;
  tabsOpen: Set<string>;
  setTabsOpen: (newTab: Set<string>) => void;
}): React.ReactElement {
  const isShow = tabsOpen.has(name);

  const toggleTabs = useCallback(() => {
    const nextState = new Set(tabsOpen);
    if (nextState.has(name)) {
      nextState.delete(name);
    } else {
      nextState.add(name);
    }
    setTabsOpen(nextState);
  }, [tabsOpen, name, isShow, setTabsOpen]);

  return (
    <div key={name} className="flex flex-row">
      {isShow ? (
        <div className="border-r" style={{ minWidth: 550, overflow: "hidden" }}>
          <h2
            onClick={toggleTabs}
            className="p-4 duration-150 ease-in border-b cursor-pointer border-grey-200 text-secondary hover:text-link"
          >
            - {name}
          </h2>
          {tabs.get(name) ?? <div>No output for {name}</div>}
        </div>
      ) : (
        <div className="relative items-center h-full px-4 py-8 align-middle border-r border-grey-200">
          <button
            style={{ transform: "rotate(90deg) translate(-50%)" }}
            onClick={toggleTabs}
            className="flex-grow-0 w-5 transition-colors duration-150 ease-in text-secondary hover:text-link"
          >
            {`+${name}`}
          </button>
        </div>
      )}
    </div>
  );
}