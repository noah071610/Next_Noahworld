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
import { POST_EDIT_OFF, POST_EDIT_ON, ADD_QUIZ_REQUEST } from "../@reducers/blog";
import { RootState } from "../@reducers";
import { HashtagsInter } from "../@reducers/@reducerTypes";
import useInput from "../util/useInput";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import AdminModal from "../components/Admin/AdminModal";
import EditorMenu from "../components/Admin/EditorMenu";
import styled from "@emotion/styled";
import { Button, Input, message, Radio } from "antd";
import UserProfile from "../components/Profile/UserProfile";

const PostEditor = dynamic(() => import("../components/Admin/Editor"), { ssr: false });

const QuizForm = styled.div`
  display: flex;
  div {
    width: 100%;
    h4 {
      margin-top: 1rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    button {
      width: 50%;
      margin-top: 1rem;
    }
  }
`;

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
  const [content, onChangeContent, setContent] = useInput(null);
  const [thumbnail, onChangeThumbnail, setthumbnail] = useInput("");
  const [title, onChangeTitle, setTitle] = useInput("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [PostId, setPostId] = useState<number | null>(null);
  const [tags, setTags] = useState<HashtagsInter[]>();
  const [password, onChangePassword] = useInput("");
  const [question, onChangeQuestion] = useInput("");
  const [answer, onChangeAnswer] = useInput("");
  const [postValue, setPostValue] = useState("tech");
  const [classValue, setClassValue] = useState("word");
  const [quizForm, setQuizForm] = useState(false);
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

  const showEditorModal = useCallback(() => {
    setIsModalVisible(true);
    setContent(editorRef.current.getInstance().getHTML());
  }, [editorRef]);

  const showQuizModal = useCallback(() => {
    setIsModalVisible(true);
    setQuizForm(true);
  }, []);

  const handleOk = useCallback(() => {
    if (quizForm) {
      if (question === "") {
        message.info("Please Write down question");
        return;
      }
      if (answer === "") {
        message.info("Please Write down answer");
        return;
      }
    } else {
      if (content === "") {
        message.info("Please Write down contents");
        return;
      }
      if (title === "") {
        message.info("Please Write down title");
        return;
      }
    }
    let data = {
      thumbnail,
      title,
      imagePath,
      category: postValue,
      content,
      UserId: user?.id,
      password,
      PostId,
      tags,
    };
    if (content && !postEditOn && !quizForm) {
      dispatch({
        type: ADD_POST_REQUEST,
        data,
      });
    }
    if (content && postEditOn && !quizForm) {
      dispatch({
        type: EDIT_POST_REQUEST,
        data,
      });
      dispatch({
        type: POST_EDIT_ON,
      });
    }
    if (!content && !postEditOn && quizForm) {
      dispatch({
        type: ADD_QUIZ_REQUEST,
        data: { type: classValue, question, answer, password, UserId: user?.id },
      });
    }
    setIsModalVisible(false);
    setQuizForm(false);
  }, [
    classValue,
    postEditOn,
    question,
    answer,
    password,
    user?.id,
    content,
    title,
    imagePath,
    thumbnail,
    PostId,
    tags,
    postValue,
    quizForm,
  ]);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
    setQuizForm(false);
  }, []);

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
      router.push("/");
      editorRef?.current?.getInstance().setHTML("");
    }
  }, [addPostDone, editPostDone]);
  return (
    <>
      <UserProfile />
      <PostForm onFinish={showEditorModal}>
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
      <QuizForm>
        <div>
          <h2>日本語講座作成</h2>
          <h4>設問　Question</h4>
          <Input value={question} onChange={onChangeQuestion} />
          <h4>答え　Answer</h4>
          <Input.TextArea value={answer} onChange={onChangeAnswer} />
          <Radio.Group
            style={{ width: "50%" }}
            onChange={(e) => setClassValue(e.target.value)}
            value={classValue}
          >
            <Radio value="word">Word</Radio>
            <Radio value="quiz">Quiz</Radio>
          </Radio.Group>
          <Button onClick={showQuizModal}>Submit</Button>
        </div>
      </QuizForm>
      <AdminModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        password={password}
        onChangePassword={onChangePassword}
      />
    </>
  );
});

export default Admin;
