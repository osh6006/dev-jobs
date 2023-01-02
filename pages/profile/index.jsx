import ProfileBotMenu from "components/profile/profileBotMenu";
import ProfileTopMenu from "components/profile/profileTopMenu";
import useUser from "libs/client/useUser";

const Profile = () => {
  const user = useUser();
  return (
    <div className="h-full w-full">
      <h1 className="mb-14 text-h2 font-bold text-violet">프로필</h1>
      <div className="flex flex-col items-center justify-center gap-5 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-32 rounded-full bg-gray text-violet tablet:w-48"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <h1 className="text-h1 font-bold uppercase text-violet">
          {user?.profile?.name}
        </h1>
        <div className="flex w-full flex-col items-center justify-center pb-10 text-violet">
          <ProfileTopMenu isCeo={false} />
          <ProfileBotMenu />
        </div>
      </div>
    </div>
  );
};

export default Profile;
