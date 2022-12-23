import SearchLogo from "../../public/assets/desktop/icon-search.svg";
import LocationLogo from "../../public/assets/desktop/icon-location.svg";
import FilterIcon from "../../public/assets/mobile/icon-filter.svg";

const IconInput = ({ type }) => {
  return (
    <div className="relative flex h-full w-full items-center justify-end">
      {type && type === "search" ? (
        <SearchLogo className="absolute left-5 w-10" />
      ) : null}
      {type && type === "location" ? (
        <LocationLogo className="absolute left-5 w-10" />
      ) : null}
      <input
        placeholder="Enter desired job..."
        className="focus:none h-full w-full rounded-lg  border-none pl-14 text-h3 outline-none dark:bg-very_dark_blue"
      />
      <FilterIcon
        onClick={() => {
          alert("Filter Popup");
        }}
        className="absolute right-2 w-10 tablet:hidden"
      />
    </div>
  );
};

export default IconInput;
