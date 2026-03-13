import { useEffect, useState } from "react";
import navlogo from "../assets/Images/navlogo.png";
import Uk from "../assets/Images/uk.png";
import Button from "./Button";
import { Flaglist, Navlist } from "./Common/Helper";
import { Close, DownArrow, Hamburger } from "./Common/Icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="border-b border-[#EAEAF0] ">
      <div className="flex justify-between items-center max-w-300 w-full mx-auto px-5 xl:px-0">
        <div>
          <img
            className="max-w-40 sm:max-w-45 md:max-w-49 w-full my-4 md:my-0"
            src={navlogo}
            alt="Logo"
          />
        </div>
        <div>
          <ul className="hidden xl:flex gap-7">
            {Navlist.map((item, index) => (
              <li key={index} className="relative group">
                <a href="/">
                  {item}
                  <span className="absolute group-hover:w-full transition-all duration-300 ease-in-out left-0 w-0 h-0.5 bg-black -bottom-1"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-4">
          <div className="relative">
            <div
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 cursor-pointer"
            >
              <img className="max-w-9 md:max-w-12 w-full" src={Uk} alt="flag" />
              <p>EN</p>
              <div
                className={`transition-transform duration-300 ${
                  langOpen ? "rotate-180" : ""
                }`}
              >
                <DownArrow />
              </div>
            </div>
            <div
              className={`absolute right-0 mt-2 bg-white shadow-lg rounded-md p-2 transition-all duration-300 origin-top ${
                langOpen
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              {Flaglist.map((flag, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                >
                  <img className="w-6" src={flag.img} alt={flag.name} />
                  <p>{flag.name}</p>
                </div>
              ))}
            </div>
          </div>
          <Button
            className="my-4.5 font-semibold hidden md:block hover:text-[#070526] "
            text="Get in Touch"
          />
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden z-50 transition-transform duration-300 ease-in-out"
          >
            {open ? <Close /> : <Hamburger />}
          </button>
          <ul
            className={`xl:hidden flex flex-col items-center justify-center gap-7 bg-black fixed top-0 left-0 w-full h-screen transition-transform duration-300 ${
              open ? "translate-y-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              {Navlist.map((item, index) => (
                <li key={index} className="relative group">
                  <a
                    className="text-white text-center text-xl"
                    onClick={() => setOpen(false)}
                    href="#"
                  >
                    {item}
                    <span className="absolute group-hover:w-full transition-all duration-300 ease-in-out left-0 w-0 h-0.5 bg-white -bottom-1"></span>
                  </a>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
