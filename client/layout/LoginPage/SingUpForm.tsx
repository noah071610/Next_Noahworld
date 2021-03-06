import React, { FC, memo, useCallback, useEffect } from "react";
import { Form, Input, Button, Divider, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../@reducers";
import { SIGN_UP_REQUEST } from "../../@reducers/user";

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${name} is required!",
  types: {
    email: "This is not a valid ${name}!",
  },
  number: {
    range: "${name} must be under the ${min} strings",
  },
};

interface SignUpProps {
  setOnSignUpPage: (type: boolean) => void;
}

interface SignUpForm {
  Name: string;
  Email: string;
  Password: string;
}

const BlogSignUpForm: FC<SignUpProps> = memo(({ setOnSignUpPage }) => {
  const dispatch = useDispatch();
  const { signUpError, signUpDone } = useSelector((state: RootState) => state.user);

  const onFinish = useCallback((values: SignUpForm) => {
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email: values.Email, name: values.Name, password: values.Password },
    });
  }, []);

  useEffect(() => {
    if (signUpError) {
      message.error("Unexpected Erorr! Please try again or feedback to us");
    }
  }, [signUpError]);

  useEffect(() => {
    if (signUpDone) {
      message.success("Log In Success! Enjoy your time.");
      setOnSignUpPage(false);
    }
  }, [signUpDone]);
  return (
    <>
      <div className="login-title">
        <h1>
          Sign Up now!{" "}
          <img
            alt="signup_icon"
            src="https://img.icons8.com/bubbles/100/000000/add-user-male.png"
          />
        </h1>
        <h3>Enjoy various Contents for free!</h3>
      </div>
      <Form
        validateMessages={validateMessages}
        name="nest-messages"
        initialValues={{ remember: false }}
        onFinish={onFinish}
      >
        <Divider orientation="left">E-mail</Divider>
        <Form.Item name="Email" rules={[{ required: true, type: "email" }]}>
          <Input />
        </Form.Item>
        <Divider orientation="left">User name</Divider>
        <Form.Item name="Name" rules={[{ required: true, max: 15 }]}>
          <Input value="ddd" />
        </Form.Item>
        <Divider orientation="left">Password</Divider>
        <Form.Item name="Password" rules={[{ required: true, min: 9 }]}>
          <Input.Password />
        </Form.Item>
        <Divider orientation="left">Confirm Password</Divider>
        <Form.Item
          name="Confirm"
          dependencies={["Password"]}
          hasFeedback
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("Password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" style={{ width: "50%", marginTop: "1.5rem" }} htmlType="submit">
            Sign up
          </Button>
          <Button onClick={() => setOnSignUpPage(false)} style={{ width: "50%" }}>
            Go back login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
});

export default BlogSignUpForm;
