import SearchLogo from "../public/assets/desktop/icon-search.svg";

const SearchInput = () => {
  return (
    <div class="relative flex h-full w-full items-center justify-end">
      <SearchLogo className="absolute left-2 w-10" />
      <input
        placeholder="Enter desired job..."
        class="focus:none h-full w-full rounded-lg  border-none pl-10 outline-none "
      />
    </div>
  );
};

export default SearchInput;
