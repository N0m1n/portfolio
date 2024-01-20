import Image from "next/image";
import { Inter } from "next/font/google";

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
  return (
    <div className="container w-[1440px] bg-white p-5 ">
      <Header></Header>
      <Profile> </Profile>
      <About></About>
      <Skill></Skill>
      <Experience></Experience>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
