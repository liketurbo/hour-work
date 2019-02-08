import React, { Fragment } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

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
    <Navbar />
    <main {...{ className }}>{children}</main>
  </Fragment>
);

export default Layout;
