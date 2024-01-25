import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";

import {
  Header,
  Profile,
  About,
  Skill,
  Footer,
  Contact,
  Work,
  Experience,
} from "../components/layout/index";

export default function Home() {
  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);

  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.getItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const handleClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const expClick = () => {
    expRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const workClick = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });

    console.log("dddd");
  };
  const contactClick = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });

    console.log("dsdcsdc");
  };

  console.log(contactRef);
  return (
    <div className="container mx-auto dark:bg-gray-900 sm:w-[1440px] w-[343px]flex flex-col justify-center bg-white p-5 ">
      {/* <button onClick={() => setDarkMode((prevState) => !prevState)}>
        dark mode button
      </button> */}

      <Header
        handleClick={handleClick}
        expClick={expClick}
        workClick={workClick}
        contactClick={contactClick}
      ></Header>
      <Profile> </Profile>
      <About aboutRef={aboutRef}></About>
      <Skill></Skill>
      <Experience expRef={expRef}></Experience>
      <Work workRef={workRef}></Work>
      <Contact contactRef={contactRef}></Contact>
      <Footer></Footer>
    </div>
  );
}
