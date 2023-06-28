import { ChangeEvent, FC } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ITypeQuizProps } from "./interface/ITypeQuizProps";

const TypeQuizComponent: FC<ITypeQuizProps> = ({ type, setType }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setType(value);
  };

  return (
    <>
      <span>Quiz Type</span>
      <FormControl>
        <RadioGroup row value={type} onChange={handleChange}>
          <FormControlLabel
            value="multiple"
            control={<Radio />}
            label="Multi"
          />
          <FormControlLabel
            value="boolean"
            control={<Radio />}
            label="True & False"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default TypeQuizComponent;
