import Col from "antd/lib/col";
import React, { FC } from "react";
import styled from "@emotion/styled";
import { BG_COLOR } from "../../../config";
import { Portfolio_SkillBox } from "../../../types";

const TdText = styled.td`
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-left: 0.5rem;
  p {
    line-height: 1.5;
  }
`;

const Signal = styled.div`
  position: absolute;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  bottom: 0rem;
  right: 0rem;
  background-color: green;
  &:before {
    content: "";
    position: absolute;
    height: 0.3rem;
    top: 0;
    right: 1.8px;
    border-right: 3px solid rgba(255, 255, 255, 0.5);
    border-top-right-radius: 10px;
  }
`;

const TdImg = styled.td`
  width: 40%;
  margin: auto 0;
  position: relative;
  .img_box {
    margin: 0 auto;
    width: 60%;
    position: relative;
    img {
      transition: 0.3s;
      border-radius: 50%;
      padding: 0.5rem;
      width: 100%;
      background-color: ${BG_COLOR};
      &:hover {
        transform: scale(1.1);
      }
    }
  }
  h4 {
    margin-top: 0.5rem;
  }
  @media only screen and (max-width: 768px) {
    width: 25%;
    padding-right: 0.2rem;
    h4 {
      font-size: 0.7rem;
    }
  }
  @media only screen and (max-width: 420px) {
    width: 30%;
  }
`;

const Table = styled.table`
  width: 100%;
  margin: 1.5rem auto;
  tr {
    display: flex;
    align-items: center;
  }
  p {
    width: 100%;
    font-size: 0.8rem;
    text-align: start;
    margin: 0;
  }
  @media only screen and (max-width: 768px) {
    margin: 0.7rem auto;
  }
  @media only screen and (max-width: 400px) {
    p {
      font-size: 0.7rem;
    }
  }
`;

const SkillBox: FC<Portfolio_SkillBox> = (props) => {
  return (
    <Col xs={24} md={12} style={{ display: "flex" }}>
      <Table>
        <tbody>
          <tr>
            <TdImg>
              <div className="img_box">
                <img alt={props.name} src={props.src} />
                {props.level ? <Signal /> : null}
              </div>
              <h4>{props.name}</h4>
            </TdImg>
            <TdText>
              <p>{props.desc}</p>
            </TdText>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
};

export default SkillBox;
