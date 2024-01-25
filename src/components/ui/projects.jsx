import { SkillButton, SkillSet } from "../ui/SkillButton";

export const Projects = (props) => {
  return (
    <div className="sm:grid grid-cols-2  flex flex-col  p-8 sm:py-20 sm:px-14 ">
      <div className="bg-gray-100 rounded-xl">
        <img
          className="flex justify-center  p-12 rounded-xl h-[384px] w-[100%]"
          src={props.screenshot}
          alt=""
        />
      </div>
      <div className="p-12 gap-y-6  rounded-xl">
        <h1 className="text-lg sm:text-xl text-gray-900 text-center ">
          {props.name}
        </h1>

        <p className="text-base">{props.detail}</p>

        <SkillSet skills={props.skillset}></SkillSet>
        <img src="/link-icon.png" alt="" />
      </div>
    </div>
  );
};
