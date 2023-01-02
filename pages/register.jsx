import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Input from "components/common/input";
import DefaultButton from "components/common/defaultButton";
import useMutation from "libs/client/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useMoveLogin from "libs/client/useMoveLogin";

const Enter = () => {
  const [regist, { loading, data, error }] = useMutation("/api/users/register");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onValid = data => {
    regist(data);
  };

  const onEmailCheck = async data => {
    const isCheck = await fetch("/api/users/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "email", data }),
    })
      .then(response => response.json().catch(() => {}))
      .then(json => json)
      .catch(error => setError(error));

    return (await isCheck?.ok) || "⛔ 이미 존재하는 이메일 입니다.";
  };

  const onPhoneCheck = async data => {
    const isCheck = await fetch("/api/users/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "phone", data }),
    })
      .then(response => response.json().catch(() => {}))
      .then(json => json)
      .catch(error => setError(error));

    return (await isCheck?.ok) || "⛔ 이미 존재하는 핸드폰 번호 입니다.";
  };

  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      alert("가입에 성공하셨습니다. 로그인을 해보세요 !");
      router.push("/login");
    } else {
      if (data?.message?.length > 0) {
        setError("server", {
          types: "server",
          message: data?.message,
        });

        setTimeout(() => {
          delete errors.server;
        }, 2000);
      }
    }
  }, [data, router, setError]);

  return (
    <section className="w-full pb-5">
      <h1 className="text-h2  font-bold text-violet">회원 가입</h1>
      <form
        onSubmit={handleSubmit(onValid)}
        className="m-auto my-5 rounded-xl bg-white p-10 dark:bg-very_dark_blue "
      >
        <div className="mb-6 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-2">
          <div>
            <Input
              label="Your Name"
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
            <Input
              label="company"
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
            <Input
              label="Phone number"
              name="phone"
              register={register("phone", {
                required: "⛔ 전화번호를 입력해 주세요",
                maxLength: {
                  value: 20,
                  message: "⛔ 이 필드는 20자 이상 사용할 수 없습니다.",
                },
                pattern: {
                  value: /[0-9]{3}-[0-9]{4}-[0-9]{4}/,
                  message: `⛔ 전화번호 형식이 맞지 않습니다. \n ex) 010-1234-5678`,
                },
                validate: onPhoneCheck,
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
          <Input
            label="Email address"
            name="email"
            register={register("email", {
              required: "⛔ 이메일을 입력해 주세요",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "⛔ 이메일 형식이 맞지 않습니다.",
              },
              maxLength: {
                value: 30,
                message: "⛔ 이 필드는 30자 이상 사용할 수 없습니다.",
              },
              validate: onEmailCheck,
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
            label="Password"
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
          <Input
            label="Confirm password"
            name="confirm_password"
            register={register("confirm_password", {
              required: "⛔ 비밀번호를 확인을 입력해 주세요",
              validate: value => {
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
          <ErrorMessage
            className="mt-2 text-warning"
            errors={errors}
            name="server"
            as="p"
          />
        </div>
        <div className="mb-6 flex items-center">
          <div className="flex h-5 items-center">
            <input
              id="isCEO"
              type="checkbox"
              name="isCEO"
              className="focus:ring-3 h-4 w-4 rounded border border-violet bg-dark_grey accent-violet focus:ring-violet dark:border-violet dark:bg-violet dark:ring-offset-violet dark:focus:ring-violet"
              {...register("isCEO")}
            />
          </div>
          <label
            htmlFor="isCEO"
            className="text-sm text-gray-900 ml-2 font-bold capitalize text-violet dark:text-light_violet"
          >
            are you CEO?
          </label>
        </div>
        <DefaultButton type="submit" text={loading ? "로딩중" : "가입하기"} />
      </form>
    </section>
  );
};

export default Enter;
