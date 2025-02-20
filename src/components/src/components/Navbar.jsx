import '../index.css';
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import Hamburger from './Hamburger';

export default function Navbar({ toggle, theme }) {
    return (
        <nav className="mb-10 flex items-center justify-between py-6">
            <div className="toggle-switch fixed top-0 left-0 lg:hidden">
                <label className="switch-label">
                    <input type="checkbox" onClick={toggle} className="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
            <div className="hidden lg:flex justify-start">
                <div className=" lg:flex lg:top-12 lg:left-20 top-6 left-10 flex-shrink-0  items-center">
                    <img
                        className=" mx- 2 w-13 rounded-2xl"
                        src={!theme ? logo : logo2}
                        alt="Logo"
                    />
                </div>
            </div>
            <div className="flex justify-end items-start">
                <Hamburger />
            </div>

            <div className="hidden m-8 lg:flex items-center gap-4 text-2xl cursor-pointer">
                <a href="https://www.linkedin.com/in/oussama-ajala-779b6a22b/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/mlgknight" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/ousssamaajala/?hl=en" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <div className="toggle-switch">
                    <label className="switch-label">
                        <input type="checkbox" onClick={toggle} className="checkbox" />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </nav>
    );
}
