import { ErrorMessage } from "@hookform/error-message";
import DefaultButton from "components/common/defaultButton";
import Input from "components/common/input";
import Loading from "components/common/loading";
import useMove from "libs/client/useMove";
import useMutation from "libs/client/useMutation";
import useUser from "libs/client/useUser";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  useMove({ url: "/", isPrivate: false });
  const user = useUser();
  const [enter, { loading, mutationData }] = useMutation("/api/users/enter");
  const [serverMsg, setServerMsg] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = formData => {
    enter(formData);
  };

  const router = useRouter();
  useEffect(() => {
    if (mutationData?.ok) {
      router.reload();
    } else {
      if (mutationData?.message?.length > 0) {
        setServerMsg(mutationData?.message);
      } else {
        setServerMsg(null);
      }
    }
  }, [mutationData, router, user]);

  return (
    <div className="flex h-full w-full items-baseline justify-center overflow-hidden desktop:h-[calc(100vh/2)] desktop:p-20">
      <section className="flex w-full items-center justify-center space-y-10 p-5 mobile:flex-col tablet:w-4/5 desktop:w-4/5 desktop:flex-row desktop:space-x-20">
        <div className="w-full">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="w-full"
            alt="Phone image"
          />
        </div>
        <div className="w-full desktop:w-4/5">
          <form onSubmit={handleSubmit(onValid)}>
            <div className="mb-6">
              <Input
                label=""
                name="email"
                register={register("email", {
                  required: "⛔ 이메일을 입력해 주세요",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "⛔ 이메일 형식이 맞지 않습니다.",
                  },
                })}
                placeholder="12341@example.com"
              />
              <ErrorMessage
                className="mt-2 flex text-warning"
                errors={errors}
                name="email"
                as="p"
              />
            </div>

            <div className="mb-6">
              <Input
                label=""
                name="password"
                register={register("password", {
                  required: "⛔ 비밀번호를 입력해 주세요",
                })}
                type="password"
                autoComplete="off"
                placeholder="•••••••••"
              />
              <ErrorMessage
                className="mt-2 text-warning"
                errors={errors}
                name="password"
                as="p"
              />
              <ErrorMessage
                className="mt-2 text-warning"
                errors={errors}
                name="server"
                as="p"
              />
              <div className="mt-2 text-warning">{serverMsg && serverMsg}</div>
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
              text={loading ? <Loading color="white" /> : "로그인"}
            ></DefaultButton>

            <div className="before:border-gray-300 after:border-gray-300 my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t after:mt-0.5 after:flex-1 after:border-t dark:text-white">
              <p className="mx-4 mb-0 text-center font-semibold">WELCOME</p>
            </div>

            {/* <a
              className="text-sm mb-3 flex w-full items-center justify-center rounded px-7 py-3 font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              href="#!"
              role="button"
              mutationData-mdb-ripple="true"
              mutationData-mdb-ripple-color="light"
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
              mutationData-mdb-ripple="true"
              mutationData-mdb-ripple-color="light"
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

// // SSR
// export async function getServerSideProps(context) {
//   // 외부 API로 데이터 가져오기
//   const res = await fetch("http://localhost:3000/api/users/me");
//   const mutationData = await res.json();
//   if (mutationData.ok) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

{
  /* <!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */
}

export default Login;
