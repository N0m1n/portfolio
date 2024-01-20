import { PositionTitles } from "../ui/Positions";

const positionDetials = [
  {
    comLogo: "/logo-upwork.png",
    position: "Sr. Frontend Developer",
    duties: {
      duties1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      duties2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
      duties3: "Sed quis justo ac magna.",
      duties4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    date: "Nov 2021 - Present",
  },
  {
    comLogo: "/logo-upwork.png",
    position: "Team Lead",
    duties: {
      duties1: "Sed quis justo ac magna.",
      duties2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      duties3: "Sed quis justo ac magna.",
      duties4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    date: "Jul 2017 - Oct 2021",
  },
  {
    comLogo: "/logo-upwork.png",
    position: "Full Stack Developer",
    duties: {
      duties1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      duties2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    date: "Dec 2015 - May 2017",
  },
];

export const Experience = () => {
  return (
    <div className="py-20 px-14 border flex flex-col items-center gap-12  bg-gray-50">
      <div className=" flex  justify-center">
        <button className="text-center py-1 px-5 text-black rounded-xl bg-gray-200">
          Experience
        </button>
      </div>
      <h2 className=" flex justify-center text-xl text-gray-600 mt-4">
        Here is a quick summary of my most recent experiences
      </h2>

      <div className="flex flex-col gap-y-12 ">
        {positionDetials.map((el) => (
          <PositionTitles
            logo={el.comLogo}
            position={el.position}
            para1={el.duties.duties1}
            para2={el.duties.duties2}
            para3={el.duties.duties3}
            para4={el.duties.duties4}
            date={el.date}
          ></PositionTitles>
        ))}
      </div>
    </div>
  );
};
