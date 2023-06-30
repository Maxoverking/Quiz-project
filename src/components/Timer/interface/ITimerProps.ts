export interface ITimerProps {
    selectedAnswer: { id: number; answer: string };
    setSelectedAnswer: (value: { id: number; answer: string }) => void;
    setCorrect: (value: boolean) => void;
}