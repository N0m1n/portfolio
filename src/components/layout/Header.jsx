export const Header = () => {
  return (
    <div className="flex flex-row place-content-between bg-white border py-4 px-20 ">
      <h2 className=" font-semibold">SS</h2>
      <ul className=" flex flex-row space-x-6 ">
        <li>About</li>
        <li>Work</li>
        <li>Testimonals</li>
        <li>Contact</li>
        <li>
          <img
            src="/icon.png"
            alt=""
          />
        </li>
        <button className="rounded-full bg-black px-4 text-white">
          Download CV
        </button>
      </ul>
    </div>
  );
};
