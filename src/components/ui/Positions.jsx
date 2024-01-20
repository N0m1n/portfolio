export const PositionTitles = (props) => {
  return (
    <div className="flex flex-row gap-12 gap-y-12 rounded-xl bg-white  p-9 place-content-around">
      <div>
        <img src={props.logo} alt="" />
      </div>
      <ul className="list-disc">
        {props.position}
        <li> {props.para1}</li>
        <li>{props.para2}</li>
        <li>{props.para3}</li>
        <li>{props.para3}</li>
      </ul>
      <div> {props.date}</div>
    </div>
  );
};
