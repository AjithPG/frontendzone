import React from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from "next/image";
export default function SideNav() {
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

  return (
    <div className="bg-white h-screen pl-7">
      <div className="w-full py-5">
        <Image src="/images/Devshots_logo.svg" layout="fixed" width="150" height="50" />
      </div>
      <ul className="flex flex-col">
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
  );
}
