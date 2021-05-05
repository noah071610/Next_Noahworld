/* eslint-disable jsx-a11y/anchor-is-valid */
import { Divider, Input, Popover, Form, Modal, message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "../@reducers";
import styled from "styled-components";
import {
  CHANGE_NAME_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  CONFIRM_PASSWORD_REQUEST,
  CONFIRM_PASSWORD_SUCCESS,
  LOG_OUT_REQUEST,
  WITHDRWAL_REQUEST,
} from "../@reducers/user";
import useInput from "../util/useInput";
import { useRouter } from "next/dist/client/router";

const FooterDivider = styled(Divider)`
  background-color: white;
  margin: 0 1rem;
`;

function Footer() {
  const dispatch = useDispatch();
  const {
    user,
    confirmPassword,
    changePasswordDone,
    confirmPasswordError,
    changePasswordError,
    withdrawalDone,
    withdrawalError,
    changeNameDone,
    changeNameError,
  } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const userName: string = user?.name!;
  const [password, onChangePassword] = useInput("");
  const [newPassword, onChangeNewPassword] = useInput("");
  const [newName, onChangeNewName] = useInput(userName);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [changePassword, setChangePassword] = useState<boolean>(false);
  const [changeNickname, setChangeNickname] = useState<boolean>(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    dispatch({
      type: CONFIRM_PASSWORD_REQUEST,
      data: { password, user },
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setChangePassword(false);
    setChangeNickname(false);
  };

  const onSubmitChangePassword = () => {
    dispatch({
      type: CHANGE_PASSWORD_REQUEST,
      data: { newPassword, user },
    });
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  };

  const onsubmitChangeName = () => {
    dispatch({
      type: CHANGE_NAME_REQUEST,
      data: { newName, UserId: user?.id },
    });
  };

  const onSubmitWithdrawal = () => {
    dispatch({
      type: WITHDRWAL_REQUEST,
      data: user?.id,
    });
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  };

  useEffect(() => {
    if (changePasswordDone) {
      setIsModalVisible(false);
      message.success("Change your password well!");
      router.push("/");
      setChangePassword(false);
      return;
    }
    if (changePasswordError) {
      message.error("Unexpected Error! please try again or feedback to us");
      setChangePassword(false);
      return;
    }
    if (changeNameDone) {
      message.success("Change your nickname well!");
      setIsModalVisible(false);
      setChangeNickname(false);
      return;
    }
    if (changeNameError) {
      message.error("Unexpected Error! please try again or feedback to us");
      setChangeNickname(false);
      return;
    }
    if (withdrawalDone) {
      setIsModalVisible(false);
      message.success("Withdrawed. Thank you for using ! see you next time.");
      router.push("/");
      return;
    }
    if (withdrawalError) {
      message.error("Unexpected Error! please try again or feedback to us");
      return;
    }
    if (confirmPasswordError) {
      message.error("Wrong Password! please try again or feedback to us");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    changePasswordDone,
    changePasswordError,
    confirmPasswordError,
    withdrawalDone,
    withdrawalError,
    changeNameDone,
    changeNameError,
  ]);

  const social_content = (
    <ul className="blog_footer_content">
      <a href="https://github.com/noah071610" target="_blank" rel="noreferrer">
        <li>- Git</li>
      </a>
      <a href="https://www.instagram.com/salmonchobab/" target="_blank" rel="noreferrer">
        <li>- Instagram</li>
      </a>
    </ul>
  );
  const info_content = (
    <ul className="blog_footer_content">
      <a
        onClick={() => {
          if (!user) {
            message.error("Only for user who signed in.");
            return;
          }
          showModal();
          setChangePassword(false);
        }}
      >
        <li>- Withdrawal</li>
      </a>
      <a
        onClick={() => {
          if (!user) {
            message.error("Only for user who signed in.");
            return;
          }
          if (user.googleId) {
            message.error("Only for user who signed up with home-page directly.");
            return;
          }
          showModal();
          setChangePassword(true);
        }}
      >
        <li>- Change Password</li>
      </a>
      <a
        onClick={() => {
          if (!user) {
            message.error("Only for user who signed in.");
            return;
          }
          showModal();
          setChangeNickname(true);
        }}
      >
        <li>- Change Nickname</li>
      </a>
    </ul>
  );
  const quickview_content = (
    <ul className="blog_footer_content">
      <Link href={"/"}>
        <a>
          <li onClick={() => window.scrollTo({ top: 0 })}>- Home</li>
        </a>
      </Link>
      <Link href={"/tech"}>
        <a>
          <li onClick={() => window.scrollTo({ top: 0 })}>- Info Tech</li>
        </a>
      </Link>
      <Link href={"/daily"}>
        <a>
          <li onClick={() => window.scrollTo({ top: 0 })}>- Daily</li>
        </a>
      </Link>
      <Link href={"/class"}>
        <a>
          <li onClick={() => window.scrollTo({ top: 0 })}>- Korean Class</li>
        </a>
      </Link>
    </ul>
  );

  useEffect(() => {
    if (user?.googleId) {
      dispatch({
        type: CONFIRM_PASSWORD_SUCCESS,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  return (
    <footer className="blog_footer">
      <div className="blog_footer_wrapper">
        <div>ⓒ 2021, Jang Hyun Soo. All Rights Resrved.</div>
        <ul className="blog_footer_list">
          <li onClick={() => window.scrollTo({ top: 0 })}>
            <Link href={"/portfolio"}>
              <a>Portfolio</a>
            </Link>
          </li>
          <FooterDivider type="vertical" />
          <Popover content={quickview_content}>
            <li>
              <a>Quick view</a>
            </li>
          </Popover>
          <FooterDivider type="vertical" />
          <Popover content={social_content}>
            <li>
              <a>Social Media</a>
            </li>
          </Popover>
          <FooterDivider type="vertical" />
          <Popover placement="topRight" content={info_content}>
            <li>
              <a>Infomation</a>
            </li>
          </Popover>
        </ul>
      </div>

      <Modal
        title="User Infomation"
        visible={isModalVisible}
        onOk={
          confirmPassword
            ? changePassword
              ? onSubmitChangePassword
              : changeNickname
              ? onsubmitChangeName
              : onSubmitWithdrawal
            : handleOk
        }
        onCancel={handleCancel}
      >
        {confirmPassword ? (
          changePassword ? (
            <Form name="nest-messages" initialValues={{ remember: false }}>
              <p>Please write your new password.</p>
              <br />
              <Form.Item name="Password" rules={[{ required: true }]}>
                <Input.Password value={newPassword} onChange={onChangeNewPassword} />
              </Form.Item>
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
            </Form>
          ) : changeNickname ? (
            <Form name="nest-messages">
              <p>Please write your new nickname.</p>
              <br />
              <Form.Item name="name" rules={[{ required: true }]}>
                <Input value={newName} onChange={onChangeNewName} />
              </Form.Item>
            </Form>
          ) : (
            <h2>Would you really like to withdraw? 😿</h2>
          )
        ) : (
          <>
            <p>Confirm your password.</p>
            <br />
            <Input.Password value={password} onChange={onChangePassword} />
          </>
        )}
      </Modal>
    </footer>
  );
}

export default Footer;
