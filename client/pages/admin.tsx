/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "antd/lib/form/Form";
import {
  ADD_POST_REQUEST,
  EDIT_POST_REQUEST,
  SET_POST_EDIT,
  UPLOAD_THUMBNAIL_CLEAR,
  UPLOAD_THUMBNAIL_REQUEST,
} from "../@reducers/post";
import { RootState } from "../@reducers";
import useInput from "../util/useInput";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import EditorMenu from "../components/Admin/EditorMenu";
import styled from "@emotion/styled";
import { Input, message } from "antd";

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

const Admin = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const editorRef = useRef<any>(null);
  const {
    post,
    onEditPost,
    uploadThumbnailDone,
    thumbnailPath,
    postImagePath,
    uploadPostImageDone,
    addPostDone,
    editPostDone,
    postPath,
  } = useSelector((state: RootState) => state.post);
  const [thumbnail, onChangeThumbnail, setthumbnail] = useInput("");
  const [title, onChangeTitle, setTitle] = useInput("");
  const [PostId, setPostId] = useState<number | null>(null);
  const [postValue, setPostValue] = useState("tech");
  const imageInput = useRef<HTMLInputElement | null>(null);

  const onChangeFile = useCallback((e) => {
    const imageFormData = new FormData();
    imageFormData.append("image", e.target.files[0]);
    dispatch({
      type: UPLOAD_THUMBNAIL_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onFinishPost = useCallback(() => {
    if (editorRef?.current?.getInstance().getHTML() === "") {
      message.info("Please Write down contents");
      return;
    }
    if (title === "" || title.trim() === "") {
      message.info("Please Write down title");
      return;
    }
    let data = {
      thumbnail: thumbnailPath || thumbnail,
      title,
      category: postValue,
      content: editorRef?.current?.getInstance().getHTML(),
      UserId: user?.id,
      PostId,
    };
    if (onEditPost) {
      dispatch({
        type: EDIT_POST_REQUEST,
        data,
      });
    } else {
      dispatch({
        type: ADD_POST_REQUEST,
        data,
      });
    }
  }, [onEditPost, user, title, thumbnailPath, thumbnail, PostId, postValue, editorRef]);

  const onClickUploadImage = useCallback(() => {
    dispatch({
      type: UPLOAD_THUMBNAIL_CLEAR,
    });
    setthumbnail("");
  }, []);

  useEffect(() => {
    if (!user || !user.admin || user.id !== 1) {
      router.back();
    }
    if (onEditPost && post) {
      setTitle(post.title);
      setthumbnail(post.thumbnail);
      setPostValue(post.category);
      setPostId(post.id);
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
  }, [uploadPostImageDone, editorRef]);

  useEffect(() => {
    if (addPostDone) {
      message.success("Post added");
      router.push(postPath);
    }
  }, [addPostDone, postPath]);

  useEffect(() => {
    if (editPostDone) {
      message.success("Post Edited");
      router.push(`/${postValue}/post/${PostId}`);
      dispatch({
        type: SET_POST_EDIT,
        data: false,
      });
    }
  }, [postValue, PostId, editPostDone]);

  return (
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
          disabled={uploadThumbnailDone ? true : false}
          className="form_image"
        />{" "}
        <span>or</span>
        <input type="file" name="image" multiple ref={imageInput} onChange={onChangeFile} />
        {uploadThumbnailDone && (
          <button className="public_btn" onClick={onClickUploadImage}>
            CALCLE IMAGE
          </button>
        )}
      </div>
      <PostEditor editorRef={editorRef} />
      <EditorMenu postValue={postValue} setPostValue={setPostValue} />
    </PostForm>
  );
};

export default Admin;
