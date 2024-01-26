import { Projects } from "../ui/projects";

const projectDetials = [
  {
    screen: "/fiskil.png",
    title: "Fiskil",
    detials:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: [
      "react ",
      "next.js",
      "Typescript",
      "PostSQL",
      " Tailwindcss",
      "Figma",
    ],
  },
];

export const Work = ({ workRef }) => {
  return (
    <div ref={workRef} className="sm:py-24 sm:px-20 py-16 px-4 ">
      <div className=" flex  justify-center">
        <button className="text-center py-1 px-5 text-black rounded-xl bg-gray-200">
          Work
        </button>
      </div>
      <h2 className=" flex justify-center text-xl text-gray-600 dark:text-gray-300 mt-4">
        Here is a quick summary of my most recent experiences
      </h2>
      <div>
        {projectDetials.map((el, index) => (
          <Projects
            element={el}
            left={index % 2 === 0 ? true : false}
            screenshot={el.screen}
            name={el.title}
            skillset={el.skills}
            detail={el.detials}
          ></Projects>
        ))}
      </div>
    </div>
  );
};
