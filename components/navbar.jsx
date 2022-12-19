import Logo from "../public/assets/desktop/logo.svg";
import Switch from "./switch";
const Navbar = () => {
  return (
    <div className="w-full bg-cover bg-no-repeat p-10 mobile:bg-[url('/assets/mobile/bg-pattern-header.svg')] tablet:bg-[url('/assets/tablet/bg-pattern-header.svg')] desktop:bg-[url('/assets/desktop/bg-pattern-header.svg')]">
      <div className="flex w-full items-center justify-between ">
        <Logo />
        <Switch />
      </div>
    </div>
  );
};

export default Navbar;
