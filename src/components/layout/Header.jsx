import useDownloader from "react-use-downloader";

import { useState, useEffect, useRef } from "react";

export const Header = (props) => {
  const { download } = useDownloader();
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setshowSideBar] = useState(false);

  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.getItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const fileUrl = "/Resume.pdf";
  const fileName = "Resume.pdf";

  const handleOpen = () => {
    setShowMenu(!showMenu);

    setTimeout(() => {
      setshowSideBar(!showSideBar);
    }, 10);
  };

  const handleClose = () => {
    setshowSideBar(!showSideBar);
    setTimeout(() => {
      setShowMenu(!showMenu);
    }, 400);
  };

  return (
    <div>
      <div className=" sm:flex flex-row place-content-between  bg-white  py-4 px-20 dark:bg-black ">
        <h2 className="sm:visible flex items-center  invisible sm:font-semibold">
          {"<SS />"}
        </h2>
        <div>
          <div className="  bg-white  flex  sm:hidden visible relative  cursor-pointer">
            <img
              onClick={handleOpen}
              className="dark:bg-gray-900 dark:text-gray-300"
              src="/Header.svg"
              alt=""
            />
          </div>
          {showMenu && (
            <div>
              <div
                onClick={handleClose}
                className={` ${
                  showSideBar && "bg-black"
                }  bg-opacity-30 w-[100vw] h-[100vh] fixed left-0 top-0 transition-all duration-300  ease-in-out`}
              ></div>

              <div className="absolute top-0 right-0 overflow-hidden w-[70vw] h-[100vh]">
                <div
                  className={`bg-white dark:bg-gray-900 h-[100vh] w-[100%] p-5 absolute top-0 right-0  ${
                    showSideBar ? "translate-x-0" : "translate-x-[100vw]"
                  } transition-all duration-300  ease-in-out`}
                >
                  <div className="flex justify-between ">
                    <p className="text-base text-gray-600 dark:text-gray-300  ">
                      {"<SS />"}
                    </p>
                    <button
                      onClick={handleClose}
                      className="h-[40px] w-[40px] rounded-md border-[2px]"
                    >
                      <img src="/x-button.png" alt="" />
                    </button>
                  </div>
                  <div className="flex  flex-col gap-4 text-base text-gray-600 dark:text-gray-300 ">
                    <h4 onClick={props.handleClick}>About</h4>
                    <h4 onClick={props.workClick}>Work</h4>
                    <h4 onClick={props.expClick}>Experience</h4>
                    <h4 onClick={props.contactClick}>Contact</h4>
                  </div>
                  <div className="flex flex-row  text-base text-gray-600  dark:text-gray-300 justify-between  mt-4">
                    <p>Switch Theme </p>
                    <img
                      className="size-6"
                      onClick={() => setDarkMode((prevState) => !prevState)}
                      src="/icon.svg"
                      alt=""
                    />
                  </div>
                  <button
                    className="bg-gray-900  dark:bg-gray-50  dark:text-gray-900 rounded-xl w-full text-gray-300 mt-4 cursor-pointer"
                    onClick={() => download(fileUrl, fileName)}
                  >
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <ul className="sm:flex flex-row space-x-6 hidden items-center dark:text-gray-300 dark:bg-gray-950  cursor-pointer">
          <li onClick={props.handleClick}>About</li>
          <li onClick={props.workClick}>Work </li>
          <li onClick={props.expClick}>Experience</li>
          <li onclick={props.contactClick}>Contact</li>
          <li>
            <img
              className="size-16"
              onClick={() => setDarkMode((prevState) => !prevState)}
              src="/Icon.svg"
              alt=""
            />
          </li>
          <button
            className="rounded-full w-full bg-black  text-white dark:bg-white dark:text-gray-900 cursor-progress"
            onClick={() => download(fileUrl, fileName)}
          >
            Download CV
          </button>
        </ul>
      </div>
    </div>
  );
};
