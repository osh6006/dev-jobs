import SearchLogo from "../../public/assets/desktop/icon-search.svg";
import LocationLogo from "../../public/assets/desktop/icon-location.svg";

const IconInput = ({ type }) => {
  return (
    <div class="relative flex h-full w-full items-center justify-end">
      {type && type === "search" ? (
        <SearchLogo className="absolute left-5 w-10" />
      ) : null}
      {type && type === "location" ? (
        <LocationLogo className="absolute left-5 w-10" />
      ) : null}
      <input
        placeholder="Enter desired job..."
        class="focus:none h-full w-full rounded-lg  border-none pl-14 outline-none "
      />
    </div>
  );
};

export default IconInput;
