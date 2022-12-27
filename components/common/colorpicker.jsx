import { PICKERCOLORS } from "public/options";
import { TwitterPicker } from "react-color";

const Colorpicker = ({ name, colorObj, register, setColorObj }) => {
  const handleColorClick = () => {
    let updatedColorObj = {};
    updatedColorObj = { displayColorPicker: !colorObj.displayColorPicker };
    setColor((prev) => ({
      ...prev,
      ...updatedColorObj,
    }));
  };

  const handleColorClose = () => {
    let updatedColorObj = {};
    updatedColorObj = { displayColorPicker: false };
    setColorObj((prev) => ({
      ...prev,
      ...updatedColorObj,
    }));
  };

  const handleColorChange = (color) => {
    let updatedColorObj = {};
    updatedColorObj = { color: color.hex };
    setColorObj((prev) => ({
      ...prev,
      ...updatedColorObj,
    }));
  };

  return (
    <>
      <label
        htmlFor={name}
        className="mb-2 block font-bold text-violet dark:text-light_violet"
      >
        로고 배경
      </label>
      <div onClick={handleColorClick}>
        <div />
      </div>
      <input
        name={name}
        value={colorObj.color}
        {...register}
        onChange={(e) => handleColorChange(e.target.value)}
        className="focus:none w-full rounded-lg border border-violet p-2.5 outline-none dark:border-dark_grey dark:bg-very_dark_blue dark:text-white dark:placeholder-gray"
      />
      {colorObj.displayColorPicker ? (
        <div className="mt-5">
          <TwitterPicker
            color={colorObj.color}
            onChange={handleColorChange}
            triangle="hide"
            width="100%"
            colors={PICKERCOLORS}
          />
        </div>
      ) : null}
    </>
  );
};

export default Colorpicker;
