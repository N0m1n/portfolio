import Image from "next/image";
import { Inter } from "next/font/google";

import {
  Header,
  Profile,
  About,
  Skill,
  Footer,
  Contact,
  Projects,
  Experience,
} from "../components/layout/index";

export default function Home() {
  return (
    <div className="container *:justify-items-center">
      <div className="bg-red-200 text-center font-semibold hover:bg-red-700">
        {" "}
        New project
      </div>
      <Header></Header>
      <Profile> </Profile>
      <About></About>
      <Skill></Skill>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
