import React from "react";

type Props = {
  question: string;
  answers: string[];
  callbacks: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestion: number;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callbacks,
  userAnswer,
  questionNumber,
  totalQuestion,
}) => {
  return (
    <div>
      <p>
        Question: {questionNumber} / {totalQuestion}{" "}
      </p>

      <p dangerouslySetInnerHTML={{__html: question}} />

      <div>
          {answers.map((answer) => (
                  <button disabled={userAnswer} value={answer} onClick={callbacks}>
                      <span dangerouslySetInnerHTML={{__html: answer}} />
                  </button>
          ))}
      </div>


    </div>
  );
};
