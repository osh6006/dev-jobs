import Link from "next/link";

const ProfileTopMenu = () => {
  return (
    <div className="flex w-6/12 justify-center space-x-10 py-4">
      <Link
        href={`/company/myApplyCompany`}
        className="flex cursor-pointer flex-col items-center gap-2 p-3 transition-colors hover:text-light_violet "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 tablet:w-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <span className="hidden select-none text-h3 font-semibold desktop:block">
          관심 회사
        </span>
      </Link>
      <Link
        href={`/profile/edit`}
        className="flex cursor-pointer flex-col items-center gap-2 p-3 transition-colors  hover:text-light_violet"
      >
        <span className="text-xl block font-bold  uppercase tracking-wide   ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 tablet:w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </span>
        <span className="hidden select-none text-h3 font-semibold desktop:block">
          프로필 수정
        </span>
      </Link>
      <Link
        href={`users/leave`}
        className="flex cursor-pointer flex-col items-center gap-2 p-3 transition-colors hover:text-light_violet"
      >
        <span className="block font-bold tracking-wide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 tablet:w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
        </span>
        <span className="hidden select-none text-h3 font-semibold desktop:block">
          회원 탈퇴
        </span>
      </Link>
    </div>
  );
};

export default ProfileTopMenu;
