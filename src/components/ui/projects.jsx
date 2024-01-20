export const Projects = (props) => {
  return (
    <div className="flex justify-center flex-col">
      <img
        className="flex justify-center size-16"
        src={props.screenshot}
        alt=""
      />
      <h1 className="text-lg text-gray-600 text-center ">{props.name}</h1>

      <p>{props.detail}</p>
    </div>
  );
};
