import { TechCard } from "../ui/TechnologyCards";
import { ButtonLink } from "../ui/Button";

const TechCards = [
  {
    cardLogo: "../logo/javscript.png",
    cardName: "Javascript",
  },
  {
    cardLogo: "../logo/typescript.png",
    cardName: "Typescript",
  },
  {
    cardLogo: "../logo/icon-react.png",
    cardName: "React",
  },
  {
    cardLogo: "../logo/icon-nextjs.png",
    cardName: "Next.js",
  },
  {
    cardLogo: "../logo/icon-nodejs.png",
    cardName: "Node.js",
  },
  {
    cardLogo: "../logo/icon-express.png",
    cardName: "Express.js",
  },
  {
    cardLogo: "../logo/icon-nest.png",
    cardName: "Nest.js",
  },
  {
    cardLogo: "../logo/icon-socket.png",
    cardName: "socket.io",
  },
  {
    cardLogo: "../logo/icon-postgresql.png",
    cardName: "PostgreSQL",
  },
  {
    cardLogo: "../logo/icon-mongodb.png",
    cardName: "MongoDB",
  },
  {
    cardLogo: "../logo/icon-sass.png",
    cardName: "Sass/Scss",
  },
  {
    cardLogo: "../logo/icon-tailwindcss.png",
    cardName: "Tailwindcss",
  },
  {
    cardLogo: "../logo/icon-figmapng",
    cardName: "Figma",
  },
  {
    cardLogo: "../logo/icon-cypress.png",
    cardName: "Cypress",
  },
  {
    cardLogo: "../logo/icon-storybook.png",
    cardName: "Storybook",
  },
  {
    cardLogo: "../logo/icon-git.png",
    cardName: "Git",
  },
];

export const Skill = () => {
  return (
    <div className="md:py-24 md:px-20 py-16 px-4 flex flex-col items-center gap-12  bg-white dark:bg-gray-950">
      <div className=" ">
        <div className=" flex justify-center">
          <ButtonLink Button={"Skill"}></ButtonLink>
          {/* <button className="text-center py-1 px-5 text-black rounded-xl bg-gray-200">
            Skills
          </button> */}
        </div>
        <h2 className=" flex justify-center text-xl text-gray-600 mt-4 dark:text-gray-50">
          The skills, tools and technologies I am really good at:
        </h2>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-8 mt-12 gap-12 gap-y-12 place-items-center  dark:text-gray-300 ">
        {TechCards.map((el) => (
          <TechCard logo={el.cardLogo} name={el.cardName}></TechCard>
        ))}
      </div>
    </div>
  );
};
