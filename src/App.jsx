import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useState, useEffect } from 'react';

function App() {
	const [theme, setTheme] = useState(false);

	function toggle() {
		setTheme((prevTheme) => !prevTheme);
	}

	return (
		<div
			className={`overflow-x-hidden ${
				theme ? 'text-neutral-900' : 'text-neutral-300'
			} antialiased selection:bg-cyan-300 selection:text-cyan-900`}
		>
			<div className="fixed top-0 -z-10 h-full w-full">
				{theme ? (
					<div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
				) : (
					<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
				)}
			</div>

			<div className="container mx-auto px-8">
				<Navbar toggle={toggle} theme={theme} />
				<Hero />
				<Tech />
				<Projects />
				<Contact />
			</div>
		</div>
	);
}

export default App;
