"use client";
import { Button } from "@heroui/react";
import { Cinzel } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const cinzelFont = Cinzel({
  subsets: ['latin']
})

const Navbar = () => {
  return (
    <div className="border-b bg-amber-200">
      <nav className=" flex justify-between items-center  py-3 w-10/12 mx-auto">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={40}
            height={40}
            className="object-cover h-auto w-auto"
          />
          <h2 className={`${cinzelFont.className} text-2xl font-bold text-green-950`}>QurbaniHat</h2>
        </div>

        <ul className="flex items-center gap-5 font-semibold text-gray-400">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-animals"}>All Animals</NavLink>
          </li>
          <li>
            <NavLink href={"/profile"}>Profile</NavLink>
          </li>
        </ul>

        <div className="flex">
          <ul className="flex gap-4 items-center  text-sm">
            <li>
              <Button className='text-green-950 border-green-950' variant="outline"><Link href={"/login"}>Login</Link></Button>
            </li>
            <li>
              <Button className='text-green-950 border-green-950' variant="outline"><Link href={"/register"}>Register</Link></Button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;