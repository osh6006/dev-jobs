import { onEmailCheck, onPhoneCheck } from "libs/client/forms";
import useMutation from "libs/client/useMutation";
import usePopup from "libs/client/usePopup";
import useUser from "libs/client/useUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "react-responsive-modal/styles.css";
import ModalContents from "components/common/modalContents";
import Modal from "react-responsive-modal";
import Colorpicker from "components/common/colorpicker";
import { ErrorMessage } from "@hookform/error-message";
import Selectbox from "components/common/selectbox";
import Input from "components/common/input";
import Textarea from "components/common/textarea";
import InputItems from "components/common/inputItems";
import DefaultButton from "components/common/defaultButton";
import { COUNTRIES, POSITIONS, TIMETYPES } from "public/options";
import Loading from "components/common/loading";

const CompanyRForm = ({ edit, companyInfo }) => {
  console.log(edit, companyInfo);
  const [regist, { loading, mutationData }] = useMutation(
    "/api/company/upsert"
  );
  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    values: {
      company: companyInfo?.name,
      timeType: companyInfo?.contract,
      description: companyInfo?.description,
      phone: companyInfo?.phone,
      email: companyInfo?.email,
      location: companyInfo?.location,
      position: companyInfo?.position,
      website: companyInfo?.website,
      roles: companyInfo?.roles?.contents,
      requirements: companyInfo?.requirements?.contents,
      countries: companyInfo?.location,
    },
  });

  const user = useUser();
  const router = useRouter();

  const [requireItems, setRequireItems] = useState([]);
  const [roleItems, setRoleItems] = useState([]);

  // modal
  const [isModalOpen, modalText, setModalText, onModalOpen, onModalClose] =
    usePopup("/company/myCompany");

  // logo Bg color
  const [colorObj, setColorObj] = useState({
    displayColorPicker: true,
    color: "#132034",
  });

  // logo Preview
  const [logoPreview, setLogoPreview] = useState(null);
  const logo = watch("logo");

  useEffect(() => {
    if (logo && logo.length > 0) {
      const file = logo[0];
      setLogoPreview(URL.createObjectURL(file));
    }
  }, [logo]);

  // Submit Form
  const onValid = async formdata => {
    if (formdata.logo && formdata.logo.length > 0 && user.profile.email) {
      const cloudflareRequest = await fetch(`/api/files`);
      const { uploadURL } = await cloudflareRequest.json();
      const form = new FormData();
      form.append("file", logo[0], user?.profile?.email);
      const {
        request: { id },
      } = await (
        await fetch(uploadURL, {
          method: "POST",
          body: form,
        })
      ).json();
      formdata.logo = id;
      return;
    } else {
      formdata.logo = process.env.NEXT_PUBLIC_NOT_LOGO_ID;
    }
    // Save Company Data
    formdata.requirements = {
      contents: formdata.requirements,
      items: [...requireItems],
    };
    formdata.roles = {
      contents: formdata.roles,
      items: [...roleItems],
    };
    console.log(formdata);

    formdata.id = (companyInfo && companyInfo.id) || 0;
    regist(formdata);
  };

  // regist success
  useEffect(() => {
    if (mutationData?.ok) {
      if (edit) {
        setModalText("수정에 성공하였습니다.");
        onModalOpen();
      } else {
        setModalText("등록에 성공하셨습니다.");
        onModalOpen();
      }
    } else {
      if (mutationData?.message?.length > 0) {
        setError("server", {
          types: "server",
          message: mutationData?.message,
        });

        setTimeout(() => {
          delete errors.server;
        }, 2000);
      }
    }
  }, [mutationData, router, setError]);

  useEffect(() => {
    if (edit) {
      setRequireItems(companyInfo?.requirements.items);
      setRoleItems(companyInfo?.roles.items);
      setColorObj({
        displayColorPicker: true,
        color: companyInfo?.logoBgColor,
      });
    }
  }, [edit, companyInfo]);

  return (
    <>
      <Modal open={isModalOpen} onClose={onModalClose} center>
        <ModalContents text={modalText} onClose={onModalClose} />
      </Modal>
      <form
        onSubmit={handleSubmit(onValid)}
        className="m-auto my-5 rounded-xl bg-white p-10 dark:bg-very_dark_blue"
      >
        <section className="mb-6 grid gap-6 tablet:grid-cols-2 desktop:grid-cols-2">
          <div className="mb-6">
            <h3 className="font-bold text-violet dark:text-light_violet">
              로고 이미지
            </h3>
            <label
              htmlFor="logo"
              className="my-5 flex w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-violet py-16 px-10  text-violet hover:border-light_violet hover:text-light_violet"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-10 w-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <input
                {...register("logo")}
                type="file"
                name="logo"
                id="logo"
                className="hidden"
                accept="image/*"
              />
            </label>
            <div>
              <Colorpicker
                colorObj={colorObj}
                register={register("logoColor")}
                setColorObj={setColorObj}
                name="logoColor"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-violet dark:text-light_violet">
              로고 미리보기{" "}
              <span className=" block text-center text-warning tablet:inline tablet:text-start">
                * 로고는 가급적 배경이 없는 것을 넣어주세요
              </span>
            </h3>
            <div className="flex h-full w-full items-center justify-center p-5">
              <div
                className="flex max-h-96 items-center justify-center rounded-3xl p-10"
                style={{ background: colorObj.color }}
              >
                {logoPreview ? (
                  <img
                    src={logoPreview}
                    alt="logoPreview"
                    className="max-h-96"
                  />
                ) : (
                  <img src="/notlogo.png" alt="notlogo" className="max-h-96" />
                )}
              </div>
            </div>
          </div>
          <div className="mt-10 tablet:mt-0">
            <Input
              label="회사 명"
              name="company"
              register={register("company", {
                required: "⛔ 회사 이름을 입력해 주세요",
                pattern: {
                  value: /^[가-힣a-zA-Z]+$/,
                  message: "⛔ 이름 형식이 맞지 않습니다.",
                },
                maxLength: {
                  value: 20,
                  message: "⛔ 이 필드는 20자 이상 사용할 수 없습니다.",
                },
              })}
              placeholder="회사 명"
            />
            <ErrorMessage
              className="mt-2 flex text-warning"
              errors={errors}
              name="company"
              as="p"
            />
          </div>
          <div>
            <Selectbox
              name="countries"
              label="나라 명"
              register={register("countries", {
                required: "⛔ 나라를 선택해 주세요",
              })}
              optmsg="나라를"
              option={COUNTRIES}
            />
            <ErrorMessage
              className="mt-2 flex text-warning"
              errors={errors}
              name="countries"
              as="p"
            />
          </div>
          <div>
            <Input
              label="회사 번호"
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
          <div>
            <Selectbox
              name="timeType"
              label="시간 범위"
              register={register("timeType", {
                required: "⛔ 시간을 선택해 주세요",
              })}
              optmsg="시간 범위를"
              option={TIMETYPES}
            />
            <ErrorMessage
              className="mt-2 flex text-warning"
              errors={errors}
              name="timeType"
              as="p"
            />
          </div>
          <div>
            <Input
              label="회사 이메일"
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
          <div>
            <Selectbox
              name="position"
              label="경력"
              register={register("position", {
                required: "⛔ 경력을 선택해 주세요",
              })}
              optmsg="경력을"
              option={POSITIONS}
            />
            <ErrorMessage
              className="mt-2 flex text-warning"
              errors={errors}
              name="position"
              as="p"
            />
          </div>
          <div>
            <Input
              label="회사 홈페이지"
              name="website"
              register={register("website", {
                required: "⛔ 회사 홈페이지를 입력해 주세요.",
                pattern: {
                  value: /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/,
                  message: `⛔ 전화번호 형식이 맞지 않습니다. \n ex) 010-1234-5678`,
                },
              })}
              placeholder="https://www.example.com"
            />
            <ErrorMessage
              className="mt-2 flex text-warning"
              errors={errors}
              name="website"
              as="p"
            />
          </div>
        </section>

        <div className="mb-6">
          <Textarea
            name="description"
            register={register("description", {
              required: "⛔ 회사 설명을 입력해 주세요",
            })}
            placeholder="회사 설명"
            row={5}
            label="회사 소개"
          />
          <ErrorMessage
            className="mt-2 flex text-warning"
            errors={errors}
            name="description"
            as="p"
          />
        </div>
        <hr className="my-6 h-2 text-violet" />
        <div className="">
          <h3 className="mb-3 font-bold text-violet dark:text-light_violet">
            우대 사항
          </h3>
          <Textarea
            name="requirements"
            register={register("requirements", {
              required: "⛔ 우대 사항을 입력해 주세요",
            })}
            placeholder="우리가 원하는 인재상은 기술을 통해 문제를 해결하는 것에 열정적이었으면 좋겠습니다. 그리고..."
            row={3}
            label="우대 사항 설명"
          />
          <ErrorMessage
            className="mt-2 flex text-warning"
            errors={errors}
            name="requirements"
            as="p"
          />
        </div>
        <div className="mb-6">
          <h3 className="my-3 font-bold text-violet dark:text-light_violet">
            우대 사항 항목
          </h3>
          <InputItems items={requireItems} setItems={setRequireItems} />
        </div>
        <hr className="my-6 h-2 text-violet" />
        <div>
          <h3 className="mb-3 font-bold text-violet dark:text-light_violet">
            지원자 역할
          </h3>
          <Textarea
            name="roles"
            register={register("roles", {
              required: "⛔ 요구 사항을 입력해 주세요",
            })}
            placeholder="지원자는 우리 회사에서 XXX 일을 맡게 될 예정입니다."
            row={3}
            label="지원자 역할 요약"
          />
          <ErrorMessage
            className="mt-2 flex text-warning"
            errors={errors}
            name="roles"
            as="p"
          />
        </div>
        <div className="my-6">
          <h3 className="mb-3 font-bold text-violet dark:text-light_violet">
            지원자 역할 항목
          </h3>
          <InputItems items={roleItems} setItems={setRoleItems} />
        </div>
        {/* <div className=" flex items-center">
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
        </div> */}

        {edit ? (
          <>
            <div className=" grid grid-cols-2 gap-5">
              <div>
                <DefaultButton
                  type="button"
                  color="warning"
                  text={"취소하기"}
                  onClick={() => {
                    console.log("cancel");
                    router.replace(`/company/myCompany`);
                  }}
                />
              </div>
              <div>
                <DefaultButton
                  type="submit"
                  color="edit"
                  text={loading ? <Loading color="white" /> : "수정하기"}
                />
              </div>
            </div>
          </>
        ) : (
          <DefaultButton
            type="submit"
            text={loading ? <Loading color="white" /> : "등록하기"}
          />
        )}
      </form>
    </>
  );
};

export default CompanyRForm;
