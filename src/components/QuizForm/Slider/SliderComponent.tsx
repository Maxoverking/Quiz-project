import { Slider } from "@mui/material";
import { FC } from "react";
import { ISliderProps } from "./interface/ISliderProps";

const SliderComponent: FC<ISliderProps> = ({ amount, setAmount }) => {
  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setAmount(newValue as number);
  };

  return (
    <>
      <span>Number of Questions</span>
      <Slider
        value={amount}
        size="medium"
        defaultValue={amount}
        min={5}
        max={15}
        onChange={handleSliderChange}
        sx={{
          color: "#52af77",
          "& .MuiSlider-thumb": {
            backgroundColor: "#fac048",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#52af77", // Цвет трека
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#919191", // Цвет фона трека
          },
        }}
      />
      <h4>{amount}</h4>
    </>
  );
};

export default SliderComponent;
