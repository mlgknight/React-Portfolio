import { RiReactjsLine } from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

export default function Tech() {

         {
    return (
      <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Tech Stack</h1>
        <div className="flex flex-wrap items-center justify-center gap-4" >
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <RiReactjsLine  className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <IoLogoJavascript  className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <SiTypescript  className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <FaHtml5  className="text-7xl text-orange-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <FaCss3Alt  className="text-7xl text-blue-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <RiTailwindCssFill  className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <SiMongodb  className="text-7xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <FaNodeJs  className="text-7xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <FaGitAlt  className="text-7xl text-orange-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                 <FaAws  className="text-7xl text-black-400"/>
            </div>
        </div>
      </div>
    )
  }
}
