import '../index.css';
import { useState, useEffect } from 'react';
import { useAnimate, stagger, motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function Hamburger() {
    const [open, setOpen] = useState(false);
    const [scope, animate] = useAnimate();

    // the stagger effect
    const staggerList = stagger(0.1, { startDelay: 0.25 });

    // create the animations that will be applied
    // whenever the open state is toggled

    useEffect(() => {
        animate(
            'ul',
            {
                width: open ? 100 : 0, // Adjusted width
                height: open ? 150 : 0, // Adjusted height
                opacity: open ? 1 : 0,
            },
            {
                type: 'spring',
                bounce: 0,
                duration: 0.4,
            }
        );
        animate(
            'li',
            open
                ? { opacity: 1, scale: 1, x: 0 }
                : { opacity: 0, scale: 0.3, x: -50 },
            {
                duration: 0.2,
                delay: open ? staggerList : 0,
            }
        );
    }, [open]);

    return (
        <div className=" lg:hidden" ref={scope}>
            <motion.button className="menu_button" onClick={() => setOpen(!open)} whileTap={{ scale: 0.95 }}>
                Menu
            </motion.button>
            <ul className="p-2 my-0">
                <motion.li className="p-1">
                    <a href="https://www.linkedin.com/in/oussama-ajala-779b6a22b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="cursor-pointer text-2xl" />
                    </a>
                </motion.li>
                <motion.li className="p-1">
                    <a href="https://github.com/mlgknight" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="cursor-pointer text-2xl" />
                    </a>
                </motion.li>
                <motion.li className="p-1">
                    <a href="https://www.instagram.com/ousssamaajala/?hl=en" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="cursor-pointer text-2xl" />
                    </a>
                </motion.li>
            </ul>
        </div>
    );
}
