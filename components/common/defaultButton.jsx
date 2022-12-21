const DefaultButton = ({
  onClick,
  text = "button",
  color = "violet",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`h-[48px] w-full rounded-md bg-${color} font-bold text-white transition-colors hover:bg-light_violet`}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
