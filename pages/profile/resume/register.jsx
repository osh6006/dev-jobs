import { ErrorMessage } from "@hookform/error-message";
import DefaultButton from "components/common/defaultButton";
import Input from "components/common/input";
import InputDatePicker from "components/common/inputDatePicker";
import InputItems from "components/common/inputItems";
import Loading from "components/common/loading";
import Selectbox from "components/common/selectbox";
import Textarea from "components/common/textarea";
import AutoTag from "components/profile/resume/autoTag";
import useGeneralMove from "libs/client/useGeneralMove";
import useUser from "libs/client/useUser";
import { SCHOOLOPTS } from "public/options";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RriteResume = () => {
  useGeneralMove();
  const user = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm({
    values: {
      name: user?.profile?.name,
      email: user?.profile?.email,
      phone: user?.profile?.phone,
    },
  });

  const [careers, setCareer] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [skills, setSkills] = useState([]);
  const [links, setLinks] = useState([]);

  const onValid = data => {
    if (skills.length > 0 && links.length > 0) {
      console.log(data);
    }
  };

  return (
    <div className="flex w-full flex-col">
      <h1 className="mb-10 text-center text-h2 font-bold text-violet tablet:text-start">
        이력서 작성
      </h1>
      <form
        onSubmit={handleSubmit(onValid)}
        className="mb-10 w-full  rounded-xl bg-white p-10 shadow-lg dark:bg-very_dark_blue"
      >
        <div className="mb-4 text-warning">
          * 이름, 이메일, 휴대폰 번호는 프로필에서 수정이 가능합니다.
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
        </div>
        <hr className="mb-6 text-violet" />
        <div className="mb-6">
          <Textarea
            name="introduction"
            register={register("introduction", {
              required: "⛔ 자기소개를 입력해 주세요",
              minLength: {
                value: 10,
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
              name="timeType"
              label="시간 범위"
              register={register("timeType", {
                required: "⛔ 시간을 선택해 주세요",
              })}
              optmsg=""
              option={SCHOOLOPTS}
            />
            <ErrorMessage
              className="mt-2 flex text-warning"
              errors={errors}
              name="timeType"
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
            />
          </div>
          <InputItems
            items={careers}
            setItems={setCareer}
            placeholder="날짜를 쓰고 경력 항목을 입력하세요 ex) 2023. 1. 24. ~ 2023. 2. 11. 삼성전자 이와 같이 표시됩니다."
            firstDate={getValues().firstCareerDate}
            lastDate={getValues().lastCareerDate}
            isDate={true}
          />
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
            />
          </div>
          <InputItems
            items={certificates}
            setItems={setCertificates}
            placeholder="날짜를 쓰고 자격증 항목을 입력하세요 ex) 2023. 1. 24. ~ 2023. 2. 11. 정보처리기사 이와 같이 표시됩니다."
            firstDate={getValues().firstCertifiDate}
            lastDate={getValues().lastCertifiDate}
            isDate={true}
          />
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
          text={false ? <Loading color="white" /> : "작성하기"}
        />
      </form>
    </div>
  );
};

export default RriteResume;
