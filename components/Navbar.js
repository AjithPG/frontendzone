import React, { useState } from "react";
//import SearchBar from './SearchBar'
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from 'next/link';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const menuitems = [
    {
      href:'/',
      title:'Home'
    },
    {
      href:'/uicomponents',
      title:'UI Components',
      icon:'ri-code-s-slash-fill'
    },
   
  ];

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className="block lg:hidden px-2 py-2 sm:py-2 sm:px-2 flex justify-between items-center bg-white">
        <div className="w-auto">
          <Image
            src="/images/Devshots_logo.svg"
            layout="fixed"
            width="150"
            height="30"
          />
        </div>
        {/* <SearchBar/> */}
        <div
          className="settings bg-white rounded-xl flex justify-center items-center px-4 py-4 cursor-pointer ml-3"
          onClick={handleClick}
        >
          <i className={`ri-menu-line ri-lg`}></i>
        </div>
      </header>
      <div
        className={`mobile-nav lg:hidden  ${
          open ? "block" : " hidden"
        } fixed left-0 top-0 w-full h-screen z-50 bg-white  overflow-x-hidden overflow-y-auto`}
      >
        <div className="mobile-nav-header flex items-center justify-between p-2">
          <div className="w-auto">
            <Image
              src="/images/Devshots_logo.svg"
              layout="fixed"
              width="150"
              height="30"
            />
          </div>
          <div
            className="settings bg-white rounded-xl flex justify-center items-center px-4 py-4 cursor-pointer ml-3"
            onClick={handleClick}
          >
            <i className={`${open ? "ri-close-line" : ""} ri-lg`}></i>
          </div>
        </div>
        <ul className="flex flex-col p-4">
            {
              menuitems.map(({href,title,icon})=>(
                <li key={title}>
                <Link href={href}>
               
                  <a className={`w-full block text-base  flex items-center cursor-pointer px-3 py-4 rounded-tl-md rounded-bl-md  hover:text-primary ${router.asPath === href && 'text-primary bg-primaryLight' }`}>
                    <i className={`${icon} ri-1x mr-2`}></i>
                    <span>{title}</span>
                    </a>
                </Link>
              </li>
              ))
            }
        </ul>
      </div>
    </>
  );
}
