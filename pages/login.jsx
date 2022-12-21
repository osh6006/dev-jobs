import Link from "next/link";
import DefaultButton from "../components/common/defaultButton";

const Login = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <section className="desktop:space-x-15 flex w-full items-center justify-center space-y-10 p-10 mobile:flex-col tablet:w-4/5 desktop:w-2/3 desktop:flex-row">
        <div className="w-full ">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="w-full"
            alt="Phone image"
          />
        </div>
        <div className="w-full desktop:w-1/2">
          <form>
            <div className="mb-6">
              <input
                type="text"
                className="block w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
                placeholder="Email address"
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                className="block w-full rounded-lg border p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
                placeholder="Password"
              />
            </div>

            <div className="mb-6 flex items-center justify-between dark:text-white">
              <div className="form-group form-check">계정이 없으신가요?</div>
              <Link
                href="/register"
                className="text-violet transition duration-200 ease-in-out hover:text-violet hover:underline focus:text-violet active:text-violet dark:text-light_violet"
              >
                회원가입 하러 가기
              </Link>
            </div>

            <DefaultButton
              type="submit"
              className="bg-blue-600 text-sm hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 inline-block w-full rounded px-7 py-3 font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              text="로그인"
            ></DefaultButton>

            <div className="before:border-gray-300 after:border-gray-300 my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t after:mt-0.5 after:flex-1 after:border-t dark:text-white">
              <p className="mx-4 mb-0 text-center font-semibold">WELCOME</p>
            </div>

            {/* <a
              className="text-sm mb-3 flex w-full items-center justify-center rounded px-7 py-3 font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              href="#!"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="mr-2 h-3.5 w-3.5"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                />
              </svg>
              Continue with Facebook
            </a>
            <a
              className="text-sm flex w-full items-center justify-center rounded px-7 py-3 font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              href="#!"
              role="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="mr-2 h-3.5 w-3.5"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                />
              </svg>
              Continue with Twitter
            </a> */}
          </form>
        </div>
      </section>
    </div>
  );
};

{
  /* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */
}

export default Login;
