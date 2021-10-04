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
import { Divider, message } from "antd";
import React, { FC, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Scrollspy from "react-scrollspy";
import { RootState } from "../../../@reducers";
import { REMOVE_POST_REQUEST, SET_POST_EDIT } from "../../../@reducers/post";
import { useRouter } from "next/dist/client/router";
import { PostRemoteControlWrapper } from "./styles";

const PostRemoteControl: FC<{ Fullcontent: string }> = ({ Fullcontent }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { post, prevPost, nextPost, removePostDone } = useSelector(
    (state: RootState) => state.post
  );
  const { user } = useSelector((state: RootState) => state.user);
  const [FixedRemote, setFixedRemote] = useState(false);
  const [headers, setHeaders] = useState<string[]>([]);
  const [headerArray, setHeaderArray] = useState(
    Array.from({ length: 20 }, (_, i) => i.toString())
  );
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
    let contentHeaders = document.querySelectorAll(
      ".post-content h1, .post-content h2, .post-content h3"
    );
    let arr: string[] = [];
    contentHeaders.forEach((v, i) => {
      v.setAttribute("id", String(i));
      arr.push(v.innerHTML + v.tagName);
    });
    setHeaders(arr);
  }, [Fullcontent]);

  const timelineLists = useCallback(() => {
    return headers.map((v, i) => (
      <a
        className={v.slice(-2) === "H3" ? "remote-header-small" : "remote-header-large"}
        key={i}
        href={`#${i}`}
      >
        {v.slice(0, -2)}
      </a>
    ));
  }, [headers]);

  const onClickDeletePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: { PostId: post?.id },
    });
  }, [post?.id]);

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
    <aside css={PostRemoteControlWrapper(FixedRemote)}>
      <h1>{post?.title}</h1>
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
                    type: SET_POST_EDIT,
                    data: true,
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
      <Scrollspy style={{ margin: 0 }} items={headerArray} currentClassName="selected">
        {timelineLists()}
        <a className="remote-header-large" href="#comment">
          Comments
        </a>
      </Scrollspy>
    </aside>
  );
};

export default PostRemoteControl;
