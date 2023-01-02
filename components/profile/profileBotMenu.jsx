import Link from "next/link";

const ProfileBotMenu = () => {
  return (
    <div className="flex w-full cursor-pointer flex-col items-center justify-between ">
      <Link
        href={`/users/resume`}
        className="mb-6 flex w-4/5 select-none  justify-between rounded-xl border-2 py-4 px-3 font-bold hover:border-light_violet hover:text-light_violet tablet:w-6/12"
      >
        <span>내 이력서</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>
      <Link
        href="/"
        className="flex w-4/5 select-none justify-between rounded-xl border-2 py-4 px-3 font-bold hover:border-light_violet hover:text-light_violet tablet:w-6/12"
      >
        <span>히스토리</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ProfileBotMenu;
