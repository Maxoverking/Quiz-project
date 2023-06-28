import { FC } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { quizCategory } from "./interface/ICategory";

interface SelectProps {
  category: string;
  setCategory: (value: string) => void;
}

const SelectComponent: FC<SelectProps> = ({ category, setCategory }) => {
  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setCategory(value);
  };

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel>Category</InputLabel>
        <Select value={category} onChange={handleChange} label="Category">
          {quizCategory.map(({ category, id }) => (
            <MenuItem key={id} value={id}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectComponent;
