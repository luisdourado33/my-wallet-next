import React from "react";

import LoginTemplate from "@/components/templates/Login";

type Props = {};

export default function Login({}: Props) {
  return (
    <div className="flex items-center justify-center w-full bg-purple-900 h-screen">
      <LoginTemplate />
    </div>
  );
}
