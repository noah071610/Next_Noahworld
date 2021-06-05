import { Divider, Row, Table } from "antd";
import { columns, dataSource, skills, sub_skills } from "../../../config";
import styled from "@emotion/styled";
import React, { FC, memo } from "react";
import dynamic from "next/dynamic";

const SkillBox = dynamic(() => import("../SkillBox/SkillBox"));
const SkillImageBox = dynamic(() => import("../SkillBox/SkillImageBox"));
const Articles = dynamic(() => import("../Articles"));
const Title = dynamic(() => import("../Decorator/Title"));

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

const eng_desc = (
  <div>
    <p>· 개요: 문화체육관광부에서 실시하는 통역분야의 유일한 국가공인자격증(출처:Q-Net)</p>
    <p>· 취득당시 어학점수: TOEIC 925점(2018년 취득)</p>
  </div>
);

const jap_desc = (
  <div>
    <p>· 개요: 문화체육관광부에서 실시하는 통역분야의 유일한 국가공인자격증(출처:Q-Net)</p>
    <p>· 취득당시 어학점수: JLPT1급(2019년 취득)</p>
  </div>
);

const languages = [
  {
    name: "English",
    src: "https://img.icons8.com/color/96/000000/usa-circular.png",
    popup: true,
    licenseKor: "2020년 영어",
    content: eng_desc,
  },
  {
    name: "Japanese",
    src: "https://img.icons8.com/color/96/000000/japan-circular.png",
    popup: true,
    licenseKor: "2019년 일본어",
    content: jap_desc,
  },
];

const SkillSection: FC<{ id: string }> = memo(({ id }) => {
  return (
    <section id={id}>
      <div className="space" />
      <Articles>
        <Title title="Main Skills" sub="우선순위를 두고 집중적으로 공부한 스킬입니다." />
        <Row data-aos="fade-in" data-aos-duration="500" style={{ paddingBottom: "1rem" }}>
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
        <Row data-aos="fade-in" data-aos-duration="500">
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
          <SkillDescDivider>주스킬과 연계해 공부한 스킬입니다.</SkillDescDivider>
        </Divider>
        <Row data-aos="fade-in" data-aos-duration="500" style={{ marginTop: "2rem" }}>
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
        <CertificateTable
          data-aos="fade-in"
          data-aos-duration="500"
          dataSource={dataSource}
          columns={columns}
        />
      </Articles>
    </section>
  );
});

export default memo(SkillSection);
