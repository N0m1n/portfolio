export const SkillSet = (skills) => {
  const skillobj = skills;
  const arr = Object.values(skillobj);
  const str = arr.flat();

  console.log(skillobj);
  console.log(arr);

  console.log(str);

  return (
    <div className="flex  flex-wrap gap-4">
      {str.map((el) => (
        <button className="bg-gray-200 rounded-xl px-5 py-1">{el}</button>
      ))}
    </div>
  );
};
