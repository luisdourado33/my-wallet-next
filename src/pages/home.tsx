import React, { useEffect } from "react";
import useAuth from "@/core/hooks/useAuth";

import Head from "next/head";

import HomeTemplate from "@/components/templates/Home";

export default function Home() {
  const authState = useAuth();

  return (
    <div className="h-screen">
      <Head>
        <title>My Wallet - Home</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <HomeTemplate authenticationState={authState} />
    </div>
  );
}
