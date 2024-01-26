export const PositionTitles = (props) => {
  return (
    <div className="flex sm:flex-row flex-col gap-12 gap-y-12 rounded-xl bg-white  dark:bg-gray-800 p-9 place-content-around">
      <div>
        <img src={props.logo} alt="" />
      </div>
      <div className="text-xl text-gray-900 gap-x-4 dark:text-gray-50 ">
        {props.position}

        <ul className="list-disc text-base w -[100%]   dark:text-gray-300 ">
          <li className="text-wrap"> {props.para1}</li>
          <li> {props.para2}</li>
          <li>{props.para3}</li>
          <li>{props.para4}</li>
        </ul>
      </div>

      <div> {props.date}</div>
    </div>
  );
};
