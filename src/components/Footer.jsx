import Link from "next/link";
import Image from "next/image";
import { Cinzel } from "next/font/google";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";


const cinzelFont = Cinzel({
    subsets: ['latin']
})

const Footer = () => {
    return (
        <footer className="grid grid-cols-12 gap-6 w-10/12 mx-auto mt-10">
            <div className="col-span-6">
                <div className="flex gap-2 items-center">
                    <Image
                        src={"/logo.png"}
                        alt="logo"
                        loading="eager"
                        width={60}
                        height={60}
                        className="object-cover h-auto w-auto"
                    />
                    <h2 className={`${cinzelFont.className} text-2xl font-bold text-green-950`}>QurbaniHat</h2>
                </div>
                <p>Premium Livestock for Your Qurbani. <br /> Needs Carefully Selected, Healthy & Farm-Raised Animals. <br /> Seamless Booking Experience. <br />Quality You Can Trust</p>
            </div>
            <div className="col-span-3 mt-4">
                <h3 className="text-xl font-medium text-green-800 mb-4">COMPANY</h3>
                <ul className="space-y-4">
                    <li><Link href={'#'}>About Us</Link></li>
                    <li><Link href={"#"}>Contact</Link></li>
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
        </footer>
    );
};

export default Footer;