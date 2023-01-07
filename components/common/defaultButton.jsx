const defaultButtonConfig = {
  violet:
    "h-[48px] w-full rounded-md font-bold text-white transition-colors hover:bg-light_violet bg-violet",
  warning:
    "h-[48px] w-full rounded-md font-bold text-white transition-colors hover:bg-warning_light bg-warning",
};

const DefaultButton = ({ onClick, text = "button", color, ...rest }) => {
  return (
    <button
      onClick={onClick}
      {...rest}
      className={defaultButtonConfig[color || "violet"]}
    >
      {text}
    </button>
  );
};

export default DefaultButton;
