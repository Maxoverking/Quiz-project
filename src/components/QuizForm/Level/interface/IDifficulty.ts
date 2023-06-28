interface IDifficulty {
    easy: string;
    medium: string;
    hard: string;
}

export const level: IDifficulty = {
    easy: "easy",
    medium: "medium",
    hard: "hard",
};

export interface DifficultyProps {
    difficulty: string;
    setDifficulty: (value: string) => void;
}