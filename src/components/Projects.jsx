import '../index.css';
import { PROJECTS }from "../assets/constants/index"


export default function Projects() {
  return (
        <div className="my-10 border-b border-neutral-900 pb-4">


            {
                PROJECTS.map((element) => (
            <div key={element.title} className="my-10 justify-start  flex md:gap-20 lg:gap-60 flex-col md:flex-row items-center space-y-4 md:space-y-0 lg:justify-center">
                <div className="card cursor-pointer relative p-2.5 bg-gray-200 rounded-3xl shadow-lg">
                <div className="card-overlay absolute inset-0 pointer-events-none bg-[conic-gradient(var(--bg)_0.0000001%,_var(--grey)_0.000104%)] bg-center bg-[size:600%_600%] opacity-10 contrast-105"></div>
                    <div className=" card-inner flex justify-start items-center overflow-hidden w-[190px] h-[254px] bg-gray-300 rounded-2xl text-center font-mono font-black text-[30px] text-[#c7c4c4]">
                        <img className="w-full h-full object-cover rounded-lg" src={element.image} alt="Description of Image" />
                    </div>
                </div>
                <div className="ml-0 md:ml-4">
                    <h1 className="text-xl font-bold">{element.title}</h1>
                    <p className="txt lg:text-sm">{element.technologies.join(", ")}</p>
                    <p className="my-5 max-w-lg text-md">{element.description}</p>
                    <div className="flex gap-5">
                        <button className="button">See Live</button>
                        <button className="button">Source Code</button>
                    </div>
                </div>
            </div>

                )
            )}




        </div>


  )
}
