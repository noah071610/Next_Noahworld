import React, { FC, useCallback, useEffect } from "react";
import { Form, Input, Button, Divider, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { BLUE_COLOR } from "../../../config";
import { RootState } from "../../../@reducers";
import { LOG_IN_REQUEST } from "../../../@reducers/user";
import { useRouter } from "next/dist/client/router";
import { css } from "@emotion/react";

const GoogleBtn = styled.button`
  box-sizing: border-box;
  outline: none;
  width: 100%;
  background-color: white;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.15);
  border: none;
  cursor: pointer;
  div {
    width: 360px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0;
    h3 {
      transition: all 0.3s;
    }
    img {
      width: 30px;
    }
  }
  &:hover {
    h3 {
      color: ${BLUE_COLOR};
    }
  }
  @media only screen and (max-width: 576px) {
    div {
      width: 200px;
      img {
        width: 20px;
      }
      h3 {
        font-size: 0.8rem;
      }
    }
  }
`;

const GoogleLogin = css`
  margin: 0 0 0 1rem;
  font-weight: normal;
`;

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${name} is required!",
  types: {
    email: "This is not a valid ${name}!",
  },
  number: {
    range: "${name} must be upper the ${min} strings",
  },
};

interface LoginProps {
  onClickSignUp: () => void;
}

interface LoginForm {
  email: string;
  password: string;
}

const BlogLoginSection: FC<LoginProps> = ({ onClickSignUp }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { logInError, logInDone } = useSelector((state: RootState) => state.user);

  const onFinish = useCallback((values: LoginForm) => {
    dispatch({
      type: LOG_IN_REQUEST,
      data: { email: values.email, password: values.password },
    });
  }, []);

  const onFinishFailed = useCallback(() => {
    message.error("Unexpected Erorr! please try again or feedback to us");
  }, []);

  useEffect(() => {
    if (logInError) {
      message.error(logInError);
    }
  }, [logInError]);

  useEffect(() => {
    if (logInDone) {
      message.success("Log In Success! Have a nice day 😙");
      router.push("/");
    }
  }, [logInDone]);

  return (
    <>
      <div className="login_title">
        <h1>
          Login now!{" "}
          <img
            alt="login_icon"
            src="https://img.icons8.com/cute-clipart/64/000000/login-rounded-right.png"
          />
        </h1>
        <h3>Are you ready for jumping to my world?</h3>
      </div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        validateMessages={validateMessages}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Divider orientation="left">E-mail</Divider>
        <Form.Item name="email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Divider orientation="left">Password</Divider>
        <Form.Item name="password" rules={[{ required: true, min: 9 }]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" style={{ width: "50%", marginTop: "1.5rem" }} htmlType="submit">
            Login
          </Button>
          <Button onClick={onClickSignUp} style={{ width: "50%" }}>
            Sign up
          </Button>
        </Form.Item>
      </Form>
      <GoogleBtn>
        <a href="https://api.noahworld.site/auth/google">
          <div>
            <img alt="google" src="https://img.icons8.com/color/144/000000/google-logo.png" />
            <h3 css={GoogleLogin}>Sign in with Google</h3>
          </div>
        </a>
      </GoogleBtn>
    </>
  );
};

export default BlogLoginSection;
