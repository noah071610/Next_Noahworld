import React, { memo, useEffect } from "react";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Divider } from "antd";
import { CHAGE_HEADER, OFF_ABOUT } from "../../@reducers/blog";
import Head from "next/head";
import { CardContents, SUB_COLOR } from "../../config";
import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import Aos from "aos";

const PageWrapper = dynamic(() => import("../../components/Portfolio/PageWrapper"));
const Articles = dynamic(() => import("../../components/Portfolio/Articles"));
const Title = dynamic(() => import("../../components/Portfolio/Decorator/Title"));
const CardContent = dynamic(() => import("../../components/Portfolio/Decorator/CardContent"));
const SkillSection = dynamic(() => import("../../components/Portfolio/Section/SkillSection"));
const ContactSection = dynamic(() => import("../../components/Portfolio/Section/ContactSection"));
const Poster = dynamic(() => import("../../components/Portfolio/Poster"));
const PortfolioSection = dynamic(
  () => import("../../components/Portfolio/Section/PortfolioSection")
);

const Img = styled.img`
  width: 170px;
  height: 200px;
  border-radius: 1rem;
  padding: 3px;
  box-shadow: 4px 8px 21px 1px rgba(0, 0, 0, 0.15);
`;

const IntroImg = styled.div`
  width: 50%;
  margin-bottom: 0;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

const IntroMe = styled.div`
  width: 50%;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h3 {
    font-size: 1.1rem;
  }
  & p {
    width: 90%;
    margin-left: 0;
    line-height: 1.5;
    font-size: 0.85rem;
  }
  & ul {
    margin-top: 0.5rem;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
    p {
      margin: 0 auto;
    }
    ul {
      margin-top: 1rem;
    }
  }
`;

const SocialIcon = styled(FontAwesomeIcon)`
  font-size: 1.2rem;
  color: black;
  margin-right: 0.5rem;
  margin-left: 0.1rem;
  transition: all 0.3s;
  &:hover {
    color: ${SUB_COLOR};
  }
`;

const ValueCard = styled(Col)`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: 0.5s;
  margin-bottom: 1.5rem;
`;

const Home = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const PortfolioMainPage = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: OFF_ABOUT,
    });
    dispatch({
      type: CHAGE_HEADER,
      header: "portfolio",
    });
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Head>
        <title>Jang Hyun Soo - Portfolio</title>
      </Head>
      <Home>
        <Poster />
        <PageWrapper>
          <section id="aboutme">
            <div className="space" />
            <Articles>
              <Title title="Introduce" sub="신뢰를 바탕으로 함께 발전합니다." />
              <Row>
                <IntroImg>
                  <Img data-aos="fade-down" data-aos-duration="800" src="/images/profile.jpg" />
                </IntroImg>
                <IntroMe data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">
                  <h3>
                    신뢰를 주는 <span className="marker">장현수</span> 입니다.
                  </h3>
                  <p>
                    성급하지 않지만 꾸준히, 누구보다 즐겁고 열정있게 신입 프론트엔드 개발자라는
                    목표를향해 나아가고 있습니다.
                  </p>
                  <ul>
                    <li>
                      <a href="https://github.com/noah071610" target="_blank" rel="noreferrer">
                        <SocialIcon className="social_icon" icon={faGithub} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/salmonchobab/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <SocialIcon className="social_icon" icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:noah071610@naver.com">
                        <SocialIcon className="social_icon" icon={faEnvelope} />
                      </a>
                    </li>
                  </ul>
                </IntroMe>
              </Row>
              <Divider style={{ margin: "6rem 0" }} orientation="left">
                Main Value
              </Divider>
              <Row>
                <ValueCard xs={24} md={8}>
                  <CardContent delay={300} contents={CardContents[0]} />
                </ValueCard>
                <ValueCard xs={24} md={8}>
                  <CardContent delay={600} contents={CardContents[1]} />
                </ValueCard>
                <ValueCard xs={24} md={8}>
                  <CardContent delay={900} contents={CardContents[2]} />
                </ValueCard>
              </Row>
            </Articles>
          </section>
          <SkillSection id="skills" />
          <PortfolioSection id="portfolio" />
          <ContactSection id="contact" />
        </PageWrapper>
      </Home>
    </>
  );
});

export default memo(PortfolioMainPage);
