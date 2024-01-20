import { Projects } from "../ui/projects";

const projectDetials = [
  {
    screen: "/picture.png",
    title: "Fiskil",
    detials:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    skills: {
      react: "react",
      next: "next.js",
      typescript: "Typescript",
      postgreSQL: "PostSQL",
      Tailwind: "Tailwindcss",
      figma: "Figma",
    },
  },
];

export const Work = () => {
  return (
    <div>
      <div className=" flex  justify-center">
        <button className="text-center py-1 px-5 text-black rounded-xl bg-gray-200">
          Experience
        </button>
      </div>
      <h2 className=" flex justify-center text-xl text-gray-600 mt-4">
        Here is a quick summary of my most recent experiences
      </h2>
      <div>
        {projectDetials.map((el) => (
          <Projects
            screenshot={el.screen}
            name={el.title}
            detail={el.detials}
          ></Projects>
        ))}
      </div>
    </div>
  );
};
