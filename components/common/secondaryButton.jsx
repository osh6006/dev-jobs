const SecondaryButton = ({ onClick, text, ...rest }) => {
  return (
    <button
      {...rest}
      className="h-[48px] w-[141px] rounded-sm bg-light_grey text-violet hover:bg-light_violet dark:bg-dark_grey dark:text-white dark:hover:bg-gray"
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
