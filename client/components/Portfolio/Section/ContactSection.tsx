import { Col, message, Row } from "antd";
import React, { FC } from "react";
import styled from "@emotion/styled";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Articles from "../Articles";
import Title from "../Decorator/Title";

const ContactLinkBox = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (min-width: 992px) {
    justify-content: center;
    align-items: center;
  }
`;

const ContactLink = styled.a`
  display: flex;
  height: 50px;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const P = styled.q`
  font-size: 0.9rem;
  @media only screen and (min-width: 992px) {
    font-size: 0.8rem;
  }
`;

const ContactSection: FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id}>
      <div className="space" />
      <Articles>
        <Title title="Contact" sub="언제든지 편하게 연락주세요." />
        <Row style={{ width: "100%", margin: "0 auto", padding: "3rem 0 4rem 0" }}>
          <Col xs={24} lg={12} className="contact_image_box">
            <img
              data-aos="flip-up"
              data-aos-duration="800"
              alt="contact_image"
              className="contact_image"
              src="/images/contact_inside.png"
            />
            <P data-aos="fade-up" data-aos-duration="1000">
              항상 노력해도 부족하다고 느끼는게 개발자라는 직업인 것 같습니다.
              <br />
              저는 배움을 갈망하는 <span className="marker">신뢰받는 개발자</span>가 되고싶습니다.
              <br />
              개인적인 피드백도 좋으니 편하게 연락 주시면 좋겠습니다! <br />
              방문해주셔서 감사합니다 😄.
            </P>
          </Col>
          <ContactLinkBox xs={24} lg={12}>
            <ContactLink href="mailto:noah071610@naver.com">
              <img
                alt="contact_link"
                style={{ width: "50px" }}
                src="https://img.icons8.com/dusk/64/000000/send-mass-email.png"
              />
              <h2 style={{ marginLeft: "1rem" }}> 이메일로 보내기</h2>
            </ContactLink>
            <ContactLink
              href="https://www.instagram.com/salmonchobab/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="contact_link"
                style={{ width: "50px", paddingBottom: "0.2rem" }}
                src="https://img.icons8.com/fluent/144/000000/instagram-new.png"
              />
              <h2 style={{ marginLeft: "1rem" }}>인스타그램 DM</h2>
            </ContactLink>
            <CopyToClipboard text="01056723486">
              <ContactLink
                onClick={() => message.success("전화번호가 복사됬어요! 잘부탁드립니다 ^^")}
                href="tel:01056723486"
              >
                <img
                  alt="contact_link"
                  style={{ width: "50px" }}
                  src="https://img.icons8.com/fluent/48/000000/outgoing-call.png"
                />
                <h2 style={{ marginLeft: "1rem" }}> 전화 연결 </h2>
              </ContactLink>
            </CopyToClipboard>
          </ContactLinkBox>
        </Row>
      </Articles>
    </section>
  );
};

export default ContactSection;
