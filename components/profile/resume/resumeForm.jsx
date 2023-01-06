import { ErrorMessage } from "@hookform/error-message";
import DefaultButton from "components/common/defaultButton";
import Input from "components/common/input";
import InputDatePicker from "components/common/inputDatePicker";
import InputItems from "components/common/inputItems";
import Loading from "components/common/loading";
import Selectbox from "components/common/selectbox";
import Textarea from "components/common/textarea";
import useMutation from "libs/client/useMutation";
import useUser from "libs/client/useUser";
import { useRouter } from "next/router";
import { HOPEJOBS, SCHOOLOPTS } from "public/options";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AutoTag from "./autoTag";

const ResumeForm = ({ edit, resumeInfo }) => {
  const user = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm({
    mode: "onChange",
    values: {
      name: user?.profile?.name,
      email: user?.profile?.email,
      phone: user?.profile?.phone,
      title: resumeInfo?.title,
      hope: resumeInfo?.hope,
      introduction: resumeInfo?.introduction,
      school: resumeInfo?.school,
      ability: resumeInfo?.ability,
      hope: resumeInfo?.hope,
      hope: resumeInfo?.hope,
    },
  });

  const [careers, setCareer] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState([]);

  const [regist, { loading, data }] = useMutation("/api/users/resume/register");

  const onValid = data => {
    data.career = {
      contents: [...careers],
    };
    data.certificate = {
      contents: [...certificates],
    };
    data.skill = {
      contents: [...skills],
    };
    data.link = {
      contents: [...links],
    };

    data.id = (resumeInfo && resumeInfo.id) || 0;

    regist(data);
  };

  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      (edit && alert("이력서 수정에 성공하셨습니다.")) ||
        alert("이력서 등록에 성공하셨습니다.");
      router.push("/profile/resume");
    } else {
      // alert("이력서 등록 실패!");
    }
  }, [data, router]);

  useEffect(() => {
    if (edit) {
      setCareer(resumeInfo?.career?.contents);
      setCertificates(resumeInfo?.certificate?.contents);
      setSkills(resumeInfo?.skill?.contents);
      setLinks(resumeInfo?.link?.contents);
    }
  }, [edit, resumeInfo]);
  return (
    <>
      <form
        onSubmit={handleSubmit(onValid)}
        className="mb-10 w-full  rounded-xl bg-white p-10 shadow-lg dark:bg-very_dark_blue"
      >
        <div className="mb-4 text-warning">
          * 이름, 이메일, 휴대폰 번호는 프로필에서 수정이 가능합니다.
        </div>
        <div className="mb-4">
          <Input
            label="이력서 제목"
            name="title"
            register={register("title", {
              required: "⛔ 이력서 제목을 입력해 주세요",
              maxLength: {
                value: 20,
                message: "⛔ 이 필드는 20자 이상 사용할 수 없습니다.",
              },
            })}
            placeholder="이력서 제목"
          />
          <ErrorMessage
            className="mt-2 flex text-warning"
            errors={errors}
            name="title"
            as="p"
          />
        </div>
        <div className="mb-6 grid gap-4 tablet:grid-cols-2">
          <div>
            <Input
              label="이름"
              name="name"
              value={user?.profile?.name}
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
              label="이메일"
              name="email"
              value={user?.profile?.email}
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
          <div>
            <Input
              label="휴대폰 번호"
              name="phone"
              value={user?.profile?.phone}
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
          <div>
            <Selectbox
              name="hope"
              label="희망 직종"
              register={register("hope", {
                required: "⛔ 희망 직종을 선택해 주세요",
              })}
              optmsg=""
              option={HOPEJOBS}
            />
            <ErrorMessage
              className="mt-2 flex text-warning"
              errors={errors}
              name="hope"
              as="p"
            />
          </div>
        </div>
        <hr className="mb-6 text-violet" />
        <div className="mb-6">
          <Textarea
            name="introduction"
            register={register("introduction", {
              required: "⛔ 자기소개를 입력해 주세요",
              minLength: {
                value: 100,
                message: "자기소개는 최소 100자 이상 500자 이하여야 합니다.", // JS only: <p>error message</p> TS only support string
              },
              maxLength: {
                value: 500,
                message: "자기소개는 최소 100자 이상 500자 이하여야 합니다.", // JS only: <p>error message</p> TS only support string
              },
            })}
            placeholder="자기 소개를 입력해 주세요"
            row={4}
            label="자기 소개"
          />
          <ErrorMessage
            className="mt-2 flex text-warning"
            errors={errors}
            name="introduction"
            as="p"
          />
        </div>
        <div className="mb-6 grid gap-4 tablet:grid-cols-2">
          <div className="mt-10 tablet:mt-0">
            <Input
              label="학교 명"
              name="school"
              register={register("school", {
                required: "⛔ 학교 이름을 입력해 주세요",
                pattern: {
                  value: /^[가-힣a-zA-Z]+$/,
                  message: "⛔ 이름 형식이 맞지 않습니다. 띄어쓰기 불가",
                },
                maxLength: {
                  value: 20,
                  message: "⛔ 이 필드는 20자 이상 사용할 수 없습니다.",
                },
              })}
              placeholder="학교"
            />
            <ErrorMessage
              className="mt-2 flex text-warning"
              errors={errors}
              name="school"
              as="p"
            />
          </div>
          <div>
            <Selectbox
              name="ability"
              label="최종 학력"
              register={register("ability", {
                required: "⛔ 최종 학력을 선택해 주세요",
              })}
              optmsg=""
              option={SCHOOLOPTS}
            />
            <ErrorMessage
              className="mt-2 flex text-warning"
              errors={errors}
              name="ability"
              as="p"
            />
          </div>
        </div>
        <div className="mb-6">
          <h3 className="my-3 font-bold text-violet dark:text-light_violet">
            경력
          </h3>
          <div className="grid w-full gap-4 tablet:grid-cols-2">
            <InputDatePicker
              // control을 자식 컴포넌트에 넘겨주기
              control={control}
              firstName="firstCareerDate"
              lastName="lastCareerDate"
              items={careers}
              setItems={setCareer}
            />
          </div>
        </div>
        <div className="mb-6">
          <h3 className="my-3 font-bold text-violet dark:text-light_violet">
            자격증
          </h3>
          <div className="grid w-full gap-4 tablet:grid-cols-2">
            <InputDatePicker
              // control을 자식 컴포넌트에 넘겨주기
              control={control}
              firstName="firstCertifiDate"
              lastName="lastCertifiDate"
              items={certificates}
              setItems={setCertificates}
              solo={true}
            />
          </div>
        </div>
        <div className="mb-6">
          <h3 className="my-3 font-bold text-violet dark:text-light_violet">
            기술 스택
          </h3>
          <AutoTag tags={skills} setTags={setSkills} />
        </div>
        <div className="mb-6">
          <h3 className="my-3 font-bold text-violet dark:text-light_violet">
            링크
          </h3>
          <InputItems
            items={links}
            setItems={setLinks}
            placeholder="포트폴리오나 깃허브 링크를 넣으세요"
          />
        </div>

        <DefaultButton
          type="submit"
          text={
            loading ? (
              <Loading color="white" />
            ) : (
              (edit && "수정하기") || "작성하기"
            )
          }
        />
      </form>
    </>
  );
};

export default ResumeForm;
