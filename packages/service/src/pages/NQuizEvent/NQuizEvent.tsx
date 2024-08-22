import {
  NQuizSection,
  NQuizTitle,
  NQuizReward,
} from "@service/components/nQuizEvent";
import { nQuizEventTermTitle, nQuizEventTerms } from "@service/constants/terms";
import { useSuspenseQuery } from "@tanstack/react-query";
import { apiGetOrderEvent } from "@service/apis/orderEvent";
import { IOrderEvent } from "@watermelon-clap/core/src/types";
import {
  backgroundStyle,
  rewardWrapStyle,
  termTitleStyle,
  termListStyle,
} from "./NQuizEvent.css";
import { Helmet } from "react-helmet";

export const NQuizEvent = () => {
  const { data: quizList } = useSuspenseQuery<IOrderEvent[]>({
    queryKey: ["orderEvent"],
    queryFn: () => apiGetOrderEvent(),
    staleTime: Infinity,
  });

  const openedQuiz = quizList.find(
    (quiz) => quiz.status === "OPEN",
  ) as IOrderEvent;

  const closedQuiz = quizList.find(
    (quiz) => quiz.status === "CLOSED",
  ) as IOrderEvent;

  const upcomingQuiz = quizList.find(
    (quiz) => quiz.status === "UPCOMING",
  ) as IOrderEvent;

  return (
    <>
      <Helmet>
        <title>
          선착순 퀴즈 이벤트 | 현대자동차 - 아반떼 N 2024 | 고성능 컴팩트
          스포츠카
        </title>
        <meta name="description" content="선착순 퀴즈 이벤트 페이지" />
      </Helmet>
      <div css={backgroundStyle}>
        <NQuizTitle />

        <div css={rewardWrapStyle}>
          {quizList.map((quiz, index) => (
            <NQuizReward
              key={index}
              imgSrc={quiz.reward.imgSrc}
              name={quiz.reward.name}
              startDate={quiz.startDate}
              status={quiz.status}
            />
          ))}
        </div>

        {openedQuiz && <NQuizSection openedQuiz={openedQuiz} />}

        {!openedQuiz && closedQuiz && <NQuizSection openedQuiz={closedQuiz} />}

        {!openedQuiz && !closedQuiz && upcomingQuiz && (
          <NQuizSection openedQuiz={upcomingQuiz} />
        )}

        {!openedQuiz && !closedQuiz && !upcomingQuiz && (
          <NQuizSection openedQuiz={quizList[0]} />
        )}

        <span css={termTitleStyle}>{nQuizEventTermTitle}</span>
        <ul css={termListStyle}>
          {nQuizEventTerms.map((term, index) => (
            <li key={index}>{term}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
