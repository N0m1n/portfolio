export const Profile = () => {
  return (
    <div className="sm:py-24 sm:px-20  w-full py-16 px-4">
      <div className="sm:py-8 gap-12 w-full flex sm:flex-row flex-col-reverse">
        <div className="col-1 w-full flex flex-col gap-12 *:text-gray-600 *:dark:text-gray-300">
          <div className="w-full flex flex-col gap-2">
            <h1 className="sm:text-6xl text-4xl font-bold dark:text-gray-50 text-black">
              Hi, I’m Nomin 👋{" "}
            </h1>
            <p className="text-base w-full text-justify">
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
            <img className="dark:white" src="/twittericon.png" alt="" />
            <img src="/giticon.png" alt="" />
            <img src="/figmaicon.png" alt="" />
          </div>
        </div>
        <div className=" flex justify-center">
          <img
            className=" border-8 border-white sm:size-72 size-60"
            src="/avatar.png"
            alt=""
          />
          {/* <div className="size-72 absolute left-[5px] top-[5px] bg-gray-200 -z-10"></div> */}
        </div>
      </div>
    </div>
  );
};
