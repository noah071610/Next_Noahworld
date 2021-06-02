import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  EditFilled,
  HomeFilled,
  RollbackOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import { css } from "@emotion/react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "antd";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { FC, memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { PostInter, UserInter } from "../../../../@reducers/@reducerTypes";
import { POST_EDIT_ON } from "../../../../@reducers/blog";

interface SlideRemoteProps {
  showModal: () => void;
  post: PostInter;
  prevPost: PostInter[];
  nextPost: PostInter[];
  user: UserInter;
}

const marginZero = css`
  margin: 0;
`;

const SlideRemote: FC<SlideRemoteProps> = memo(({ showModal, post, prevPost, nextPost, user }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onClickLink = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <ul className="slide_title">
      <li css={marginZero}>
        <Link href={"/"}>
          <a>
            <HomeFilled />
          </a>
        </Link>
      </li>
      <Divider type="vertical" />
      <li css={marginZero}>
        <Link href={`/${post?.category === "culture" ? "class" : post?.category}`}>
          <a>
            <RollbackOutlined />
          </a>
        </Link>
      </li>
      <Divider type="vertical" />
      <li onClick={onClickLink} css={marginZero}>
        {nextPost.length > 0 ? (
          <Link href={`/${post?.category}/post/${nextPost[0]?.id}`}>
            <a>
              <DoubleLeftOutlined />
            </a>
          </Link>
        ) : (
          <DoubleLeftOutlined style={{ color: "rgba(0,0,0,0.2)" }} />
        )}
      </li>
      <Divider type="vertical" />
      <li onClick={onClickLink} css={marginZero}>
        {prevPost.length > 0 ? (
          <Link href={`/${post?.category}/post/${prevPost[0]?.id}`}>
            <a>
              <DoubleRightOutlined />
            </a>
          </Link>
        ) : (
          <DoubleRightOutlined style={{ color: "rgba(0,0,0,0.2)" }} />
        )}
      </li>
      <Divider type="vertical" />
      <li css={marginZero}>
        <a onClick={onClickLink}>
          <VerticalAlignTopOutlined />
        </a>
      </li>
      {user?.admin && (
        <>
          <Divider type="vertical" />
          <li css={marginZero}>
            <a
              onClick={() => {
                dispatch({
                  type: POST_EDIT_ON,
                });
                router.push("/admin");
              }}
            >
              <EditFilled />
            </a>
          </li>
          <Divider type="vertical" />
          <li css={marginZero}>
            <a onClick={showModal}>
              <FontAwesomeIcon icon={faTrash} />
            </a>
          </li>
        </>
      )}
    </ul>
  );
});

export default memo(SlideRemote);
