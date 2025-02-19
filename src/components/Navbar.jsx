import '../index.css';
import logo from "../assets/logo.png"
import logo2 from "../assets/logo2.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Navbar({toggle, theme}) {
  return (
    <nav className= "mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
            <img className=" mx-2 w-13 rounded-2xl" src={!theme ? logo : logo2} alt="" />
        </div>
        <div className="m-8 flex items-center gap-4 text-2xl cursor-pointer ">
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
        <div className="toggle-switch">
          <label className="switch-label">
            <input type="checkbox" onClick={toggle} className="checkbox"/>
            <span className="slider"></span>
          </label>
        </div>  
        </div>
      
    </nav>
  )
}
