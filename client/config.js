import { faAddressCard, faEnvelope, faImages, faLaptop } from "@fortawesome/free-solid-svg-icons";
import React from "react";

// Config
export const BACKEND_URL = "https://api.noahworld.site";

// Color

export const BLUE_COLOR = "#1187cf";
export const MAIN_COLOR = "#D5F7E6";
export const SUB_COLOR = "#5AE4A8";
export const GRAY_COLOR = "rgba(0, 0, 0, 0.2)";
export const BG_COLOR = "rgb(247, 247, 247)";
export const RED_COLOR = "#f15b6c";

// Mainpage Desc

export const CARD_DESC_PS =
  "새로운 기술을 배우기전 항상 자신의 기본기를 점검합니다. 또한 문제를 정확하게 인식하고 배우고 기록합니다.";
export const CARD_DESC_COMU =
  "팀워크를 최우선으로 여기며 소통을 중심으로 매순간 신뢰의 기반을 다집니다.";
export const CARD_DESC_COOP =
  "코딩 자체를 즐기며 매순간 열정을 가지고 고비를 넘으며 담담하게 도전합니다.";

export const CardContents = [
  {
    squareTitle: "ProblemSolve",
    title: "문제해결능력을 위한 기본기",
    desc: CARD_DESC_PS,
    src: "/images/ProblemSolve.png",
  },
  {
    squareTitle: "Cooperation",
    title: "신뢰에서 오는 진정한 소통",
    desc: CARD_DESC_COMU,
    src: "/images/Cooperation.png",
  },
  {
    squareTitle: "Passion",
    title: "열정 그리고 도전",
    desc: CARD_DESC_COOP,
    src: "/images/Passion.png",
  },
];

// Nav Contents
export const navContents = [
  {
    icon: faAddressCard,
    explain: "About me",
    name: "aboutme",
  },
  {
    icon: faLaptop,
    explain: "Skills",
    name: "skills",
  },
  {
    icon: faImages,
    explain: "Portfolio",
    name: "portfolio",
  },
  {
    icon: faEnvelope,
    explain: "Contact",
    name: "contact",
  },
];

// Skill page
export const skills = [
  {
    name: "Html & CSS",
    src: "./images/HtmlCss.png",
    desc: "웹표준 , DOM-tree , 반응형웹과 브라우저 렌딩 특성을 파악하며 CSS의 다채로운 애니메이션과 더불어 전치리기 사용이 가능합니다.",
    level: true,
  },
  {
    name: "TypeScript",
    src: "https://img.icons8.com/color/144/000000/typescript.png",
    desc: "ES6 최신문법과 실행컨텍스트,클로저,이벤트루프등 독특한 JS특성을 폭넓게 이해하며, 대세인 타입스크립트를 적극 활용합니다.",
    level: true,
  },
  {
    name: "React",
    src: "https://img.icons8.com/color/144/000000/react-native.png",
    desc: "Hooks 문법, Router적용, Redux와 비동기를 위한 saga, thunk 또는 MobX 등등 여러 라이브러리를 응용하며 렌더링최소화 및 생명주기같은 React의 SPA 특성을 이해합니다.",
    level: true,
  },
  {
    name: "Next.js",
    src: "https://docs.microsoft.com/ko-kr/windows/images/nextjs-logo.png",
    desc: "SEO의 효율성을 높아는 Next.js의 SSR 특성을 이해하며 React에 적용하며, SPA 와 SSR 를 장단점을 파악하기 위해 노력합니다.",
    level: true,
  },
  {
    name: "Mysql",
    src: "https://img.icons8.com/ios-filled/100/000000/mysql-logo.png",
    desc: "시퀄라이즈 & 워크벤치를 사용하며, 스키마 정의와 콘솔명령어, 그리고 데이터베이스 관계도를 이해해 데이터를 효율있게 관리합니다.",
    level: true,
  },
  {
    name: "Git",
    src: "https://img.icons8.com/nolan/128/github.png",
    desc: "형상관리의 기본원리와 버전관리,브랜치,백업등을 적극 활용합니다.",
    level: true,
  },
];

