import DefaultButton from "../components/defaultButton";
import SearchInput from "../components/SearchInput";
import SecondaryButton from "../components/secondaryButton";

export default function Home() {
  return (
    <div className="bg-blue-600 mt-10 w-full bg-bubble-gum px-[165px]">
      <DefaultButton text="asdf" />
      <SecondaryButton text="asdfdd" />
      <SearchInput />
    </div>
  );
}
