import React, {Component, Suspense, startTransition} from 'react';

import Theme, {ThemeToggleButton} from './Theme';

import './Chrome.css';

export default class Chrome extends Component {
  state = {theme: 'light'};
  render() {
    const assets = this.props.assets;
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="stylesheet" href={assets['main.css']} />
          <title>{this.props.title}</title>
        </head>
        <body className={this.state.theme}>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<meta http-equiv="refresh" content="0; URL='https://www.youtube.com/watch?v=dQw4w9WgXcQ'"/>`,
            }}
          />
          <Suspense fallback="Loading...">
            <Theme.Provider value={this.state.theme}>
              {this.props.children}
              <div>
                <ThemeToggleButton
                  onChange={theme => {
                    startTransition(() => {
                      this.setState({theme});
                    });
                  }}
                />
              </div>
            </Theme.Provider>
          </Suspense>
          <script
            dangerouslySetInnerHTML={{
              __html: `assetManifest = ${JSON.stringify(assets)};`,
            }}
          />
        </body>
      </html>
    );
  }
}