export const sub_skills = [
  {
    name: "SCSS",
    src: "https://img.icons8.com/color/144/000000/sass-avatar.png",
    level: true,
  },
  {
    name: "Axios",
    src: "https://media-exp1.licdn.com/dms/image/C4E0BAQGlN3RJvKmwEg/company-logo_200_200/0/1571253448818?e=2159024400&v=beta&t=VYfrSozq3kSw5_404tR4xYFMH0uFQNmQNrweQcJkbGw",
    level: true,
  },
  {
    name: "Express",
    src: "https://www.mementotech.in/assets/images/icons/express.png",
    level: true,
  },
  {
    name: "GraphQL",
    src: "https://img.icons8.com/color/144/000000/graphql.png",
    level: true,
  },
  {
    name: "Antd",
    src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    level: true,
  },
  {
    name: "Styled-components",
    src: "https://avatars.githubusercontent.com/u/20658825?s=280&v=4",
    level: true,
  },
  {
    name: "Emotion.js",
    src: "https://cdn-images-1.medium.com/max/1600/1*gGzRmUKNOC_X7klFjTk8EA.png",
    level: true,
  },
  {
    name: "AWS",
    src: "https://images.squarespace-cdn.com/content/v1/52ca3b73e4b04a45ef2c5cb6/1551884861331-C9U2RHJQLOPL9F332X5O/ke17ZwdGBToddI8pDm48kK6x8IOhzX_rTtQGKY1qp-hZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7XaGPskfQtVutuSA2B-JW6wkqqV024XP-059DP6wRYqYVUGMzsBxTo2UlkZq10GTrg/AWS_blog_01.PNG",
    level: true,
  },
  {
    name: "Passport.js",
    src: "https://leolanchas.com/wp-content/uploads/2013/07/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png",
  },
  {
    name: "Nginx",
    src: "https://img.icons8.com/color/144/000000/nginx.png",
  },
  {
    name: "Babel",
    src: "https://cdn.imgbin.com/8/4/22/imgbin-source-to-source-compiler-javascript-ecmascript-node-js-that-s-Kft9K4nE9YHrMp6sdq0BQ09cK.jpg",
  },
  {
    name: "Webpack",
    src: "https://t1.daumcdn.net/cfile/tistory/999AF54B5B93D78C25",
  },
  {
    name: "Postman",
    src: "https://miro.medium.com/max/512/1*fVBL9mtLJmHIH6YpU7WvHQ.png",
  },
];

export const eng_desc = (
  <div>
    <p>· 개요: 문화체육관광부에서 실시하는 통역분야의 유일한 국가공인자격증(출처:Q-Net)</p>
    <p>· 취득당시 어학점수: TOEIC 925점(2018년 취득)</p>
  </div>
);
export const jap_desc = (
  <div>
    <p>· 개요: 문화체육관광부에서 실시하는 통역분야의 유일한 국가공인자격증(출처:Q-Net)</p>
    <p>· 취득당시 어학점수: JLPT1급(2019년 취득)</p>
  </div>
);

export const languages = [
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

export const dataSource = [
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
    summary: "2021년 6월 졸업예정",
    score: "학사",
  },
];

export const columns = [
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

//Portfolio

export const portfolios = [
  {
    id: 1,
    name: "My Seoul Guide",
    date: "2021/4~ 2021/5",
    tags: ["#TypeScript", "#React", "#Emotion", "#GraphQL"],
    src: "https://user-images.githubusercontent.com/74864925/120121315-b4316000-c1dd-11eb-9f9b-08c45229c7e8.png",
    git: "https://github.com/noah071610/My-Seoul-Guide",
  },
  {
    id: 2,
    name: "Noah world Blog",
    date: "2021/2~ 2021/4",
    tags: ["#TypeScript", "#React", "#Next.js", "#Mysql", "#AWS"],
    src: "https://user-images.githubusercontent.com/74864925/120121316-b5628d00-c1dd-11eb-87f2-da099956c725.png",
    git: "https://github.com/noah071610/Next_NoahWorld",
  },
  {
    id: 3,
    name: "Movie App (Clone Coding)",
    date: "2020/12~ 2021/1",
    tags: ["#Javascript", "#React", "#Node.js", "#MongoDB"],
    src: "/images/portfolio/portfolio_movie.jpg",
    git: "https://github.com/noah071610/React_Movie-App",
  },
  {
    id: 4,
    name: "Portfolio",
    date: "2021/1~ 2021/2",
    tags: ["#HTML", "#CSS", "#Javascript", "#React", "#Atnd"],
    src: "https://user-images.githubusercontent.com/74864925/120121704-ea6fdf00-c1df-11eb-92f5-5f74e81e249d.png",
  },
];
