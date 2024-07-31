import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link"
import { useState } from "react";

export default async function Header() {
  const { userId } = auth();
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-neutral-100">
        <div className="container mx-auto flex items-center justify-between py-4">

        
            <Link href={'/'} className="font-bold"> 
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="Logo-removebg-preview.png" className="h-10" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-red-500">CJ<span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-500">CODE</span></span>
        
    </div>
            </Link>
            <ul >
                <Link href={'/about'}><li className="inline-block mx-4 hover:text-red-700">About</li></Link>
                <Link href={'/equations'}><li className="inline-block mx-4 hover:text-red-700">Equations</li></Link>
                <Link href={'/cpp'}><li className="inline-block mx-4 hover:text-red-700">C++</li></Link>
                <Link href={'/javascript'}><li className="inline-block mx-4 hover:text-red-700">JAVASCRIPT</li></Link>
                <Link href={'/datastructurres'}><li className="inline-block mx-4 hover:text-red-700">Data Structurres</li></Link>
              </ul>
            <div>
              {userId ? ( 
            <div className="flex gap-4 items-center">
              <Link href='/dashboard' className="hover:text-red-700">Dashboard</Link>
              <UserButton />
            </div>
            ) : ( 
              <div className="flex gap-4 items-center">
                <Link href='/sing-up'>Sign Up</Link>
                <Link href='/sign-in'>Sign In</Link>
              </div>
              )}
              
              </div>
      </div>
    </div>
  )
}
