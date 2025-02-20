import { RiReactjsLine } from 'react-icons/ri';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaAws } from 'react-icons/fa';
import { SiTypescript, SiMongodb } from 'react-icons/si';
import { RiTailwindCssFill } from 'react-icons/ri';
import { motion } from 'framer-motion';

export default function Tech() {
    const hoverAnimation = (duration) => ({
        y: [0, -5, 0],
        transition: {
            duration: duration,
            repeat: Infinity,
            repeatType: 'loop',
        },
    });

    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h1
                className="my-20 text-center text-4xl"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, duration: 1 }}
            >
                Tech Stack
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    animate={hoverAnimation(2)}
                >
                    <RiReactjsLine className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    animate={hoverAnimation(3)}
                >
                    <IoLogoJavascript className="text-6xl text-yellow-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    animate={hoverAnimation(4)}
                >
                    <SiTypescript className="text-6xl text-blue-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    animate={hoverAnimation(5)}
                >
                    <FaHtml5 className="text-6xl text-orange-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    animate={hoverAnimation(2)}
                >
                    <FaCss3Alt className="text-6xl text-blue-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    animate={hoverAnimation(1)}
                >
                    <RiTailwindCssFill className="text-6xl text-cyan-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    animate={hoverAnimation(5)}
                >
                    <SiMongodb className="text-6xl text-green-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    animate={hoverAnimation(4)}
                >
                    <FaNodeJs className="text-6xl text-green-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    animate={hoverAnimation(3)}
                >
                    <FaGitAlt className="text-6xl text-orange-400" />
                </motion.div>
                <motion.div
                    className="rounded-2xl border-4 border-neutral-800 p-4"
                    animate={hoverAnimation(2)}
                >
                    <FaAws className="text-6xl text-black-400" />
                </motion.div>
            </div>
        </div>
    );
}
