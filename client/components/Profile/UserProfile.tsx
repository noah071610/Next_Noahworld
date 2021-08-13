/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { CameraFilled } from "@ant-design/icons";
import React, { FC, memo, useEffect, useState } from "react";
import "react-image-crop/dist/ReactCrop.css";
import { useDispatch, useSelector } from "react-redux";
import { Col, message, Row } from "antd";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { BLUE_COLOR } from "../../config";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RootState } from "../../@reducers";
import { REMOVE_ICON_REQUEST } from "../../@reducers/user";
import { LOAD_RECENT_POSTS_REQUEST } from "../../@reducers/post";
import { WelcomeTable } from "./WelcomeTable";
import { ViewTable } from "./ViewTable";
import { CommentTable } from "./CommentTable";
import CropImageModal from "./CropImageModal";

const Camera = styled(CameraFilled)`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 2rem;
  float: right;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
    color: ${BLUE_COLOR};
  }
`;
const Close = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 2rem;
  float: right;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
    color: ${BLUE_COLOR};
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const UserProfile: FC = memo(() => {
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

  useEffect(() => {
    if (!user) {
      return;
    }
    dispatch({
      type: LOAD_RECENT_POSTS_REQUEST,
      data: user,
    });
  }, [dispatch, user]);

  const handleImgError = (e: React.SyntheticEvent) => {
    (e.target as HTMLImageElement).src = "/images/blog/default-user.png";
  };

  return (
    <>
      {user && (
        <>
          <Row className={"blog_header_profile"}>
            <Col style={{ paddingRight: "1rem", marginBottom: "1.5rem" }} xs={24} lg={6}>
              <div
                style={{
                  position: "relative",
                  width: "200px",
                  height: "200px",
                  margin: "0 auto",
                }}
              >
                <img
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    boxShadow: "4px 8px 21px 1px rgba(0, 0, 0, 0.15)",
                  }}
                  src={user?.icon.replace(/\/thumb\//, "/original/")}
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
            </Col>
            <WelcomeTable visible={false} />
            <ViewTable visible={false} />
            <CommentTable visible={false} />
          </Row>
          <Slider className="profile_table" {...settings}>
            <WelcomeTable visible={true} />
            <ViewTable visible={true} />
            <CommentTable visible={true} />
          </Slider>
        </>
      )}
      <CropImageModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        user={user}
      />
    </>
  );
});

export default memo(UserProfile);
