/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
import { useDispatch, useSelector } from "react-redux";
import { Divider, message } from "antd";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../@reducers";
import { REMOVE_ICON_REQUEST } from "../../@reducers/user";
import CropImageModal from "../Modal/CropImageModal";
import { Camera, Close, ProfileWrapper } from "./styles";
import Link from "next/link";
import { handleImgError } from "../../util/errorHandler";
import { DEFAULT_USER_ICON } from "../../config";

const Profile = ({ isMobile }: { isMobile?: boolean }) => {
  const dispatch = useDispatch();
  const { user, addIconDone, removeIconDone } = useSelector((state: RootState) => state.user);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  useEffect(() => {
    if (addIconDone) {
      message.success("Successfully added your own icon 👍");
    }
    if (removeIconDone) {
      message.success("Successfully removed your icon.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addIconDone, removeIconDone]);

  return (
    <ProfileWrapper style={isMobile ? { width: "100%", border: "none" } : {}}>
      <div className="icon-wrapper">
        <img
          src={user?.icon.replace(/\/thumb\//, "/original/") || DEFAULT_USER_ICON}
          onError={handleImgError}
          alt="profile_img"
        />
        {user?.icon === "/images/blog/default-user.png" ? (
          <Camera onClick={() => setIsModalVisible(true)} />
        ) : (
          <Close
            onClick={() =>
              dispatch({
                type: REMOVE_ICON_REQUEST,
                data: user.id,
              })
            }
            icon={faTrashAlt}
          />
        )}
      </div>
      <h1>
        Welcome&nbsp;
        {user && user.name}&nbsp;😄
      </h1>
      <Divider />
      <ul>
        <li>
          <h2>Comments</h2>
          <span>{user?.Comments ? user.Comments.length : 0}</span>
        </li>
        <li>
          <h2>Likes</h2>
          <span>{user?.PostLiked ? user.PostLiked.length : 0}</span>
        </li>
        <li>
          <h2>Posts</h2>
          <span>{user?.Posts ? user.Posts.length : 0}</span>
        </li>
      </ul>
      {user?.id === 1 && user.admin && (
        <div className="admin-link">
          <Link href="/admin">
            <a>Administor Here!</a>
          </Link>
        </div>
      )}
      <CropImageModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        user={user}
      />
    </ProfileWrapper>
  );
};

export default Profile;
