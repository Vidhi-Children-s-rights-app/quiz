import express from "express";
import { getMCQ } from "./data/get-mcq";
import { validateMCQ } from "./data/validate-mcq";

const app = express();

app.use(express.json());

// GET: MCQs based on user level
app.get("/mcq", (req, res) => {
  const { count, level } = req.query as {
    count: string;
    level: string;
  };

  const mcq = getMCQ({
    limit: parseInt(count),
    cap: parseInt(level),
  });

  res.status(200).json({
    count: mcq.length,
    data: mcq,
  });
});

// POST: Returns how many points user has achieved in this round
app.post("/mcq", (req, res) => {
  const { questionId, answerId } = req.body as {
    questionId: number;
    answerId: number;
  };

  const points = validateMCQ({ questionId, answerId });

  res.status(200).json(points);
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
