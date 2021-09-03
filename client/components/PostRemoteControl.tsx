/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  DoubleLeftOutlined,
  DoubleRightOutlined,
  EditFilled,
  HomeFilled,
  RollbackOutlined,
  VerticalAlignTopOutlined,
} from "@ant-design/icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, message, Timeline } from "antd";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Scrollspy from "react-scrollspy";
import { RootState } from "../@reducers";
import { POST_EDIT_ON } from "../@reducers/blog";
import { REMOVE_POST_REQUEST } from "../@reducers/post";
import { useRouter } from "next/dist/client/router";
import { css } from "@emotion/react";
import tw from "twin.macro";

const PostRemoteControlWrapper = (FixedRemote: boolean) => css`
  ${tw`w-72 pl-8 top-20 h-full top-20`}
  position: ${FixedRemote ? "sticky" : "static"};
  h2 {
    ${tw`mb-4 leading-5`}
  }
  ul:first-of-type {
    overflow: hidden;
    li {
      margin: 0;
    }
  }
  @media (max-width: 830px) {
    display: none;
  }
`;

const PostRemoteControl: FC<{ Fullcontent: string }> = ({ Fullcontent }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { post, prevPost, nextPost, removePostDone } = useSelector(
    (state: RootState) => state.post
  );
  const { user } = useSelector((state: RootState) => state.user);
  const [FixedRemote, setFixedRemote] = useState(false);
  const [headers, setHeaders] = useState<string[]>([]);
  useEffect(() => {
    function scrollCallBack() {
      if (window.scrollY > 400) {
        setFixedRemote(true);
      } else {
        setFixedRemote(false);
      }
    }
    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  useEffect(() => {
    let contentHeaders = document.querySelectorAll(".post-content h1, .post-content h2");
    let arr: string[] = [];
    contentHeaders.forEach((v, i) => {
      v.setAttribute("id", String(i));
      arr.push(v.innerHTML);
    });
    setHeaders(arr);
  }, [Fullcontent]);

  const timelineLists = useCallback(() => {
    return headers.map((v, i) => (
      <Timeline.Item color="gray" key={i} style={{ width: "100%" }}>
        <a href={`#${i}`}>{v}</a>
      </Timeline.Item>
    ));
  }, [headers]);

  const onClickDeletePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: { PostId: post?.id, tags: post?.Hashtags },
    });
  }, [post?.id, post?.Hashtags]);

  useEffect(() => {
    if (removePostDone) {
      message.success("Removed Post Successfully");
      router.push("/");
    }
  }, [dispatch, router, removePostDone]);

  const onClickList = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="remocontrol" css={PostRemoteControlWrapper(FixedRemote)}>
      <h2>{post?.title}</h2>
      <ul>
        <li>
          <Link href={"/"}>
            <a>
              <HomeFilled />
            </a>
          </Link>
        </li>
        <Divider type="vertical" />
        <li>
          <a
            onClick={() =>
              router.push(`/${post?.category === "culture" ? "class" : post?.category}`)
            }
          >
            <RollbackOutlined />
          </a>
        </li>
        <Divider type="vertical" />
        <li onClick={onClickList}>
          {nextPost[0] ? (
            <Link href={`/${post?.category}/post/${nextPost[0].id}`}>
              <a>
                <DoubleLeftOutlined />
              </a>
            </Link>
          ) : (
            <DoubleLeftOutlined style={{ color: "rgba(0,0,0,0.2)" }} />
          )}
        </li>
        <Divider type="vertical" />
        <li onClick={onClickList}>
          {prevPost[0] ? (
            <Link href={`/${post?.category}/post/${prevPost[0].id}`}>
              <a>
                <DoubleRightOutlined />
              </a>
            </Link>
          ) : (
            <DoubleRightOutlined style={{ color: "rgba(0,0,0,0.2)" }} />
          )}
        </li>
        <Divider type="vertical" />
        <li>
          <a onClick={onClickList}>
            <VerticalAlignTopOutlined />
          </a>
        </li>
        {user?.id === 1 && user.admin && (
          <>
            <Divider type="vertical" />
            <li>
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
            <li>
              <a onClick={onClickDeletePost}>
                <FontAwesomeIcon icon={faTrash} />
              </a>
            </li>
          </>
        )}
      </ul>
      <Divider style={{ margin: "0.5rem 0 3rem 0" }} />
      <Scrollspy
        style={{ margin: 0 }}
        items={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
        currentClassName="selected"
        offset={300}
      >
        {timelineLists()}
        <Timeline.Item
          style={{ width: "100%", paddingBottom: 0 }}
          className="ant-timeline-item-last"
        >
          <a href={`#comment`}>Comments</a>
        </Timeline.Item>
      </Scrollspy>
    </div>
  );
};

export default PostRemoteControl;
