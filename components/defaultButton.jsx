const DefaultButton = ({ onClick, text, ...rest }) => {
  return (
    <button
      {...rest}
      className="h-[48px] w-full rounded-sm bg-violet text-white hover:bg-light_violet dark:bg-dark_grey dark:hover:bg-gray"
    >
      {text}
    </button>
  );
};

export default DefaultButton;
