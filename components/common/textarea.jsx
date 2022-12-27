const Textarea = ({
  name,
  row = 4,
  label = "label name",
  register,
  placeholder = "your message",
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="mb-2 block font-bold text-violet dark:text-light_violet"
      >
        {label}
      </label>
      <textarea
        id={name}
        rows={row}
        {...register}
        className="block w-full rounded-lg border border-dark_grey p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
        placeholder={placeholder}
      ></textarea>
    </>
  );
};

export default Textarea;
