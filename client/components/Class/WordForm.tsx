import { Col } from "antd";
import React, { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { ArrowRightOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { RootState } from "../../@reducers";
import useToggle from "../../util/useToggle";

const NextBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.5rem;
  padding: 0.5rem 0;
  width: 30%;
  background-color: white;
  color: black;
`;

const WordForm = memo(() => {
  const { words } = useSelector((state: RootState) => state.post);
  const [wordOpen, onClickWord, setwordOpen] = useToggle(false);
  const [randomWord, setRandomWord] = useState(0);
  const onClickNextWord = useCallback(() => {
    let myRandNum = Math.floor(Math.random() * words.length);
    if (myRandNum === randomWord) {
      if (myRandNum === 0) {
        setRandomWord(words.length - 1);
        setwordOpen(false);
        return;
      }
      if (myRandNum === words.length - 1) {
        setRandomWord(0);
        setwordOpen(false);
        return;
      }
      let myNewRandNum = myRandNum + 1;
      setRandomWord(myNewRandNum);
      setwordOpen(false);
      return;
    }
    setRandomWord(myRandNum);
    setwordOpen(false);
  }, [randomWord, setwordOpen, words.length]);

  return (
    <Col style={{ padding: "1rem" }} xs={24} lg={12}>
      <h2 className="blog_class_title">韓国語単語</h2>
      <div
        style={{
          background: `url('/images/blog/class_memo.jpg') no-repeat center`,
          width: "100%",
        }}
        className="blog_word_div"
      >
        <h3 style={{ fontSize: "1.2rem", textAlign: "center", marginBottom: "2rem" }}>
          {words[randomWord]?.question}
        </h3>
        <h4
          style={{
            fontWeight: "bold",
            fontSize: "1rem",
            textAlign: "center",
            lineHeight: "2.3",
            width: "400px",
          }}
        >
          <span
            style={{
              backgroundColor: wordOpen ? "none" : "#cccccc",
              color: wordOpen ? "black" : "#cccccc",
            }}
            onClick={onClickWord}
            className="blog_class_imadoki_contents"
          >
            {words[randomWord]?.answer}
          </span>
        </h4>
        <NextBtn onClick={onClickNextWord} className="public_btn">
          次の単語 <ArrowRightOutlined />
        </NextBtn>
      </div>
      <div className="word_small">
        <h3>{words[randomWord]?.question}</h3>
        <div>
          <span
            style={{
              backgroundColor: wordOpen ? "none" : "#cccccc",
              color: wordOpen ? "black" : "#cccccc",
            }}
            onClick={onClickWord}
            className="blog_class_imadoki_contents"
          >
            {words[randomWord]?.answer}
          </span>
        </div>
        <button
          style={{ width: "50%", marginTop: "1.5rem" }}
          onClick={onClickNextWord}
          className="public_btn"
        >
          次の単語 <ArrowRightOutlined />
        </button>
      </div>
    </Col>
  );
});

export default memo(WordForm);
