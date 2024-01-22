import { SkillButton, SkillSet } from "../ui/SkillButton";

export const Projects = (props) => {
  return (
    <div className="grid grid-cols-2 py-20 px-14 " > 
      <div>
        <img
          className="flex justify-center  p-12 rounded-xl h-[384px] w-[100%]"
          src={props.screenshot}
          alt=""
        />
      </div>
      <div className="p-12 gap-y-6  rounded-xl">
        <h1 className="text-lg text-gray-600 text-center ">{props.name}</h1>

        <p className="text-base">{props.detail}</p>

        <SkillSet skills={props.skillset}></SkillSet>
        <img src="/link-icon.png" alt="" />
      </div>
    </div>
  );
};
