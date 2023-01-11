import { useRef } from "react";

const InputItems = props => {
  const addInput = useRef(null);

  const handleAdd = () => {
    const value = addInput.current.value;

    if (value === "") return;

    // 날짜 사용하지 않음
    if (!props.isDate) {
      let newItems = [...props.items];
      newItems.push(value);
      props.setItems([...newItems]);
      addInput.current.value = "";
    }

    // 날짜 1개 사용
    if (props.solo && props.isDate) {
      const newValue = `${new Intl.DateTimeFormat("ko").format(
        props.firstDate
      )} ${value}`;
      let newItems = [...props.items];
      newItems.push(newValue);
      props.setItems([...newItems]);
      addInput.current.value = "";
    }

    // 날짜 2개 사용
    if (!props.solo && props.isDate) {
      if (!props.firstDate || !props.lastDate) return;
      const newValue = `${new Intl.DateTimeFormat("ko").format(
        props.firstDate
      )} ~ ${new Intl.DateTimeFormat("ko").format(props.lastDate)} ${value}`;
      let newItems = [...props.items];
      newItems.push(newValue);
      props.setItems([...newItems]);
      addInput.current.value = "";
    }
  };

  const handleDelete = idx => {
    const newItems = [...props.items].filter((element, i) => idx !== i);
    props.setItems([...newItems]);
  };

  const handleChange = event => {};

  return (
    <div className="space-y-3">
      <input
        ref={addInput}
        type="text"
        name="inputItems"
        id="inputItems"
        placeholder={
          props?.placeholder
            ? props.placeholder
            : "원하는 항목을 적고 아래의 +를 누르세요!"
        }
        className="block w-full rounded-lg border border-dark_grey p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
      />
      {props?.items?.map((element, i) => (
        <div className="flex items-center space-x-4" key={i}>
          <input
            readOnly
            value={element}
            onChange={handleChange}
            className="block w-full rounded-lg border border-dark_grey p-2.5 focus:outline-none focus:ring-2 focus:ring-violet  dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
          />
          <button
            type="button"
            onClick={() => {
              handleDelete(i);
            }}
            className="text-violet hover:scale-110 hover:text-light_violet hover:transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAdd}
        className="w-full rounded-lg border-2 border-dashed border-violet p-2 text-h1 font-bold text-violet transition-colors hover:border-light_violet hover:text-light_violet"
      >
        +
      </button>
    </div>
  );
};

export default InputItems;
