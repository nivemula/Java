import {installHook} from 'react-devtools-shared/src/hook';

// avoid double execution
if (!window.hasOwnProperty('__REACT_DEVTOOLS_GLOBAL_HOOK__')) {
  function messageListener(event: MessageEvent) {
    if (event.source !== window) {
      return;
    }

    if (event.data.source === 'react-devtools-hook-settings-injector') {
      // In case handshake message was sent prior to hookSettingsInjector execution
      // We can't guarantee order
      if (event.data.payload.handshake) {
        window.postMessage({
          source: 'react-devtools-hook-installer',
          payload: {handshake: true},
        });
      } else if (event.data.payload.settings) {
        window.removeEventListener('message', messageListener);

        installHook(window, event.data.payload.settings);

        // detect react
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__.on(
          'renderer',
          function ({reactBuildType}) {
            window.postMessage(
              {
                source: 'react-devtools-hook',
                payload: {
                  type: 'react-renderer-attached',
                  reactBuildType,
                },
              },
              '*',
            );
          },
        );
      }
    }
  }

  window.addEventListener('message', messageListener);
  window.postMessage({
    source: 'react-devtools-hook-installer',
    payload: {handshake: true},
  });
}
