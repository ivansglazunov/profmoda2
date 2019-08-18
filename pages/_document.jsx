import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import { ServerStyleSheet } from 'styled-components';
import flush from 'styled-jsx/server';
import { Analitics } from '../imports/analitics';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(sheets.collect(<App {...props} />)),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheets.getStyleElement()}
            {sheet.getStyleElement()}
            {flush() || null}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    const { head, styles } = this.props;

    return (
      <html lang='en'>
        <head>
          {head}
          <script
            id='ssr-apollo-state'
            dangerouslySetInnerHTML={{
              __html: `window.__APOLLO_STATE__ = ${JSON.stringify(
                global.__APOLLO_STATE__,
              )}`,
            }}
          />
        </head>
        <body>
          <Analitics/>
          <Main />
          <NextScript />
          {styles}
        </body>
      </html>
    );
  }
}
