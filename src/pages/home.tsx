import useAuth from "@/core/hooks/useAuth";
import React, { useEffect } from "react";

import HomeTemplate from "@/components/templates/Home";

export default function Home() {
  const authState = useAuth();

  return (
    <div className="h-screen">
      <HomeTemplate authenticationState={authState} />
    </div>
  );
}
