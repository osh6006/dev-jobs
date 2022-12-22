import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import DefaultButton from "../components/common/defaultButton";
import Input from "../components/common/input";

const Enter = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {};
  return (
    <section className="my-0 mx-auto w-full">
      <form
        onSubmit={handleSubmit(onValid)}
        className="m-auto my-5 rounded-xl bg-white p-10 dark:bg-very_dark_blue desktop:w-[95%]"
      >
        <div className="mb-6 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-bold text-light_violet"
            >
              Your name
            </label>
            <Input
              name="name"
              register={register("name", {
                required: "⛔ 이름을 입력해 주세요",
                pattern: {
                  value: /^[가-힣a-zA-Z]+$/,
                  message: "⛔ 이름 형식이 맞지 않습니다.",
                },
                maxLength: {
                  value: 20,
                  message: "⛔ 이 필드는 20자 이상 사용할 수 없습니다.",
                },
              })}
              placeholder="Your name"
            />
            <ErrorMessage
              className="mt-2 flex text-warning"
              errors={errors}
              name="name"
              as="p"
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="  mb-2 block font-bold text-light_violet"
            >
              Company
            </label>
            <Input
              name="company"
              register={register("company", {
                required: "⛔ 회사 이름을 입력해 주세요",
                maxLength: {
                  value: 20,
                  message: "이 필드는 20자 이상 사용할 수 없습니다.",
                },
              })}
              placeholder="KakaO"
            />
            <ErrorMessage
              className="mt-2 flex text-warning"
              errors={errors}
              name="company"
              as="p"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block font-bold text-light_violet"
            >
              Phone number
            </label>
            <Input
              name="phone"
              register={register("phone", {
                required: "⛔ 전화번호를 입력해 주세요",
                maxLength: {
                  value: 20,
                  message: "⛔ 이 필드는 20자 이상 사용할 수 없습니다.",
                },
                pattern: {
                  value: /[0-9]{3}-[0-9]{4}-[0-9]{4}/,
                  message: "⛔ 전화번호 형식이 맞지 않습니다.",
                },
              })}
              placeholder="010-1234-5678"
            />
            <ErrorMessage
              className="mt-2 flex text-warning"
              errors={errors}
              name="phone"
              as="p"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="mb-2 block font-bold text-light_violet"
          >
            Email address
          </label>
          <Input
            name="email"
            register={register("email", {
              required: "⛔ 이메일을 입력해 주세요",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "⛔ 이메일 형식이 맞지 않습니다.",
              },
              maxLength: {
                value: 20,
                message: "⛔ 이 필드는 20자 이상 사용할 수 없습니다.",
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
          <label
            htmlFor="password"
            className="mb-2 block font-bold text-light_violet"
          >
            Password
          </label>
          <Input
            name="password"
            register={register("password", {
              required: "⛔ 비밀번호를 입력해 주세요",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                message:
                  "⛔ 비밀번호는 8글자이상 문자, 숫자, 특수문자가 포함되어야 합니다.",
              },
              maxLength: {
                value: 20,
                message: "⛔ 이 필드는 20자 이상 사용할 수 없습니다.",
              },
            })}
            type="password"
            placeholder="•••••••••"
          />
          <ErrorMessage
            className="mt-2 text-warning"
            errors={errors}
            name="password"
            as="p"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="mb-2 block font-bold text-light_violet"
          >
            Confirm password
          </label>
          <Input
            name="confirm_password"
            register={register("confirm_password", {
              required: "⛔ 비밀번호를 확인을 입력해 주세요",
              validate: (value) => {
                if (value !== password.value)
                  return "⛔ 비밀번호가 일치하지 않습니다.";
              },
            })}
            type="password"
            placeholder="•••••••••"
          />
          <ErrorMessage
            className="mt-2 text-warning"
            errors={errors}
            name="confirm_password"
            as="p"
          />
        </div>
        <div className="mb-6 flex items-center">
          <div className="flex h-5 items-center">
            <input
              id="isCEO"
              type="checkbox"
              value=""
              className="focus:ring-3 h-4 w-4 rounded border border-violet bg-dark_grey accent-violet focus:ring-violet dark:border-violet dark:bg-violet dark:ring-offset-violet dark:focus:ring-violet"
              {...register("isCEO")}
            />
          </div>
          <label
            htmlFor="remember"
            className="text-sm text-gray-900 ml-2 font-medium dark:text-white "
          >
            I agree with the{" "}
            <a
              href="#"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              terms and conditions
            </a>
            .
          </label>
        </div>
        <DefaultButton type="submit" text="Register">
          Submit
        </DefaultButton>
      </form>
    </section>
  );
};

export default Enter;
