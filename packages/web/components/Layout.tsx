import React, { Fragment } from 'react';
import Head from 'next/head';

type LayoutProps = {
  title: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
  </Fragment>
);

export default Layout;
