import { useDispatch, useSelector } from "react-redux";
import { FC, memo, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SUB_COLOR } from "../../config";
import parse from "html-react-parser";
import { CHAGE_HEADER, LOAD_PORTFOLIO, LOAD_PORTFOLIOS, OFF_ABOUT } from "../../@reducers/blog";
import { RootState } from "../../@reducers";
import PageWrapper from "../../components/Portfolio/PageWrapper";
import Articles from "../../components/Portfolio/Articles";
import Title from "../../components/Portfolio/Decorator/Title";
import { useRouter } from "next/dist/client/router";
import wrapper from "../../@store/configureStore";
import axios from "axios";
import { IStore } from "../../types";
import { END } from "@redux-saga/core";
import { LOAD_INFO_REQUEST } from "../../@reducers/user";

const Home = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  &:hover {
    color: ${SUB_COLOR};
  }
`;

const GitLink = styled.a`
  margin-left: 1rem;
`;

const PortfolioPostPage: FC = memo(() => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { portfolio } = useSelector((state: RootState) => state.blog);
  let { id } = router.query;
  useEffect(() => {
    dispatch({
      type: OFF_ABOUT,
    });
    dispatch({
      type: LOAD_PORTFOLIO,
      id,
    });
    dispatch({
      type: CHAGE_HEADER,
      header: "portfolioPost",
    });
  }, []);

  return (
    <Home>
      <PageWrapper>
        <Articles>
          <Title title="Project" />
          <img
            data-aos="fade-in"
            data-aos-duration="1000"
            style={{ width: "100%" }}
            src={portfolio?.src}
            alt={portfolio?.src}
          />
          <h2 data-aos="fade-down" data-aos-duration="500" style={{ marginTop: "2rem" }}>
            {portfolio?.name}
            <GitLink href={portfolio?.git} target="_blank" rel="noreferrer">
              <Icon icon={faGithub} />
            </GitLink>
          </h2>
          <p data-aos="fade-down" data-aos-duration="500" data-aos-delay="300">
            {portfolio?.date}
          </p>
          {portfolio?.tags?.map((tag: string, i: number) => {
            let delay = 300 + i * 150;
            return (
              <span
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-delay={delay}
                key={i}
                className="tag"
              >
                {tag}
              </span>
            );
          })}
        </Articles>
        <Articles>
          <Title title="Summary" />
          <div data-aos="fade-in" data-aos-duration="1000" className="portfolio_summary">
            {portfolio?.desc && parse(portfolio.desc)}
          </div>
        </Articles>
      </PageWrapper>
    </Home>
  );
});

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_INFO_REQUEST,
  });
  context.store.dispatch({
    type: OFF_ABOUT,
  });
  context.store.dispatch({
    type: LOAD_PORTFOLIO,
    id: context.params.id,
  });
  context.store.dispatch({
    type: LOAD_PORTFOLIOS,
  });
  context.store.dispatch({
    type: CHAGE_HEADER,
    header: "portfolioPost",
  });
  context.store.dispatch(END);
  await (context.store as IStore).sagaTask.toPromise();
});

export default PortfolioPostPage;
