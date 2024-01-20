export const Profile = () => {
  return (
    <div className="py-20 px-24 border w-full">
      <div className="py-8 gap-12  flex flex-row">
        <div className="col-1 w-full flex flex-col gap-12 *:text-gray-600">
          <div className="w-full flex flex-col gap-2">
            <h1 className="text-6xl font-bold text-black">Hi, I’m Nomin 👋 </h1>
            <p className="text-base w-[786px] text-justify">
              m a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-row">
              <img src="/location.png" alt="" />
              <p> Ulaanbaatar, Mongolia</p>
            </div>
            <div className="flex flex-row gap-2">
              <div className="rounded-full bg-green-600 items-center size-2"></div>
              <p> Available for new projects</p>
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <img src="/twittericon.png" alt="" />
            <img src="/giticon.png" alt="" />
            <img src="/figmaicon.png" alt="" />
          </div>
        </div>
        <div className="relative z-10">
          <img className="size-72 " src="/avatar.png" alt="" />
          <div className="size-72 absolute left-[20px] top-[20px] bg-gray-200 -z-10"></div>
        </div>
      </div>
    </div>
  );
};
