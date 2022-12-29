const Dropdown = ({ onClick, open, menu, text }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="relative flex w-full cursor-pointer items-center justify-center rounded-md bg-violet px-5 py-3 font-bold text-white transition-colors hover:bg-light_violet"
      >
        <p className="mr-3 select-none uppercase">{text}</p>
        {open && open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="h-4 w-3.5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={4}
            stroke="currentColor"
            className="h-4 w-3.5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
        {open && open ? (
          <div className="absolute z-20 mt-52 w-full rounded-sm border border-none font-normal tablet:mr-12 tablet:w-[150px] ">
            {menu.map((menuItem, index) => (
              <div
                key={index}
                className="menu-item w-full rounded-sm bg-violet px-3 py-3 text-center hover:bg-light_violet tablet:text-right"
              >
                {menuItem}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Dropdown;
