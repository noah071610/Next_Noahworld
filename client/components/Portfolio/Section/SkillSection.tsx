import { Divider, Row, Table } from "antd";
import { languages, skills, sub_skills } from "../../../config";
import SkillBox from "../SkillBox/SkillBox";
import SkillImageBox from "../SkillBox/SkillImageBox";
import styled from "styled-components";
import { FC } from "react";
import Articles from "../Articles";
import Title from "../Decorator/Title";

const SkillDescDivider = styled.span`
  font-size: 0.8rem;
`;

const CertificateTable = styled(Table)`
  @media only screen and (max-width: 515px) {
    td {
      font-size: 0.7rem;
    }
  }
`;

const SkillSection: FC<{ id: string }> = ({ id }) => {
  const dataSource = [
    {
      key: "1",
      name: "토익",
      date: 2018,
      summary: "영어 자격증 (기간만료)",
      score: "925",
    },
    {
      key: "2",
      name: "매일경제테스트",
      date: 2018,
      summary: "경제,경영관련 자격증",
      score: "Pass",
    },
    {
      key: "3",
      name: "국외여행인솔자 자격증",
      date: 2019,
      summary: "해외에서 인정하는 한국관광협회의 국외 인솔자  자격증",
      score: "Pass",
    },
    {
      key: "4",
      name: "JLPT",
      date: 2019,
      summary: "일본어 자격증",
      score: "1급",
    },
    {
      key: "5",
      name: "일본어 통역안내사 자격증 (국가전문자격)",
      date: 2019,
      summary: "한국사1급에 준하며 일본어 통번역 능력을 입증하는 국가전문자격증",
      score: "Pass",
    },
    {
      key: "6",
      name: "영어 통역안내사 자격증 (국가전문자격)",
      date: 2020,
      summary: "한국사1급에 준하며 영어 통번역 능력을 입증하는 국가전문자격증",
      score: "Pass",
    },
    {
      key: "7",
      name: "정보처리기사 (국가기술자격)",
      date: 2021,
      summary: "IT관련 소양을 입증하는 국가기술자격증",
      score: "Pass",
    },
    {
      key: "8",
      name: "학점은행제 경영학사",
      date: 2021,
      summary: "졸업예정",
      score: "학사",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Summary",
      dataIndex: "summary",
      key: "summary",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
  ];

  return (
    <section id={id}>
      <div className="space" />
      <Articles>
        <Title title="Main Skills" sub="우선순위를 두고 집중적으로 공부한 스킬입니다." />
        <Row style={{ paddingBottom: "1rem" }}>
          {skills.map((skill, i) => {
            return (
              <SkillBox
                key={"skill" + i}
                name={skill.name}
                src={skill.src}
                desc={skill.desc}
                level={skill.level}
              />
            );
          })}
        </Row>
        <div className="space" />
        <Divider orientation="left">
          <h4 style={{ textAlign: "start" }}>Language skills</h4>
          <SkillDescDivider>통역사국가자격증을 보유하고 있습니다.</SkillDescDivider>
        </Divider>
        <Row>
          {languages.map((lan, i) => {
            return (
              <SkillImageBox
                key={"lan" + i}
                name={lan.name}
                src={lan.src}
                licenseKor={lan.licenseKor}
                popup={lan.popup}
                content={lan.content}
              />
            );
          })}
        </Row>
        <Divider orientation="left">
          <h4 style={{ textAlign: "start" }}>Sub skills</h4>
          <SkillDescDivider>초록불은 응용까지 공부한 스킬입니다.</SkillDescDivider>
        </Divider>
        <Row style={{ marginTop: "2rem" }}>
          {sub_skills.map((skill, i) => {
            return (
              <SkillImageBox
                key={"skill" + i}
                name={skill.name}
                src={skill.src}
                level={skill.level}
              />
            );
          })}
        </Row>
        <Divider style={{ margin: "3rem 0" }} orientation="left">
          <h4 style={{ textAlign: "start" }}>Certificate</h4>
          <SkillDescDivider>취득 자격증 입니다.</SkillDescDivider>
        </Divider>
        <CertificateTable dataSource={dataSource} columns={columns} />
      </Articles>
    </section>
  );
};

export default SkillSection;
