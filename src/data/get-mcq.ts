import { sampleSize } from "lodash";
import data from "./mcq.json";
import type { MCQ } from "../types";

export const getMCQ = ({
  limit,
  cap,
}: {
  limit: number;
  cap: number;
    }): MCQ[] => {
  const mcq = sampleSize(
    (data as MCQ[]).filter(q => q.level <= cap),
    limit
  );

  return mcq;
};
