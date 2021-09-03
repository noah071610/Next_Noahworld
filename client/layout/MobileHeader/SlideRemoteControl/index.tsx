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
import { Divider, message } from "antd";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React, { memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../@reducers";
import { SET_POST_EDIT } from "../../../@reducers/post";
import { REMOVE_POST_REQUEST } from "../../../@reducers/post";
import { SlideRemoteControlWrapper } from "./styles";

const SlideRemoteControl = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const onClickLink = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);
  const { user } = useSelector((state: RootState) => state.user);
  const { post, removePostDone, prevPost, nextPost } = useSelector(
    (state: RootState) => state.post
  );

  const onClickDeletePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: { PostId: post?.id, tags: post?.Hashtags },
    });
  }, [dispatch, post?.Hashtags, post?.id]);

  useEffect(() => {
    if (removePostDone) {
      message.success("Removed Post Successfully");
      router.push("/");
    }
  }, [dispatch, router, removePostDone]);

  return (
    <SlideRemoteControlWrapper>
      <li>
        <Link href={"/"}>
          <a>
            <HomeFilled />
          </a>
        </Link>
      </li>
      <Divider type="vertical" />
      <li>
        <Link href={`/${post?.category === "culture" ? "class" : post?.category}`}>
          <a>
            <RollbackOutlined />
          </a>
        </Link>
      </li>
      <Divider type="vertical" />
      <li onClick={onClickLink}>
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
      <li onClick={onClickLink}>
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
      <li>
        <a onClick={onClickLink}>
          <VerticalAlignTopOutlined />
        </a>
      </li>
      {user?.admin && (
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
    </SlideRemoteControlWrapper>
  );
};

export default SlideRemoteControl;
