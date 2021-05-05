/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "antd/lib/form/Form";
import { Button, Radio, Modal, Input, message } from "antd";
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
import UserProfile from "../components/Blog/Profile/UserProfile";
import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";

const PostEditor = dynamic(() => import("../components/Blog/Editor"), { ssr: false });

function Admin() {
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
  const [content, , setContent] = useInput("");
  const [radioValue, setRadioValue] = useState("tech");
  const [typeValue, setTypeValue] = useState("word");
  const [password, onChangePassword] = useInput("");
  const [thumbnail, onChangeThumbnail, setthumbnail] = useInput("");
  const [title, onChangeTitle, setTitle] = useInput("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [PostId, setPostId] = useState<number | null>(null);
  const [tags, setTags] = useState<HashtagsInter[]>();

  const [question, onChangeQuestion] = useInput("");
  const [answer, onChangeAnswer] = useInput("");
  const [quizForm, setQuizForm] = useState(false);
  const editorRef = useRef<any>(null);
  const imageInput = useRef<HTMLInputElement | null>(null);

  // const onClickImageUpload = useCallback(() => {
  //   imageInput.current.click();
  // }, []);

  const onChangeImages = useCallback((e) => {
    const imageFormData = new FormData();
    imageFormData.append("image", e.target.files[0]);
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  //==authorize==
  useEffect(() => {
    if (!user || !user.admin || user.id !== 1) {
      router.back();
    }
  }, []);

  useEffect(() => {
    dispatch({
      type: UPLOAD_IMAGES_CLEAR,
    });
  }, []);

  useEffect(() => {
    if (postEditOn && post) {
      setContent(post.content);
      setTitle(post.title);
      setthumbnail(post.thumbnail);
      setRadioValue(post.category);
      setPostId(post.id);
      setTags(post?.HashTags);
    } else {
      dispatch({
        type: POST_EDIT_OFF,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showModal = useCallback(() => {
    setIsModalVisible(true);
    setContent(editorRef.current.getInstance().getHtml());
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
      category: radioValue,
      content,
      UserId: user?.id,
      password,
      PostId,
      tags,
    };
    if (post && postEditOn) {
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
    if (question && answer && quizForm) {
      dispatch({
        type: ADD_QUIZ_REQUEST,
        data: { type: typeValue, question, answer, password, UserId: user?.id },
      });
    }
    setIsModalVisible(false);
    setQuizForm(false);
  }, [
    typeValue,
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
    radioValue,
  ]);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
    setQuizForm(false);
  }, []);

  // function uploadImage(blob) {
  //   let formData = new FormData();
  //   formData.append("image", blob);
  //   console.log(formData);
  // }

  useEffect(() => {
    if (uploadPostImageDone) {
      editorRef.current
        .getInstance()
        .setHtml(
          editorRef.current.getInstance().getHtml() +
            `<img src="${postImagePath}" alt="post_image" />`
        );
    }
  }, [uploadPostImageDone]);

  useEffect(() => {
    if (addPostDone || editPostDone) {
      message.success("Post added or Edited");
      router.push("/");
      editorRef?.current?.getInstance().setHtml("");
    }
  }, [addPostDone, editPostDone]);
  return (
    <>
      <UserProfile />
      <Form onFinish={showModal} style={{ margin: "3rem 0" }}>
        <h2>ADD POST</h2>
        <h4>Title</h4>
        <Input value={title} onChange={onChangeTitle} style={{ marginBottom: "1rem" }} />
        <h4>Thumbnail</h4>
        <div style={{ display: "flex" }}>
          <Input
            value={thumbnail}
            onChange={onChangeThumbnail}
            placeholder="http://"
            disabled={uploadImagesDone ? true : false}
            style={{ marginBottom: "1rem", width: "50%" }}
          />{" "}
          <span style={{ margin: "0 1rem" }}>or</span>
          <input type="file" name="image" multiple ref={imageInput} onChange={onChangeImages} />
          {uploadImagesDone ? (
            <button
              style={{ marginBottom: "1rem", width: "20%" }}
              className="public_btn"
              onClick={() => {
                dispatch({
                  type: UPLOAD_IMAGES_CLEAR,
                });
                setthumbnail("");
              }}
            >
              CALCLE IMAGE
            </button>
          ) : null}
        </div>
        <PostEditor post={post} editorRef={editorRef} />
        <div style={{ display: "flex", alignItems: "center", margin: "1rem 0" }}>
          <Radio.Group
            style={{ width: "50%" }}
            onChange={(e) => setRadioValue(e.target.value)}
            value={radioValue}
          >
            <Radio value="tech">Infomation Technology</Radio>
            <Radio value="daily">Daily</Radio>
            <Radio value="class">Korean Class</Radio>
            <Radio value="culture">Korean Culture</Radio>
          </Radio.Group>
          {postEditOn ? (
            <>
              <Button type="primary" htmlType="submit" style={{ width: "25%" }}>
                EDIT
              </Button>
              <Button
                onClick={() => {
                  dispatch({ type: POST_EDIT_ON });
                  router.push("/");
                }}
                style={{ width: "25%" }}
              >
                CANCEL
              </Button>
            </>
          ) : (
            <Button htmlType="submit" style={{ width: "50%" }}>
              UPLOAD
            </Button>
          )}
        </div>
      </Form>
      <div style={{ display: "flex" }}>
        <div style={{ width: "100%" }}>
          <h2>日本語講座作成</h2>
          <h4>設問　Question</h4>
          <Input value={question} onChange={onChangeQuestion} />
          <h4 style={{ marginTop: "1rem" }}>答え　Answer</h4>
          <Input.TextArea value={answer} onChange={onChangeAnswer} />
          <Radio.Group
            style={{ width: "50%" }}
            onChange={(e) => setTypeValue(e.target.value)}
            value={typeValue}
          >
            <Radio value="word">Word</Radio>
            <Radio value="quiz">Quiz</Radio>
          </Radio.Group>
          <Button
            onClick={() => {
              showModal();
              setQuizForm(true);
            }}
            style={{ width: "50%", marginTop: "1rem" }}
          >
            Submit
          </Button>
        </div>
      </div>
      <Modal
        title="Please Enter Admin password"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          This fucntion is for ADMIN only. If you are not a administrator, please go back and
          feedback to us. Thank you for your cooperatation.
        </p>
        <p>
          이 기능은 관리자 전용입니다. 예기치 못하게 오셨을경우 피드백 주시면 정말 감사하겠습니다.
          협력해주셔서 감사합니다.
        </p>
        <p>
          この機能は管理者専用でございます、何が問題が発生した場合は管理者に直接ご連絡して頂ければ幸いだと思います。
        </p>
        <br />
        <Input.Password value={password} onChange={onChangePassword} />
      </Modal>
    </>
  );
}

export default Admin;
