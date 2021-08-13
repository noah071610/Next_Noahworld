/* eslint-disable jsx-a11y/anchor-is-valid */
import { Divider, Popover, message } from "antd";
import React, { FC, memo, useCallback, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { RootState } from "../@reducers";
import InfoModal from "./Profile/InfoModal";

const FooterDivider = styled(Divider)`
  background-color: white;
  margin: 0 1rem;
`;

const Footer: FC = memo(() => {
  const { user } = useSelector((state: RootState) => state.user);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [changePassword, setChangePassword] = useState<boolean>(false);
  const [changeNickname, setChangeNickname] = useState<boolean>(false);

  const showModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const onClickList = useCallback(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const onClickNicknameBtn = useCallback(() => {
    if (!user) {
      message.error("Only for user who signed in.");
      return;
    }
    showModal();
    setChangeNickname(true);
  }, []);

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
      <a onClick={onClickNicknameBtn}>
        <li>- Change Nickname</li>
      </a>
    </ul>
  );
  const quickview_content = (
    <ul className="blog_footer_content">
      <Link href={"/"}>
        <a>
          <li onClick={onClickList}>- Home</li>
        </a>
      </Link>
      <Link href={"/tech"}>
        <a>
          <li onClick={onClickList}>- Info Tech</li>
        </a>
      </Link>
      <Link href={"/daily"}>
        <a>
          <li onClick={onClickList}>- Daily</li>
        </a>
      </Link>
      <Link href={"/class"}>
        <a>
          <li onClick={onClickList}>- Korean Class</li>
        </a>
      </Link>
    </ul>
  );

  return (
    <footer className="blog_footer">
      <div className="blog_footer_wrapper">
        <div>ⓒ 2021, Jang Hyun Soo. All Rights Resrved.</div>
        <ul className="blog_footer_list">
          <li onClick={onClickList}>
            <a href="http://JShyunsoo.com" target="_blank" rel="noreferrer">
              Portfolio
            </a>
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
      <InfoModal
        setIsModalVisible={setIsModalVisible}
        setChangePassword={setChangePassword}
        setChangeNickname={setChangeNickname}
        isModalVisible={isModalVisible}
        changePassword={changePassword}
        changeNickname={changeNickname}
      />
    </footer>
  );
});

export default memo(Footer);
