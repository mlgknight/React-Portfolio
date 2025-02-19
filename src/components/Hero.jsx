import { HERO_CONTENT, ABOUT_TEXT } from "../assets/constants/index";
import photo_oa from "../assets/photo_oa.jpeg";

export default function Hero() {

    console.log(HERO_CONTENT);

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex gap-10 flex-col md:flex-row items-center w-full">
                <div className="flex flex-col md:w-1/2 px-4 text-center md:text-left">
                    <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">{HERO_CONTENT[0].name}</h1>
                    <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent text-3xl font-bold">{HERO_CONTENT[0].role}</span>
                    <p className=" my-2 py-6 tracking-tighter">{ABOUT_TEXT}</p>
                </div>
                <div className="flex justify-center items-center w-100 px-2 text-center">
                    <img src={photo_oa} alt="Photo of Oussama Ajala, a Front-end Developer" className="w-full h-auto rounded-lg shadow-[5px_5px_0px_0px_rgba(109,40,217)]" />
                </div>
            </div>
        </div>
    );
}
