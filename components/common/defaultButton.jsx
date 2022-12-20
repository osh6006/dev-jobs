const DefaultButton = ({
  onClick,
  text = "button",
  color = "violet",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`h-[48px] w-full rounded-md font-bold bg-${color} text-white hover:bg-light_violet dark:bg-dark_grey dark:hover:bg-gray`}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
