import '../lib/bootstrap';
// --- Post bootstrap -----
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import { ApolloClient } from 'apollo-boost';
import App, { Container } from 'next/app';
import React from 'react';
import getPageContext, { PageContext } from '../lib/getPageContext';
import withApollo from '../lib/withApollo';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

class MyApp extends App<{ apolloClient: ApolloClient<any> }> {
  constructor() {
    // @ts-ignore
    super();
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        {/* Wrap every page in Styles and Theme providers */}
        <StylesProvider
          generateClassName={this.pageContext.generateClassName as any}
          sheetsRegistry={this.pageContext.sheetsRegistry}
          sheetsManager={this.pageContext.sheetsManager}
        >
          {/* ThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <ThemeProvider theme={this.pageContext.theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
            <ApolloProvider client={apolloClient}>
              <ApolloHooksProvider client={apolloClient}>
                <Component pageContext={this.pageContext} {...pageProps} />
              </ApolloHooksProvider>
            </ApolloProvider>
          </ThemeProvider>
        </StylesProvider>
      </Container>
    );
  }

  private pageContext: PageContext;
}

export default withApollo(MyApp);
