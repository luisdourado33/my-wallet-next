import React from "react";

type Props = {
  children?: React.ReactNode;
  bgImage?: any;
  className?: string;
};

export default function Hero({ children, className, bgImage }: Props) {
  return <div className={`px-12 bg-purple-900 ${className}`}>{children}</div>;
}
