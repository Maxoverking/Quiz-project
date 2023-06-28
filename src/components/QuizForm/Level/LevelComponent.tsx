import { ChangeEvent, FC } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { DifficultyProps, level } from "./interface/IDifficulty";

const LevelComponent: FC<DifficultyProps> = ({ difficulty, setDifficulty }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setDifficulty(value);
  };
  return (
    <>
      <span>Level</span>
      <FormControl>
        <RadioGroup row value={difficulty} onChange={handleChange}>
          <FormControlLabel
            value={`${[level.easy]}`}
            control={<Radio />}
            label="EASY"
          />
          <FormControlLabel
            value={`${[level.medium]}`}
            control={<Radio />}
            label="MEDIUM"
          />
          <FormControlLabel
            value={`${[level.hard]}`}
            control={<Radio />}
            label="PRO"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default LevelComponent;
