import React from "react";
import { FaWallet } from "react-icons/fa";

export default function Brand() {
  return (
    <div className="flex items-center">
      <FaWallet color="white" className="mr-2" />
      <h1 className="font-extrabold text-xl text-white">MyWallet</h1>
    </div>
  );
}
