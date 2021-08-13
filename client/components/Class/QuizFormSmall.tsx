/* eslint-disable jsx-a11y/anchor-is-valid */
import { Input, message } from "antd";
import React, { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { ArrowRightOutlined, EnterOutlined } from "@ant-design/icons";
import { RootState } from "../../@reducers";
import useInput from "../../util/useInput";

const QuizWrapper = styled.div`
  display: none;
  @media only screen and (max-width: 476px) {
    display: block;
    width: 100%;
    position: relative;
    .quiz_input_wrapper {
      width: 93%;
      position: absolute;
      display: flex;
      justify-content: space-between;
      align-items: center;
      right: 5%;
      bottom: 2.3%;
    }
  }
`;

interface KakaoContentProps {
  whiteType: Boolean;
}

const KakaoContent = styled.div<KakaoContentProps>`
  font-size: 0.9rem;
  padding: 0.5rem;
  background-color: ${({ whiteType }) => (whiteType ? "rgb(235, 235, 235)" : "#ffe941")};
  border-radius: 3px;
  margin-bottom: 1rem;
  width: 100%;
  height: 80px;
  position: relative;
  word-break: break-all;
  -ms-overflow-style: none;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  button {
    margin-top: 0.5rem;
    font-size: 1rem;
    padding: 0.2rem 0.8rem;
    float: right;
  }
`;

const ContentTailQuestion = styled.div`
  position: absolute;
  left: -5px;
  transform: rotateZ(45deg);
  top: 10px;
  width: 9px;
  height: 9px;
  background-color: #ffe941;
  content: "";
`;
const ContentTailAnswer = styled.div`
  position: absolute;
  right: -0.32rem;
  transform: rotateZ(45deg);
  z-index: 1;
  width: 9px;
  height: 9px;
  background-color: rgb(235, 235, 235);
  content: "";
  bottom: 4.5rem;
`;
const QuizContent = styled.div`
  width: 70%;
  position: absolute;
  top: 28%;
  left: 20%;
`;

const QuizFormSmall = memo(() => {
  const { quizzes } = useSelector((state: RootState) => state.post);
  const [quizAnswer, onChangeQuizAnswer, setQuizAnswer] = useInput("");
  const [viewQuizAnswer, setViewQuizAnswer] = useState(false);
  const [randomQuiz, setRandomQuiz] = useState(0);

  const onClickNextQuiz = useCallback(() => {
    let myRandNum = Math.floor(Math.random() * quizzes.length);
    if (myRandNum === randomQuiz) {
      if (myRandNum === quizzes.length - 1) {
        setRandomQuiz(0);
        setViewQuizAnswer(false);
        setQuizAnswer("");
        return;
      }
      let myNewRandNum = myRandNum + 1;
      setRandomQuiz(myNewRandNum);
      setViewQuizAnswer(false);
      setQuizAnswer("");
      return;
    }
    setRandomQuiz(myRandNum);
    setViewQuizAnswer(false);
    setQuizAnswer("");
  }, [quizzes.length, randomQuiz, setQuizAnswer]);

  const onClickQuizSubmit = useCallback(() => {
    if (quizAnswer === "") {
      message.error("答えを書いてくださいね！");
      return;
    }
    setViewQuizAnswer(true);
  }, [quizAnswer]);

  return (
    <QuizWrapper>
      <img alt="kakao_small" src="/images/blog/kakao_small.png" style={{ width: "100%" }} />
      <QuizContent>
        <ContentTailQuestion />
        <KakaoContent whiteType={false}>
          {viewQuizAnswer ? quizzes[randomQuiz]?.answer : quizzes[randomQuiz]?.question}
        </KakaoContent>
        {viewQuizAnswer ? (
          <>
            <ContentTailAnswer />
            <KakaoContent whiteType={true}>
              貴方の答え：{quizAnswer}
              <br />
              <button className="public_btn" onClick={onClickNextQuiz}>
                次のクイズ
                <ArrowRightOutlined />
              </button>
            </KakaoContent>
          </>
        ) : null}
      </QuizContent>
      <div className="quiz_input_wrapper">
        <Input
          className="quiz_input"
          value={quizAnswer}
          disabled={viewQuizAnswer ? true : false}
          onChange={onChangeQuizAnswer}
          placeholder="翻訳してくれ！"
          bordered={false}
          onPressEnter={onClickQuizSubmit}
        />
        <a>
          <EnterOutlined
            onClick={onClickQuizSubmit}
            style={{ color: "#CABFCC", fontSize: "1.2rem" }}
          />
        </a>
      </div>
    </QuizWrapper>
  );
});

export default memo(QuizFormSmall);
