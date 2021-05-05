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
    desc:
      "웹표준 , DOM-tree , 반응형웹과 브라우저 렌딩 특성을 파악하며 CSS의 다채로운 애니메이션과 더불어 전치리기 사용이 가능합니다.",
    level: true,
  },
  {
    name: "TypeScript",
    src: "https://img.icons8.com/color/144/000000/typescript.png",
    desc:
      "ES6 최신문법과 실행컨텍스트,클로저,이벤트루프등 독특한 JS특성을 폭넓게 이해하며, 대세인 타입스크립트를 적극 활용합니다.",
    level: true,
  },
  {
    name: "React",
    src: "https://img.icons8.com/color/144/000000/react-native.png",
    desc:
      "Hooks 문법, Router적용, Redux와 비동기를 위한 saga외 여러 라이브러리를 응용하며 생명주기같은 React의 SPA 특성을 이해합니다.",
    level: true,
  },
  {
    name: "Next.js",
    src: "https://docs.microsoft.com/ko-kr/windows/images/nextjs-logo.png",
    desc:
      "사용자 만족도와 검색엔진 효율성을 높히는 서버사이드렌더링의 특성을 이해하며 Next.js를 React에 적용합니다.",
    level: true,
  },
  {
    name: "Mysql",
    src: "https://img.icons8.com/ios-filled/100/000000/mysql-logo.png",
    desc:
      "시퀄라이즈 & 워크벤치를 사용하며, 스키마 정의와 콘솔명령어, 그리고 데이터베이스 관계도를 이해해 데이터를 효율있게 관리합니다.",
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
    name: "Webpack",
    src: "https://t1.daumcdn.net/cfile/tistory/999AF54B5B93D78C25",
    level: true,
  },
  {
    name: "Express",
    src: "https://www.mementotech.in/assets/images/icons/express.png",
    level: true,
  },
  {
    name: "Passport.js",
    src:
      "https://leolanchas.com/wp-content/uploads/2013/07/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png",
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
    name: "AWS",
    src:
      "https://images.squarespace-cdn.com/content/v1/52ca3b73e4b04a45ef2c5cb6/1551884861331-C9U2RHJQLOPL9F332X5O/ke17ZwdGBToddI8pDm48kK6x8IOhzX_rTtQGKY1qp-hZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7XaGPskfQtVutuSA2B-JW6wkqqV024XP-059DP6wRYqYVUGMzsBxTo2UlkZq10GTrg/AWS_blog_01.PNG",
    level: true,
  },
  {
    name: "MongoDB",
    src: "https://img.icons8.com/color/144/000000/mongodb.png",
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

//Portfolio

export const portfolio1 = {
  id: 1,
  name: "Noah world Blog",
  date: "2021/2~ 2021/4",
  tags: ["#TypeScript", "#React", "#Next.js", "#Mysql", "#AWS"],
  desc: `<h1>Noah World - Place to step up 👨‍💻</h1>
  <br />
  <h3>반갑습니다. 신뢰를 주는 장현수(Noah) 입니다. 😸</h3>
  <p><span style="color: rgba(0, 0, 0, 0.85)"
    >성급하지 않지만, 꾸준히, 누구보다 즐겁고 열정 있게 신입 프론트엔드 개발자라는 목표를 향해
    나아가고 있습니다.&nbsp;</span
  ></p>
  <p><span style="color: rgba(0, 0, 0, 0.85)"
    >이번에 개인적인 블로그를 개설하게 되었습니다. 블로그에 대한 전반적인 정보와 내용, 기술, 피드백과
    특이사항을 알려드리겠습니다.</span
  ></p>
  <br />
  <h2>프로젝트 개요</h2>
  <div class="table">
  <div><p><strong>프로젝트 제목</strong>&nbsp;: Noah World - Place to step up</p>
  <p><strong>프로젝트 인원</strong>&nbsp;: 장현수(Noah) 외 0명</p>
  <p><strong>프로젝트 기간</strong>&nbsp;: 2/4 ~ 3/29 (55 days)</p><p><strong>프로젝트 사용 외국어</strong>:</p>
  <p>└ 영어(전반적인 블로그)</p>
  <p>└ 일본어(한국어 강의 페이지)</p>
  <p>└ 한국어(포트폴리오 페이지)</p></div>
  <div><p><strong>프로젝트 사용 기술</strong>:</p>
  <p>└ Markup Language : Html (+ CSS , SCSS)</p>
  <p>└ Frontend : Javascript , React</p>
  <p>└ Backend : Node.js , AWS</p>
  <p>└ Database : Mysql (Sequelize)</p>
  <p>└ Information security : Node.js</p>
  <p>└ Others : Photo Shop, Notion</p></div>
  </div>
  <br />
  <h2>프로젝트 내용✔️</h2>
  <h3>무리하지않는 깔끔한 디자인을 목표로 개설한 개인 블로그. 🖼️</h3>
  <br />
  <p><strong>페이지전반</strong></p>
  <p>
    최신글 상단 배치, 해시태그와 검색기능🧐, 부문별 탑게시글과 조회수 ,좋아요수💓 ,게시날짜를
    공유합니다.
  </p>
  <p><strong>이용자</strong></p>
  <p>
    이용자는 글을 즐기고 좋아요와 댓글 그리고 대댓글을 작성,수정,삭제 할 수 있으며 회원가입을 통해
    로그인,로그아웃이 가능하나 게시글은 작성,수정,삭제가 불가능합니다.
  </p>
  <p>이용자는 아이콘사진 변경과 비밀번호 변경, 회원탈퇴가 가능합니다.🚮</p>
  <p>
    이용자는 개인 프로필 부분에서 실시간으로 업데이트된 최근 본 게시글과 댓글을 조회 할 수 있습니다.
  </p>
  <p><strong>관리자</strong></p>
  <p>
    관리자만 접근할 수 있는 어드민 페이지를 이용해 관리자만 게시글을 작성 수정 삭제 할 수 있습니다.
  </p>
  <br />
  <h3>활용 기술 Frontend</h3>
  <p>React + Typescript 그리고 Next.js를 사용해 안정성을 갖춘 서버사이드렌더링 사이트를 구축했습니다.</p>
  <p>
    Redux에 Redux Saga를 추가해 비동기도 가능하게 했고 서버통신시 요청성공실패초기화 단계그리고
    try..catch 예외처리를 통해서 에러관리를 했으며 Redux Devtool을 통한 안정적인 프론트엔드 개발을
    하였습니다⭐
  </p>
  <p>404 Not Found 페이지와 Loading 화면, 인피니트 스크롤 페이징 방식등을 적용했습니다.</p>
  <p>hoisting 에 위험이있는 var는 사용하지 않고 const 그리고 let을 사용했습니다.</p>
  <p>
    직접적이게 위치를 바꾸는 것보단 transform으로 위치를 변경하는 등 가능한한 css 최적화를 고려하고
    만들었습니다.
  </p>
  <p>메인컬러, dispatch타입 등은 유지보수를 위해 전역변수를 사용했습니다.</p>
  <p>반응형을 보장하며 모바일 사이즈부터 PC사이즈까지 고려했습니다.⭐</p>
  <p>
    WYSIWYG 시스템을 이용해 게시글 작성시 풍성한 게시글 (코드하이라이트,유튜브링크) 작성이 가능합니다.
  </p>
  <p>
    대댓글이 3개 이상되면 더보기로 바뀌거나, 단어랜덤배치와 작은부분도 신경쓰며 디테일에 최선을
    다했습니다.
  </p>
  <br />
  <h3>활용 기술 Backend + Database</h3>
  <p>cors 미들웨어를 사용해 기본적인 브라우저프론트서버백서버간 cors 문제를 해결했습니다.</p>
  <p>서버 개설전 데이터개념을 체계화하고 스키마를 미리 구상했습니다.⭐</p>
  <p>Restful API의 get, post, delete, patch 원칙을 준수하기 위해 노력했습니다.⭐</p>
  <p>게시글 페이지안 리모컨부분은 헤더를 자동으로 인식해 타임라인을 생성합니다.</p>
  <p>
    게시글 작성시 태그를
    작성하면 정규식을 사용해 자동으로 해쉬태그가 생성되며 데이터베이스에 저장합니다. 수정시 기존
    해쉬태그들을 제거후 수정본에 맞춰 재생성합니다.
  </p>
  <p>
    게시글 페이지에선 html parser를 이용해 text로 데이터베이스에 저장된 게시글을 풍성한 html으로 볼 수
    있으며 게시글 페이지가 아닌 경우 정규식을 통해 html태그들을 제거, text 형식으로 볼 수 있습니다.
  </p>
  <p>
    시퀄라이즈를 이용해 조회수,좋아요,댓글수가 가장 높은 게시글을 끌어와 메인페이지에 배치했습니다.
    또한, 키워드검색 + 해시태그 검색기능을 구현했습니다.
  </p>
  <p>
    Passport.js를 활용한 회원가입,로그인,로그아웃이 가능하고 유저정보를 데이터베이스에 저장합니다.
    또한 쿠키를 받아와 로그인유지도 가능하며 비밀번호 변경과 회원탈퇴도 가능합니다.
  </p>
  <p>이미지 업로드시 multer와 lambda를 이용해 서버에 이미지를 저장, 불러오는 기능을 구현했습니다.</p>
  <p>
    에러 발생시 사용자가 무슨 이유인지 알수있도록 팝업을 띄우며, 많은 예외처리를 고려하며 디테일에
    신경썼습니다.
  </p>
  <br />
  <h3>활용 기술 Information security</h3>
  <p>
    Nodejs helmet, https등을 통해 서버를 보안합니다. 기본적으로 암호는 해시키변환 및 Salting까지 더해
    레인보우 테이블 공격까지 최선으로 보안을 유지합니다.⭐
  </p>
  <p>
    프론트서버에서는 암호 자체를 다루지 않으며 쿠키는 secret 과 secure, expires, 해시값 전달 옵션을
    추가해 보안성을 높였습니다.
  </p>
  <p>유저보안을 위해 프론트 필터링 -&gt; 백엔드 필터링등 2차적으로 보안합니다.</p>
  <p>민간한 정보는 .env를 활용하고 .env, API Key등은 절대 깃허브에 등록하지 않습니다.⭐</p>
  <p>
    게시글 등록 수정 삭제는 어드민유저로그인-&gt;프론트-&gt;서버-&gt;dotenv비밀번호등으로 보안해 일반
    사용자는 접근하지 못하게 대비하였습니다.
  </p>
  <p>
    예기치못한 오류발생시를 대비하여 이메일인증을 삭제하고 민감한 정보사용을 아예 배제해서
    만들었습니다. 이는 실무시에는 다시 적용 할 예정입니다.
  </p>
  <br />
  <br />
  <h2>프로젝트 피드백😓</h2>
  <br />
  <h4>스타일시트를 계획적이게 짜지 못했다.</h4>
  <p>
    Html style 과 scss, styled-components에 글로벌스타일&미디어쿼리, atnd 등등 여러 가지 스타일시트나
    라이브러리가 복잡하게 얽혔습니다.
  </p>
  <p>이번 프로젝트에서 가장 후회하고 절대로 반복해선 안될 실수라 생각합니다.</p>
  <p>
    추후에는 체계적으로 변수이름을 짓고, styled-component을 필두로 미디어 쿼리까지 작성하며 공통적용
    스타일은 scss로 사용하거나 협업시 합의된 스타일시트 작성이 꼭 필요하다고 생각했습니다.
  </p>
  <br />
  <h4>계획과는 다른 프로젝트가 됐다.</h4>
  <span style="color: rgba(0, 0, 0, 0.85)"
    >처음에는 간단한 포트폴리오를 만들 생각이었으나 블로그 개설에 욕심이 생겨 도중에 포트폴리오
    페이지를 컴포넌트로 빼버리고 블로그를 메인으로 작업했습니다.&nbsp;</span
  >
  <p>
    <span style="color: rgba(0, 0, 0, 0.85)">
      Javascript -> React -> NEXT 순으로 계속 변화하며 변수명과 컴포넌트가 얽히고, 똑같은 작업을
      여러번 반복한 감이 없지않아 있습니다.&nbsp;</span
    >
  </p>
  <p>
    <span style="color: rgba(0, 0, 0, 0.85)"
      >요구사항을 정확하게 인식하고 초반부에 아키텍처를 체계적으로 정리하는 중요성을 절실히
      깨달았습니다.</span
    >
  </p>
  <br />
  <h2>마치며</h2>
  <p>피드백이나 문의는
  <a href="mailto:noah07160@naver.com">noah07160@naver.com</a>
  &nbsp;으로 연락주시면 감사하겠습니다.</p>
  <p>긴 글 읽어주셔서 감사합니다. 좋은 하루되세요.</p>`,
  src: "/images/blog/logo_poster.png",
  git: "https://github.com/noah071610/React_NoahWorld",
};

export const portfolio2 = {
  id: 2,
  name: "반응형 웹 포트폴리오 사이트",
  date: "2021/2~ 2021/3",
  tags: ["#Html", "#CSS", "#TypeScript", "#React"],
  desc: `# 반응형으로 모바일과 PC 둘 다 사용이 가능합니다.
  <br />#<span class="marker">간결하고 직관적인</span> 페이지로 가독성을 높였습니다.
  <br />
  # 필요없는 기능은 과감하게 제거했습니다.
  <br />
  # 다양한 라이브러리를 이해하고 적용했습니다.`,
  src: "/images/portfolio/portfolio1_main.png",
  git: "https://github.com/noah071610/React_Portfolio",
};

export const portfolio3 = {
  id: 3,
  name: "Movie App",
  date: "2020/12~ 2021/1",
  tags: ["#Javascript", "#React", "#Node.js", "#MongoDB"],
  desc: `# 클론코딩 입니다.
  <br />#<span class="marker">회원가입및 로그인 로그아웃 기능을 포함합니다.</span>
  <br />
  # movie API를 axios로 가져오고 즐겨찾기에 자신이 마음에 드는 영화를 추가할 수 있습니다.
  <br />
  # Auth 시스템을 사용하여, 로그인하지 않은 사용자는 특정 페이지에 들어가지 못하도록 설정했습니다.
  <br />
  # 그외 라이브러리 및 추가 기능을 연습하기에 만족스러운 프로젝트 였습니다.`,
  src: "/images/portfolio/portfolio_movie.jpg",
  git: "https://github.com/noah071610/React_Movie-App",
};
