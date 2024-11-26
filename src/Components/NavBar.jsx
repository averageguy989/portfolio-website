import { useState } from "react"
import Hamburger from 'hamburger-react'

export const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className="p-6 text-sm sm:text-md sm:px-[6%] xl:px-[12%] flex justify-between items-center">
            <div className="flex flex-row gap-2 font-semibold items-center">
                <div className="bg-yellow-300 p-3 rounded-xl"></div>
                <div>CHANDRU</div>
            </div>
            <nav className="hidden md:flex flex-row gap-12">
                <a href="#home" className="font-semibold text-gray-500 hover:text-black">Home</a>
                <a href="#projects" className="font-semibold text-gray-500 hover:text-black">Projects</a>
                <a href="#contact" className="font-semibold text-gray-500 hover:text-black">Contact</a>
            </nav>
            <div className="md:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={25} duration={0.4} hideOutline={false} color="#000000"/>
            {isOpen && (
                      <div
                        className={`absolute top-20 left-0 w-full bg-white flex flex-col items-start p-8 gap-6 md:hidden 
                        ${isOpen ? 'animate-slideIn' : 'animate-slideOut'}`}
                      >
                      <a
                        href="#home"
                        className="font-medium text-2xl text-black"
                        onClick={() => setOpen(false)}
                      >
                        Home
                      </a>
                      <a
                        href="#projects"
                        className="font-medium text-2xl text-black"
                        onClick={() => setOpen(false)}
                      >
                        Projects
                      </a>
                      <a
                        href="#contact"
                        className="font-medium text-2xl text-black"
                        onClick={() => setOpen(false)}
                      >
                        Contact
                      </a>
                      </div>
                    )}

            </div>
        </nav>
    )
}
