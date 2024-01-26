export const TechCard = (props) => {
  return (
    <div className="flex place-items-center flex-col">
      <img className="flex  size-16" src={props.logo} alt="" />
      <p
        className="text-lg text-gray-600  dark:text-gray-300 
      "
      >
        {props.name}
      </p>
    </div>
  );
};
