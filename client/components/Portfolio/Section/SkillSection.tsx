import { Divider, Row, Table } from "antd";
import { columns, dataSource, languages, skills, sub_skills } from "../../../config";
import SkillBox from "../SkillBox/SkillBox";
import SkillImageBox from "../SkillBox/SkillImageBox";
import styled from "@emotion/styled";
import React, { FC } from "react";
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
};

export default SkillSection;
