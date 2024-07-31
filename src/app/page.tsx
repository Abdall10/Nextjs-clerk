import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";


export default function Home() {
  return (
    <>
    <div className=" flex justify-between items-center pt-4 space-x-0 border p-4 bg-gray-100">
    <IoLogoJavascript className="text-yellow-500 text-6xl"/>
    <TbBrandCpp className="text-blue-600 text-6xl"/>
    <FaJava className="text-red-600 text-6xl" />
    <FaNode className="text-green-600 text-6xl" />
    <SiVisualstudiocode className="text-blue-600 text-6xl"/>
    <FaGitAlt className="text-gray-600 text-6xl"/>
    <FaPython  className="text-blue-600 text-6xl"/>
    <SiNextdotjs className="text-gray-900 text-6xl"/>
    <FaReact className="text-blue-600 text-6xl"/>
    <FaAngular className="text-red-600 text-6xl"/>
    <FaPhp className="text-blue-800 text-6xl"/>
    </div>
    <h1 className="text-6xl font-bold text-center mt-10 text-red-600 pt-10"> Welcome to CJCode </h1>
    <p className="text-2xl text-center mt-10">Welcome to CJCODE. Our page contains many programming languages. You can learn whatever you want here. The important thing is always to continue learning.</p>
    <div className="text-center pt-3">
    <Link href="/" passHref>
        <Button variant="outline" className="text-cyan-600">Get Started</Button>
      </Link>
      </div>
    </>
  );
}
