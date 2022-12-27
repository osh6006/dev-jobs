const Selectbox = ({
  name,
  label = "label name",
  register,
  optmsg = "옵션을",
  option,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="mb-2 block font-bold text-violet dark:text-light_violet"
      >
        {label}
      </label>
      <select
        id={name}
        {...register}
        className="block w-full rounded-lg border border-dark_grey p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
      >
        <option value="">{optmsg} 선택하세요</option>
        {option &&
          option.map((element) => (
            <option key={element.value} value={element.value}>
              {element.name}
            </option>
          ))}
      </select>
    </>
  );
};

export default Selectbox;
