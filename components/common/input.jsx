const Input = ({
  name,
  kind = "text",
  register,
  type,
  placeholder = "something write",
}) => {
  return (
    <>
      <input
        id={name}
        {...register}
        type={type}
        className="block w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
