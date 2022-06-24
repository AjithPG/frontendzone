import React from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function SideNav() {
  const router = useRouter();

  const menuitems = [
    {
      href:'/',
      title:'Home'
    },
    {
      href:'/uicomponents',
      title:'UI Components'
    },
   
  ];

  return (
    <div className="bg-white h-screen pl-7  py-3">
      <ul className="flex flex-col">
        {
          menuitems.map(({href,title})=>(
            <li key={title}>
            <Link href={href}>
              <a className={`w-full block text-base  cursor-pointer px-3 py-4 rounded-tl-md rounded-bl-md  hover:text-primary ${router.asPath === href && 'text-primary bg-primaryLight' }`}>{title}</a>
            </Link>
          </li>
          ))

          
        }
       
       
      </ul>
    </div>
  );
}
