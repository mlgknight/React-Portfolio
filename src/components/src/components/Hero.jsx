import { HERO_CONTENT, ABOUT_TEXT } from '../assets/constants/index';
import photo_oa from '../assets/photo_oa.jpeg';
import { motion } from 'framer-motion';

export default function Hero() {
	console.log(HERO_CONTENT);

	const textAnimation = {
		initial: { x: -100, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		transition: { duration: 0.5 },
	};

	const photoAnimation = {
		initial: { x: 100, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		transition: { duration: 0.5 },
	};

	return (
		<div className="border-b border-neutral-900 pb-4 lg:mb-35">
			<div className="flex gap-10 flex-col md:flex-row items-center w-full">
				<div className="flex flex-col md:w-1/2 px-4 text-center md:text-left">
					<motion.h1
						className="pb-16 w-max text-center text-5xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
						initial={textAnimation.initial}
						animate={textAnimation.animate}
						transition={{ ...textAnimation.transition, delay: 0.5 }}
					>
						{HERO_CONTENT[0].name}
					</motion.h1>
					<motion.span
						className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-3xl font-bold"
						initial={textAnimation.initial}
						animate={textAnimation.animate}
						transition={{ ...textAnimation.transition, delay: 1 }}
					>
						{HERO_CONTENT[0].role}
					</motion.span>
					<motion.p
						className="my-2 py-6 tracking-tighter"
						initial={textAnimation.initial}
						animate={textAnimation.animate}
						transition={{ ...textAnimation.transition, delay: 1.5 }}
					>
						{ABOUT_TEXT}
					</motion.p>
					<motion.div
						className="flex gap-5 justify-center md:justify-start"
						initial={textAnimation.initial}
						animate={textAnimation.animate}
						transition={{ ...textAnimation.transition, delay: 2 }}
					>
						<a
							href="/public/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="button text-center text-3xl w-50 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
						>
							Resume
						</a>
					</motion.div>
				</div>
				<motion.div
					className="flex justify-center items-center w-100 px-2 text-center"
					initial={photoAnimation.initial}
					animate={photoAnimation.animate}
					transition={{ ...photoAnimation.transition, delay: 2 }}
				>
					<img
						src={photo_oa}
						alt="Photo of Oussama Ajala, a Front-end Developer"
						className="lg:w-full w-xs h-auto rounded-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)]"
					/>
				</motion.div>
			</div>
		</div>
	);
}
