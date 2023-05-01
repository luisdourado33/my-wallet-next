import React from "react";
import { FaWallet } from "react-icons/fa";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Brand({ children, className = "" }: Props) {
  return (
    <div className={`flex items-center ${className}`}>
      <FaWallet color="white" className="mr-2" />
      <h1 className="font-extrabold text-xl text-white">MyWallet</h1>
    </div>
  );
}
