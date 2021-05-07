import { Input, message, Form, Modal } from "antd";
import { useRouter } from "next/dist/client/router";
import React, { FC, memo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../@reducers";
import {
  CHANGE_NAME_REQUEST,
  CHANGE_PASSWORD_REQUEST,
  CONFIRM_PASSWORD_REQUEST,
  CONFIRM_PASSWORD_SUCCESS,
  LOG_OUT_REQUEST,
  WITHDRWAL_REQUEST,
} from "../../../@reducers/user";
import useInput from "../../../util/useInput";

interface InfoModal {
  setIsModalVisible: (e: boolean) => void;
  setChangePassword: (e: boolean) => void;
  setChangeNickname: (e: boolean) => void;
  isModalVisible: boolean;
  changePassword: boolean;
  changeNickname: boolean;
}

const InfoModal: FC<InfoModal> = memo(
  ({
    setIsModalVisible,
    setChangePassword,
    setChangeNickname,
    isModalVisible,
    changePassword,
    changeNickname,
  }) => {
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
    const userName: string = user?.name;

    const [password, onChangePassword] = useInput("");
    const [newPassword, onChangeNewPassword] = useInput("");
    const [newName, onChangeNewName] = useInput(userName);

    useEffect(() => {
      if (user?.googleId) {
        dispatch({
          type: CONFIRM_PASSWORD_SUCCESS,
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    useEffect(() => {
      if (changePasswordDone) {
        message.success("Change your password well!");
        router.push("/");
        setIsModalVisible(false);
        setChangePassword(false);
        return;
      }
      if (changeNameDone) {
        message.success("Change your nickname well!");
        setIsModalVisible(false);
        setChangeNickname(false);
        return;
      }
      if (withdrawalDone) {
        setIsModalVisible(false);
        message.success("Withdrawed. Thank you for using ! see you next time.");
        router.push("/");
        return;
      }
      if (changePasswordError || changeNameError || withdrawalError) {
        message.error("Unexpected Error! please try again or feedback to us");
        setChangePassword(false);
        setChangeNickname(false);
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
    const handleOk = useCallback(() => {
      dispatch({
        type: CONFIRM_PASSWORD_REQUEST,
        data: { password, user },
      });
    }, [password, user]);

    const handleCancel = useCallback(() => {
      setIsModalVisible(false);
      setChangePassword(false);
      setChangeNickname(false);
    }, []);

    const onSubmitChangePassword = useCallback(() => {
      dispatch({
        type: CHANGE_PASSWORD_REQUEST,
        data: { newPassword, user },
      });
      dispatch({
        type: LOG_OUT_REQUEST,
      });
    }, [newPassword, user]);

    const onsubmitChangeName = useCallback(() => {
      dispatch({
        type: CHANGE_NAME_REQUEST,
        data: { newName, UserId: user?.id },
      });
    }, [newName, user]);

    const onSubmitWithdrawal = useCallback(() => {
      dispatch({
        type: WITHDRWAL_REQUEST,
        data: user?.id,
      });
      dispatch({
        type: LOG_OUT_REQUEST,
      });
    }, [user]);

    return (
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
    );
  }
);

export default memo(InfoModal);
