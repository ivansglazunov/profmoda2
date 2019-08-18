import App, { Container } from 'next/app';
import Head from 'next/head';
import * as _ from 'lodash';
import { ApolloProvider } from '@apollo/react-hooks';

import React from 'react';
import Cookie from 'js-cookie';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Theme } from '@material-ui/core';

import { initApollo } from '../imports/apollo';
import { getDataFromTree } from '@apollo/react-ssr';
import config from '../imports/config';

const theme: Theme = createMuiTheme();

const tks = Object.keys(theme.typography);
for (let t = 0; t < tks.length; t++) {
  const value = theme.typography[tks[t]];
  if (typeof value === "object") {
    if (value.textTransform === "uppercase") {
      value.textTransform = "initial";
    }
  }
}

theme.typography.fontFamily = 'Helvetica, sans-serif';
theme.typography.body2.fontSize = 20;

for (let key in theme.typography) {
  if (typeof(theme.typography[key]) === 'object') {
    if (_.includes(['h1','h2','h3'], key)) {
      theme.typography[key].fontFamily = theme.typography.fontFamily;
      // theme.typography[key].fontFamily = '"Futura-Normal", Helvetica, sans-serif';
      theme.typography[key].fontWeight = 700;
      theme.typography[key].textTransform = 'uppercase';
    } else if (_.includes(['h4','h5','h6','subtitle1','subtitle2'], key)) {
      // theme.typography[key].fontFamily = '"Futura-Normal", Helvetica, sans-serif';
      theme.typography[key].fontFamily = '"Helvetica Neue", Helvetica, sans-serif';
      theme.typography[key].fontWeight = 700;
    } else {
    }
  }
}

// @ts-ignore
theme.palette.passedSuccess = {
  main: "#bbffb3",
  light: "#bbffb3",
  dark: "#bbffb3",
  contrastText: theme.palette.common.black
};

// @ts-ignore
theme.palette.awaitCheck = {
  main: "#ecffb3",
  light: "#ecffb3",
  dark: "#ecffb3",
  contrastText: theme.palette.common.black
};

// @ts-ignore
theme.palette.passedWithErrors = {
  main: "#ffc8b3",
  light: "#ffc8b3",
  dark: "#ffc8b3",
  contrastText: theme.palette.common.black
};

function CreateComponent(Component, pageProps, apolloClient) {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}>
          {/* <ApolloProvider client={apolloClient}> */}
            <CssBaseline />
            <Component {...pageProps} />
          {/* </ApolloProvider> */}
        </div>
      </ThemeProvider>
    </Container>
  );
}

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');

    // TODO WTF it not regenerated? disabled for check
    // if (jssStyles) {
    //   jssStyles.parentNode.removeChild(jssStyles);
    // }
  }
  static async getInitialProps({ Component, ctx: { req: { cookies } } }) {
    const token = process.browser ? Cookie.get('token') : cookies ? cookies.token : undefined;
    const apolloClient = initApollo({}, token);
    try {
      await getDataFromTree(CreateComponent(Component, {}, apolloClient));
    } catch (error) {
      console.log({ error: await error });
    }
    Head.rewind();
    const apolloState = apolloClient.extract();
    return {
      token,
      apolloState,
    };
  }
  constructor(props) {
    super(props);
    if (config.apolloEnabled) {
      if (typeof window === 'object') {
        // @ts-ignore
        this.apolloClient = initApollo(window.__APOLLO_STATE__, props.token);
      } else {
        // @ts-ignore
        global.__APOLLO_STATE__ = props.apolloState;
        // @ts-ignore
        props.apolloState;
        // @ts-ignore
        this.apolloClient = initApollo(props.apolloState, props.token);
      }
    }
  }
  render() {
    // @ts-ignore
    const { Component, pageProps } = this.props;

    // @ts-ignore
    return CreateComponent(Component, pageProps, this.apolloClient);
  }
}
