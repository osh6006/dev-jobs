import Logo from "../public/assets/desktop/logo.svg";
import Switch from "./switch";
const Navbar = () => {
  return (
    <div className="h-[162px] w-full bg-[url('/assets/desktop/bg-pattern-header.svg')]">
      <div className="flex w-full items-center justify-between pt-[44px]">
        <Logo className="ml-[165px]" />
        <Switch />
      </div>
    </div>
  );
};

export default Navbar;
