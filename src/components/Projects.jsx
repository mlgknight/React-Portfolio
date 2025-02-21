import '../index.css';
import { PROJECTS } from '../assets/constants/index';
import { motion } from 'framer-motion';

export default function Projects() {
	const leftAnimation = {
		initial: { x: -50, opacity: 0 },
		whileInView: { x: 0, opacity: 1 },
		transition: { type: 'spring', stiffness: 100, duration: 1 },
	};

	const rightAnimation = {
		initial: { x: 50, opacity: 0 },
		whileInView: { x: 0, opacity: 1 },
		transition: { type: 'spring', stiffness: 100, duration: 1 },
	};

	return (
		<div className="my-10 border-b border-neutral-900 pb-4">
			<motion.h1
				className="my-20 text-center text-4xl"
				initial={{ y: -50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ type: 'spring', stiffness: 100, duration: 1 }}
			>
				Projects
			</motion.h1>

			{PROJECTS.map((element, index) => (
				<div
					key={element.title}
					className="my-10 justify-start flex md:gap-20 lg:gap-60 flex-col md:flex-row items-center space-y-4 md:space-y-0 lg:justify-center"
				>
					<motion.div
						className="card cursor-pointer relative p-2.5 bg-gray-200 rounded-3xl shadow-lg"
						initial={leftAnimation.initial}
						whileInView={leftAnimation.whileInView}
						transition={leftAnimation.transition}
					>
						<div className="card-overlay absolute inset-0 pointer-events-none bg-[conic-gradient(var(--bg)_0.0000001%,_var(--grey)_0.000104%)] bg-center bg-[size:600%_600%] opacity-10 contrast-105"></div>

						<div className="card-inner flex justify-start items-center overflow-hidden w-[190px] h-[254px] bg-gray-300 rounded-2xl text-center font-mono font-black text-[30px] text-[#c7c4c4]">
							<img
								className="w-full h-full object-cover rounded-lg"
								src={element.image}
								alt="Description of Image"
							/>
						</div>
					</motion.div>
					<motion.div
						className="ml-0 md:ml-4"
						initial={rightAnimation.initial}
						whileInView={rightAnimation.whileInView}
						transition={rightAnimation.transition}
					>
						<h1 className="text-xl font-bold">{element.title}</h1>
						<p className="txt lg:text-sm">{element.technologies.join(', ')}</p>
						<p className="my-5 max-w-lg text-md">{element.description}</p>
						<div className="flex gap-5">
							<a href={element.live} target="_blank" rel="noopener noreferrer">
								<button className="button px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
									See Live
								</button>
							</a>
							<a
								href={element.source}
								target="_blank"
								rel="noopener noreferrer"
							>
								<button className="button px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300">
									Source Code
								</button>
							</a>
						</div>
					</motion.div>
				</div>
			))}
		</div>
	);
}
