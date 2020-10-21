import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Menu
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
          }
        >
          Admin Layout
        </span>
        <Link href="/admin/dashboard">
          <a className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800">
            Dashboard
          </a>
        </Link>
        <Link href="/admin/settings">
          <a className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800">
            Settings
          </a>
        </Link>
        <Link href="/admin/tables">
          <a className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800">
            Tables
          </a>
        </Link>
        <Link href="/admin/maps">
          <a className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800">
            Maps
          </a>
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-500"
          }
        >
          Auth Layout
        </span>
        <Link href="/auth/login">
          <a className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800">
            Login
          </a>
        </Link>
        <Link href="/auth/register">
          <a className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800">
            Register
          </a>
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
      </div>
    </>
  );
};

export default IndexDropdown;
