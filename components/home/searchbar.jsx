import IconInput from "../common/iconInput";
import DefaultButton from "../common/defaultButton";

const SearchBar = () => {
  return (
    <form className="flex h-[96px] w-full space-x-1">
      <div className="flex-1">
        <IconInput type="search" />
      </div>
      <div className=" mobile:hidden tablet:block tablet:flex-1 desktop:flex-[0.5]">
        <IconInput type="location" />
      </div>
      <div className=" mobile:hidden  tablet:block tablet:flex-1 desktop:flex-[0.5]">
        <div className=" mb-4 flex h-full w-full items-center justify-between space-x-1 rounded-md bg-white p-3 dark:bg-very_dark_blue">
          <div className="flex items-center space-x-2">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="h-5 w-5 dark:bg-very_dark_blue"
            />
            <label
              htmlFor="default-checkbox"
              className="flex text-h3 font-bold capitalize dark:text-white"
            >
              full time <span className="hidden desktop:block">&nbsp;only</span>
            </label>
          </div>
          <div className="w-2/5">
            <DefaultButton type="submit" text="Search" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
