const SecondaryButton = ({ onClick, text, ...rest }) => {
  return (
    <button
      {...rest}
      className="h-[48px] w-[141px] rounded-lg bg-light_grey text-violet transition-colors hover:bg-light_violet hover:text-white dark:bg-dark_grey dark:text-white dark:hover:bg-gray"
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
