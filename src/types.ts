export enum Points {
    "EASY" = 10,
    "MEDIUM" = 20,
    "HARD" = 30
}

export type MCQ = {
    id: number,
    level: number,
    difficulty: keyof typeof Points,
    question: string,
    options: string[],
    answer: number
}
