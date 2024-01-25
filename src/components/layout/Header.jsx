import useDownloader from "react-use-downloader";

import { useState } from "react";
import { Menu } from "@/components/layout/sidebar";

export const Header = (props) => {
  const { download } = useDownloader();
  const [showMenu, setShowMenu] = useState(false);
  const [showSideBar, setshowSideBar] = useState(false);

  // const fileUrl = "/Resume.pdf";
  // const fileName = " Resume.pdf";

  // onClick ={download()={fileUrl,fileName}}

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };

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
      <div className=" sm:flex flex-row place-content-between bg-white border py-4 px-20 ">
        <h2 className="hidden  sm:visible sm:font-semibold">SS</h2>
        <div>
          <div className="  bg-white  flex  sm:hidden visible relative ">
            <img onclick={handleOpen} className="" src="/Header.png" alt="" />
          </div>
          {showMenu && (
            <div>
              <div
                onClick={handleClose}
                className={` ${
                  showSideBar && "bg-black"
                }  bg-opacity-30 w-[100vw] h-[100vh] absolute left-0 top-0 transition-all duration-300  ease-in-out`}
              ></div>

              <div className="absolute top-0 right-0 overflow-hidden w-[70vw] h-[100vh]">
                <div
                  className={`bg-white h-[100vh] w-[100%] p-5 absolute top-0 right-0 ${
                    showSideBar ? "translate-x-0" : "translate-x-[100vw]"
                  } transition-all duration-300  ease-in-out`}
                >
                  <div className="flex justify-between">
                    <p>SS</p>
                    <button
                      onClick={handleClose}
                      className="h-[40px] w-[40px] border-red-300 rounded-md border-[2px]"
                    >
                      <img src="/x-button.png" alt="" />
                    </button>
                  </div>
                  <div>
                    <h4>About</h4>
                    <h4>Work</h4>
                    <h4>Experience</h4>
                    <h4>Contact</h4>
                  </div>
                  <div>Switch Theme </div>
                  <button>Download CV</button>
                </div>
              </div>
            </div>
          )}
        </div>
        <ul className="sm:flex flex-row space-x-6 hidden  ">
          <li onClick={props.handleClick}>About</li>
          <li onclick={props.workClick}>Work </li>
          <li onClick={props.expClick}>Experience</li>
          <li onclick={props.contactClick}>Contact</li>
          <li>
            <img src="/icon.png" alt="" />
          </li>
          <button className="rounded-full w-full bg-black px-4 text-white">
            Download CV
          </button>
        </ul>
      </div>
    </div>
  );
};
