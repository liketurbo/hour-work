import React, { Fragment } from 'react';
import Head from 'next/head';
import Header from './Header';

type LayoutProps = {
  title: string;
  className?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title,
  className
}) => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main {...{ className }}>{children}</main>
  </Fragment>
);

export default Layout;
