import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <Image
        src="/banner.png"
        alt="banner blur"
        fill
        className="object-cover blur-xl scale-110"
      />
      <Image
        src="/banner.png"
        alt="banner"
        fill
        className="object-contain"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Book Your Perfect Qurbani Animal Today
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-100">
            Explore healthy cows & goats from trusted sellers across Bangladesh
          </p>

          <div>
            <Link href="/all-animals">
              <Button variant="outline" className="text-xl text-blue-50">
                Browse Animals
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;