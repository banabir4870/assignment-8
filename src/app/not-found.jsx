import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col text-center items-center justify-center space-y-6">
      <h2 className="text-4xl font-bold text-black">Page Not Found</h2>
      <p>error: <span className="text-xl text-gray-500">404</span></p>
      <Link href={"/"}>
        <Button variant="outline" className={'border-green-800 text-green-950'}>Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;