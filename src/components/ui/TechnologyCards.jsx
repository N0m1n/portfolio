export const TechCard = (props) => {
  return (
    <div className="flex justify-center flex-col">
      <img className="flex justify-center size-16" src={props.logo} alt="" />
      <p
        className="text-lg text-gray-600 text-center
      "
      >
        {" "}
        {props.name}
      </p>
    </div>
  );
};
