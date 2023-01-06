import { useController } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { useState } from "react";
import InputItems from "./inputItems";

const InputDatePicker = ({
  control,
  firstName,
  lastName,
  items,
  setItems,
  solo,
}) => {
  const [firstDate, setFirstDate] = useState(null);
  const [lastDate, setLastDate] = useState(null);

  const firstField = useController({
    name: firstName,
    control,
    rules: {
      // required: true,
      // validate: data => {
      //   dayValidate(data);
      // },
    },
  });
  const lastField = useController({
    name: lastName,
    control,
    rules: {
      // required: true,
      // validate: data => {
      //   dayValidate(data);
      // },
    },
  });

  // 요일 반환
  const getDayName = date => {
    return date
      .toLocaleDateString("ko-KR", {
        weekday: "long",
      })
      .substr(0, 1);
  };

  // 날짜 비교시 년 월 일까지만 비교하게끔
  const createDate = date => {
    return new Date(
      new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
    );
  };

  return (
    <>
      {/* Controller를 선언한 후 control을 속성으로 넣어주면 된다. */}
      <div>
        <ReactDatePicker
          dateFormat="yyyy년 MM월 dd일"
          placeholderText="시작 날짜를 입력해 주세요"
          className="block w-full rounded-lg border border-dark_grey p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
          onChange={e => {
            firstField.field.onChange(e);
            setFirstDate(e);
          }}
          selected={firstField.field.value}
          inputRef={firstField.field.ref}
          locale={ko}
          selectsStart
          withPortal
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          isClearable={true}
          dayClassName={date =>
            getDayName(createDate(date)) === "토"
              ? "saturday"
              : getDayName(createDate(date)) === "일"
              ? "sunday"
              : undefined
          }
        />
        <p className="my-2 text-warning">
          {firstField.fieldState.error ? "⛔ 날짜를 작성해 주세요" : ""}
        </p>
      </div>
      <div>
        {solo ? null : (
          <>
            <ReactDatePicker
              dateFormat="yyyy년 MM월 dd일"
              placeholderText="마지막 날짜를 입력해 주세요"
              className="block w-full rounded-lg border border-dark_grey p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
              onChange={e => {
                if (!firstDate) {
                  return;
                } else {
                  lastField.field.onChange(e);
                  setLastDate(e);
                }
              }}
              selected={lastField.field.value}
              inputRef={lastField.field.ref}
              locale={ko}
              selectsEnd
              minDate={firstDate && firstDate}
              withPortal
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              isClearable={true}
              dayClassName={date =>
                getDayName(createDate(date)) === "토"
                  ? "saturday"
                  : getDayName(createDate(date)) === "일"
                  ? "sunday"
                  : undefined
              }
            />
            <p className="my-2 text-warning">
              {lastField.fieldState.error ? "⛔ 날짜를 작성해 주세요" : ""}
            </p>
          </>
        )}
      </div>
      <div className="col-span-2 w-full">
        <InputItems
          items={items}
          setItems={setItems}
          placeholder="날짜를 쓰고 자격증 항목을 입력하세요 ex) 2023. 2. 11. 정보처리기사 이와 같이 표시됩니다."
          firstDate={firstDate}
          lastDate={lastDate}
          isDate={true}
          solo={solo}
        />
      </div>
    </>
  );
};

export default InputDatePicker;
