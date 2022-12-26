import useUser from "libs/client/useUser";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "../../public/assets/desktop/logo.svg";
import DefaultButton from "./defaultButton";
import Dropdown from "./dropdown";
import Switch from "./switch";

const Navbar = ({ isDark, setIsDark }) => {
  const user = useUser();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    setOpen(false);
  };

  const handleMenuTwo = () => {
    router.push("/profile");
    setOpen(false);
  };

  return (
    <>
      <div className="h-[163px] w-full space-y-5 bg-cover bg-no-repeat px-5 py-10 mobile:bg-[url('/assets/mobile/bg-pattern-header.svg')] tablet:bg-[url('/assets/tablet/bg-pattern-header.svg')] tablet:px-10 desktop:bg-[url('/assets/desktop/bg-pattern-header.svg')]">
        <div className="flex w-full items-start justify-between ">
          <Link href="/" className="cursor">
            <Logo />
          </Link>
          <div className="flex space-x-4 ">
            {user?.profile.isCEO ? (
              <Link
                href="/company/myCompany"
                className="hidden w-20 tablet:block"
              >
                <DefaultButton text="나의 기업" color="metal" />
              </Link>
            ) : null}
            {user ? (
              <div className="hidden tablet:block">
                <Dropdown
                  onClick={handleOpen}
                  text={user.profile.name}
                  open={open}
                  menu={[
                    <button onClick={handleMenuOne}>로그아웃</button>,
                    <button onClick={handleMenuTwo}>프로필</button>,
                  ]}
                />
              </div>
            ) : (
              <Link href="/login" className="hidden w-20 tablet:block">
                <DefaultButton text="로그인" color="metal" />
              </Link>
            )}
            <Switch isDark={isDark} setIsDark={setIsDark} />
          </div>
        </div>
        {user ? (
          <div className="block tablet:hidden">
            <Dropdown
              onClick={handleOpen}
              text={user.profile.name}
              open={open}
              menu={[
                <button onClick={handleMenuOne}>로그아웃</button>,
                <button onClick={handleMenuTwo}>프로필</button>,
              ]}
            />
          </div>
        ) : (
          <Link href="/login" className="block tablet:hidden">
            <DefaultButton text="로그인" color="metal" />
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;
