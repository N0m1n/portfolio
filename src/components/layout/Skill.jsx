import { TechCard } from "../ui/TechnologyCards";

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
    <div className="py-20 px-14 border flex flex-col items-center gap-12  bg-gray-50">
      <div className="">
        <div className=" flex  justify-center">
          <button className="text-center py-1 px-5 text-black rounded-xl bg-gray-200">
            Skills
          </button>
        </div>
        <h2 className=" flex justify-center text-xl text-gray-600 mt-4">
          The skills, tools and technologies I am really good at:
        </h2>
        <div className="grid max-w-md:grid-cols-3 md:grid-cols-8 mt-12 gap-12 gap-y-12 justify-center">
          {TechCards.map((el) => (
            <TechCard logo={el.cardLogo} name={el.cardName}></TechCard>
          ))}
        </div>
      </div>
    </div>
  );
};
