import data from "./mcq.json";
import { Points, type MCQ } from "../types";

export const validateMCQ = ({
  questionId,
  answerId,
}: {
  questionId: number;
  answerId: number;
}): number => {
  const mcq = (data as MCQ[]).find(q => q.id === questionId) as MCQ;

  return mcq.answer === answerId ? Points[mcq.difficulty] : 0;
};
