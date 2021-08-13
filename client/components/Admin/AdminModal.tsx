import { Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { FC } from "react";

interface ModalProps {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  password: string;
  onChangePassword: () => void;
}

const AdminModal: FC<ModalProps> = ({
  isModalVisible,
  handleOk,
  handleCancel,
  onChangePassword,
  password,
}) => {
  return (
    <Modal
      title="Please Enter Admin password"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>
        This fucntion is for ADMIN only. If you are not a administrator, please go back and feedback
        to us. Thank you for your cooperatation.
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
  );
};

export default AdminModal;
