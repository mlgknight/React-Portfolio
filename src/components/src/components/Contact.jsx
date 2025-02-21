import { CONTACT } from '../assets/constants/index.js';
import { motion } from 'framer-motion';

export default function Contact() {
	const slideInFromLeft = {
		initial: { x: -50, opacity: 0 },
		whileInView: { x: 0, opacity: 1 },
		transition: { type: 'spring', stiffness: 100, duration: 1 },
	};

	const slideInFromRight = {
		initial: { x: 50, opacity: 0 },
		whileInView: { x: 0, opacity: 1 },
		transition: { type: 'spring', stiffness: 100, duration: 1 },
	};

	const slideInFromBottom = {
		initial: { y: 50, opacity: 0 },
		whileInView: { y: 0, opacity: 1 },
		transition: { type: 'spring', stiffness: 100, duration: 1 },
	};

	return (
		<div className="border-b border-b-neutral-900 pb-20">
			<motion.h1
				className="my-10 text-center text-4xl"
				initial={{ y: -50, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ type: 'spring', stiffness: 100, duration: 1 }}
			>
				Get in Touch
			</motion.h1>
			<div className="text-center tracking-tighter">
				<motion.p
					className="my-4"
					initial={slideInFromLeft.initial}
					whileInView={slideInFromLeft.whileInView}
					transition={slideInFromLeft.transition}
				>
					{CONTACT.address}
				</motion.p>
				<motion.p
					className="my-4"
					initial={slideInFromRight.initial}
					whileInView={slideInFromRight.whileInView}
					transition={slideInFromRight.transition}
				>
					{CONTACT.phoneNo}
				</motion.p>
				<motion.a
					className="border-b"
					href={`mailto:${CONTACT.email}`}
					initial={slideInFromBottom.initial}
					whileInView={slideInFromBottom.whileInView}
					transition={slideInFromBottom.transition}
				>
					{CONTACT.email}
				</motion.a>
			</div>
			<div className="text-center mt-10">
				<p className="text-sm">
					&copy; {new Date().getFullYear()} Oussama Ajala
				</p>
			</div>
		</div>
	);
}
