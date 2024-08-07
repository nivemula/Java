/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// We can't use chrome.storage domain from scripts which are injected in ExecutionWorld.MAIN
// This is the only purpose of this script - to send persisted settings to installHook.js content script

async function messageListener(event: MessageEvent) {
  if (event.source !== window) {
    return;
  }

  if (event.data.source === 'react-devtools-hook-installer') {
    if (event.data.payload.handshake) {
      const settings = await chrome.storage.local.get();

      window.postMessage({
        source: 'react-devtools-hook-settings-injector',
        payload: {settings},
      });

      window.removeEventListener('message', messageListener);
    }
  }
}

window.addEventListener('message', messageListener);
window.postMessage({
  source: 'react-devtools-hook-settings-injector',
  payload: {handshake: true},
});
