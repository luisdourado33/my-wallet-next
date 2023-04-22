"use client";

import React from "react";
import useAuth from "@/core/hooks/useAuth";

import Brand from "@/components/atoms/Brand";
import { FaUserAlt, FaPowerOff } from "react-icons/fa";

import { CALL_TO_ACTIONS, MENU_ITEMS } from "./config";

import Link from "next/link";

interface Props {
  className?: string;
}

export default function Navbar({ className }: Props) {
  const authState = useAuth();

  const renderItems = MENU_ITEMS?.map((item, index) => (
    <Link
      className="flex items-center mx-3 hover:border-b-2 text-sm border-purple-800 text-white transition duration-300 ease-in-out"
      key={index}
      href={item.href}
    >
      {item.icon}
      <span className="ml-1">{item.label}</span>
    </Link>
  ));

  const renderCallToActions = CALL_TO_ACTIONS.map((item, index) => (
    <button
      className={`
      flex
      items-center
      mx-1
      text-sm
      text-white
      font-bold
      hover:bg-purple-800 p-2 px-4 rounded transition duration-300 ease-in-out
      ${item.variant == "solid" && "bg-purple-800"}
      ${item.variant == "outline" && "border border-purple-800"}`}
      key={index}
      onClick={item.action}
    >
      {item.label}
      <span className={item?.icon && `ml-2`}>{item.icon}</span>
    </button>
  ));

  const renderAuthenticatedMenu = (
    <>
      <button
        className={`flex items-center mx-1 text-sm hover:bg-purple-800 p-2 px-4 rounded transition duration-300 ease-in-out text-white bg-purple-800`}
      >
        <span className="mr-2">
          <FaUserAlt />
        </span>
        Olá, {authState.user?.firstName}
      </button>
      <button
        onClick={() => authState.signOut()}
        className={`flex items-center mx-1 text-sm hover:bg-red-800 p-2 px-4 rounded transition duration-300 ease-in-out text-white`}
      >
        <span>Sair</span>{" "}
        <span className="ml-2">
          <FaPowerOff />
        </span>
      </button>
    </>
  );

  return (
    <nav
      className={`px-12 flex w-full py-5 justify-between items-center ${className}`}
    >
      <Brand />
      <div className="flex justify-between items-center">
        <div className="flex mr-2">{renderItems}</div>
        <div className="flex">
          {authState.isAuthenticated
            ? renderAuthenticatedMenu
            : renderCallToActions}
        </div>
      </div>
    </nav>
  );
}
