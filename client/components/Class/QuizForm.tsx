/* eslint-disable jsx-a11y/anchor-is-valid */
import { Input, message } from "antd";
import React, { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import { ArrowRightOutlined, EnterOutlined } from "@ant-design/icons";
import { RootState } from "../../@reducers";
import useInput from "../../util/useInput";

const Quiz = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 500px;
  .quiz_input_wrapper {
    width: 320px;
    position: absolute;
    right: 3.5rem;
    bottom: 0.6rem;
  }
  .quiz_input {
    width: 300px;
  }
  @media only screen and (max-width: 476px) {
    display: none;
  }
`;
const QuizWrapper = styled.div`
  width: 420px;
  height: 100%;
  position: absolute;
  right: 1rem;
  bottom: 0;
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
    padding: 0.5rem 1rem;
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
  bottom: 4rem;
`;
const QuizContent = styled.div`
  width: 250px;
  height: 180px;
  position: absolute;
  right: 4rem;
  bottom: 4.2rem;
`;

const QuizForm = memo(() => {
  const { quizzes } = useSelector((state: RootState) => state.post);
  const [quizAnswer, onChangeQuizAnswer, setQuizAnswer] = useInput("");
  const [viewQuizAnswer, setViewQuizAnswer] = useState(false);
  const [randomQuiz, setRandomQuiz] = useState(0);

  const onClickNextQuiz = useCallback(() => {
    //총 퀴즈 갯수중 하나를 랜덤으로 뽑아옵니다.
    let myRandNum = Math.floor(Math.random() * quizzes.length);
    //만약 랜덤으로 뽑은 값이 현재값이랑 일치한다면...
    if (myRandNum === randomQuiz) {
      //2. 랜덤으로 뽑은값이 마지막값인 상태에서 +1 을 하게 되면 오류가 나게 되기 때문에
      //   첫번째 값으로 변경해서 리턴해줍니다.
      if (myRandNum === quizzes.length - 1) {
        setRandomQuiz(0);
        setViewQuizAnswer(false);
        setQuizAnswer("");
        return;
      }
      //1. 랜덤으로 뽑은 값의 다음값을 리턴합니다.
      setRandomQuiz(myRandNum + 1);
      setViewQuizAnswer(false);
      setQuizAnswer("");
      return;
    }
    setRandomQuiz(myRandNum);
    setViewQuizAnswer(false);
    setQuizAnswer("");
  }, [quizzes.length, randomQuiz, setQuizAnswer]);

  const onClickQuizSubmit = useCallback(() => {
    //퀴즈에 값을 넣지 않았다면 제출버튼이 작동하지 않게 합니다.
    if (quizAnswer === "") {
      message.error("答えを書いてくださいね！");
      return;
    }
    setViewQuizAnswer(true);
  }, [quizAnswer]);

  return (
    <Quiz
      style={{
        background: `url('https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80') no-repeat bottom fixed`,
        backgroundSize: "cover",
      }}
    >
      <QuizWrapper
        style={{
          background: `url('/images/blog/kakao.png') no-repeat`,
          backgroundSize: "cover",
        }}
      >
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
    </Quiz>
  );
});

export default memo(QuizForm);
