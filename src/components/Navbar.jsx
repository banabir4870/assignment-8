"use client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { cinzel } from "@/app/fonts";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter()
  const userData = authClient.useSession()
  const user = userData.data?.user;
  console.log('user data: ', user);
  
  const handleLogOut = async () =>{
    await authClient.signOut()
    router.push('/')
  }
  return (
    <div className="border-b bg-amber-200">
      <nav className=" flex justify-between items-center py-1 w-10/12 mx-auto">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={60}
            height={60}
            className="object-cover h-auto w-auto"
          />
          <h2 className={`${cinzel.className} text-2xl font-bold text-green-950`}>QurbaniHat</h2>
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

        {
          user ?
            <div className="flex gap-4 items-center">
              <h2>Hello, {user?.name}</h2>
              <Avatar>
                <Avatar.Image alt={user?.name} src={user?.image} />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <Button onClick={handleLogOut} variant="danger-soft">Log Out</Button>
            </div>
            :
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
        }
      </nav>
    </div>
  );
};

export default Navbar;