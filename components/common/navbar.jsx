import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/assets/desktop/logo.svg";
import DefaultButton from "./defaultButton";
import Switch from "./switch";
const Navbar = () => {
  const [isLogin, setIsLgoin] = useState(false);
  return (
    <>
      <div className="h-[163px] w-full space-y-5 bg-cover bg-no-repeat px-5 py-10 mobile:bg-[url('/assets/mobile/bg-pattern-header.svg')] tablet:bg-[url('/assets/tablet/bg-pattern-header.svg')] tablet:px-10 desktop:bg-[url('/assets/desktop/bg-pattern-header.svg')]">
        <div className="flex w-full items-start justify-between ">
          <Link href="/" className="cursor">
            <Logo />
          </Link>
          <div className="flex space-x-4 ">
            {isLogin ? null : (
              <Link href="/login" className="hidden w-20 tablet:block">
                <DefaultButton text="로그인" color="metal" />
              </Link>
            )}
            <Switch />
          </div>
        </div>
        {isLogin ? null : (
          <Link href="/login" className="mobile:block tablet:hidden">
            <DefaultButton text="로그인" color="metal" />
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
