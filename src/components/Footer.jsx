import Link from "next/link";
import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { cinzel } from "@/app/fonts";


const Footer = () => {
    return (
        <footer className="border-t bg-amber-200 mt-10 py-10">
            <div className="grid grid-cols-12 gap-6 w-10/12 mx-auto">
                <div className="col-span-6 space-y-2">
                    <Link href={'/'}>
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
                    </Link>
                    <h3>About Us:</h3>
                    <p>QurbaniHat is a modern livestock marketplace where <br /> users can explore
                        and book animals like cows and goats for Qurbani. <br /> We ensure healthy
                        animals and a smooth booking experience.</p>
                </div>
                <div className="col-span-3 mt-4">
                    <h3 className="text-xl font-medium text-green-800 mb-4">Contact</h3>
                    <ul className="space-y-4">
                        <li>Email: <Link href={"#"}>support@qurbanihat.com</Link></li>
                        <li>Phone: <Link href={"#"}>+08801630143142</Link></li>
                        <li>Location: 70, Mohakhali, Dhaka, Bangladesh</li>
                    </ul>

                </div>
                <div className="col-span-3 mt-4">
                    <h3 className="text-xl font-medium text-green-800 mb-4">Social Links</h3>
                    <ul className="space-y-4">
                        <li>
                            <Link className="flex items-center gap-2" href={'#'}><CiFacebook className="text-xl" />Facebook</Link>
                        </li>
                        <li>
                            <Link className="flex items-center gap-2" href={'#'}><FaInstagram className="text-xl" />Instagram</Link>
                        </li>
                        <li>
                            <Link className="flex items-center gap-2" href={'#'}><PiYoutubeLogoLight className="text-xl" />YouTube</Link>
                        </li>
                    </ul>

                </div>
            </div>
            <p className="text-center mt-6">© {new Date().getFullYear()} QurbaniHat. All rights reserved.</p>
        </footer>
    );
};

export default Footer;