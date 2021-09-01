/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "antd/lib/form/Form";
import {
  ADD_POST_REQUEST,
  EDIT_POST_REQUEST,
  UPLOAD_IMAGES_CLEAR,
  UPLOAD_IMAGES_REQUEST,
} from "../@reducers/post";
import { POST_EDIT_OFF, POST_EDIT_ON } from "../@reducers/blog";
import { RootState } from "../@reducers";
import { HashtagsInter } from "../@reducers/@reducerTypes";
import useInput from "../util/useInput";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import EditorMenu from "../components/Admin/EditorMenu";
import styled from "@emotion/styled";
import { Input, message } from "antd";
import UserProfile from "../components/Profile/UserProfile";

const PostEditor = dynamic(() => import("../components/Admin/Editor"), { ssr: false });

const PostForm = styled(Form)`
  margin: 3rem 0;
  .form_title {
    margin-bottom: 1rem;
  }
  h4 {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .editor_title {
    display: flex;
    .form_image {
      margin-bottom: 1rem;
      width: 50%;
    }
    span {
      margin: 0 1rem;
    }
    button {
      margin-bottom: 1rem;
      width: 20%;
    }
  }
`;

const Admin = memo(() => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const { postEditOn } = useSelector((state: RootState) => state.blog);
  const {
    post,
    uploadImagesDone,
    imagePath,
    postImagePath,
    uploadPostImageDone,
    addPostDone,
    editPostDone,
  } = useSelector((state: RootState) => state.post);
  const [content, _, setContent] = useInput(null);
  const [thumbnail, onChangeThumbnail, setthumbnail] = useInput("");
  const [title, onChangeTitle, setTitle] = useInput("");
  const [PostId, setPostId] = useState<number | null>(null);
  const [tags, setTags] = useState<HashtagsInter[]>();
  const [postValue, setPostValue] = useState("tech");
  const editorRef = useRef<any>(null);
  const imageInput = useRef<HTMLInputElement | null>(null);

  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    imageFormData.append("image", e.target.files[0]);
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onFinishPost = useCallback(() => {
    setContent(editorRef.current.getInstance().getHTML());
    if (content === "" || content.trim() === "") {
      message.info("Please Write down contents");
      return;
    }
    if (title === "" || title.trim() === "") {
      message.info("Please Write down title");
      return;
    }
    let data = {
      thumbnail,
      title,
      imagePath,
      category: postValue,
      content,
      UserId: user?.id,
      PostId,
      tags,
    };
    if (postEditOn) {
      dispatch({
        type: EDIT_POST_REQUEST,
        data,
      });
      dispatch({
        type: POST_EDIT_ON,
      });
    } else {
      dispatch({
        type: ADD_POST_REQUEST,
        data,
      });
    }
  }, [
    postEditOn,
    user?.id,
    content,
    title,
    imagePath,
    thumbnail,
    PostId,
    tags,
    postValue,
    editorRef,
  ]);

  const onClickUploadImage = useCallback(() => {
    dispatch({
      type: UPLOAD_IMAGES_CLEAR,
    });
    setthumbnail("");
  }, []);

  useEffect(() => {
    if (!user || !user.admin || user.id !== 1) {
      router.back();
    }
    dispatch({
      type: UPLOAD_IMAGES_CLEAR,
    });
    if (postEditOn && post) {
      setContent(post.content);
      setTitle(post.title);
      setthumbnail(post.thumbnail);
      setPostValue(post.category);
      setPostId(post.id);
      setTags(post?.Hashtags);
    } else {
      dispatch({
        type: POST_EDIT_OFF,
      });
    }
  }, [user, post]);

  useEffect(() => {
    if (uploadPostImageDone) {
      editorRef.current
        .getInstance()
        .setHTML(
          editorRef.current.getInstance().getHTML() +
            `<img src="${postImagePath}" alt="post_image" />`
        );
    }
  }, [uploadPostImageDone]);

  useEffect(() => {
    if (addPostDone || editPostDone) {
      message.success("Post added or Edited");
      router.push(`/tech`);
      editorRef?.current?.getInstance().setHTML("");
    }
  }, [addPostDone, editPostDone]);
  return (
    <>
      <UserProfile />
      <PostForm onFinish={onFinishPost}>
        <h2>ADD POST</h2>
        <h4>Title</h4>
        <Input value={title} onChange={onChangeTitle} className="form_title" />
        <h4>Thumbnail</h4>
        <div className="editor_title">
          <Input
            value={thumbnail}
            onChange={onChangeThumbnail}
            placeholder="http://"
            disabled={uploadImagesDone ? true : false}
            className="form_image"
          />{" "}
          <span>or</span>
          <input type="file" name="image" multiple ref={imageInput} onChange={onChangeImages} />
          {uploadImagesDone ? (
            <button className="public_btn" onClick={onClickUploadImage}>
              CALCLE IMAGE
            </button>
          ) : null}
        </div>
        <PostEditor post={post} editorRef={editorRef} />
        <EditorMenu postEditOn={postEditOn} postValue={postValue} setPostValue={setPostValue} />
      </PostForm>
    </>
  );
});

export default Admin;
