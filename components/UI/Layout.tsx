import * as React from "react";
import Head from "next/head";

type LayoutProps = {
  title: string;
  children?: React.ReactNode;
};

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title ? title : "πβ¨βοΈππ»ππ¨π»βπ¬π±π§ββοΈπͺ±πΈπ€ π¦"}</title>
        <link rel="icon" href="./atom.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;600;800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="A NextJS, TypeScript, TailwindCSS and Redux Toolkit template."
        />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;
