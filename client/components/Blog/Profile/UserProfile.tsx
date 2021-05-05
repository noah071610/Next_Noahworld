/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { CameraFilled } from "@ant-design/icons";
import { useCallback, useEffect, useRef, useState } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useDispatch, useSelector } from "react-redux";
import { Col, Input, message, Row } from "antd";
import Slider from "react-slick";
import Modal from "antd/lib/modal/Modal";
import styled from "styled-components";
import { BLUE_COLOR } from "../../../config";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RootState } from "../../../@reducers";
import { ADD_ICON_REQUEST, REMOVE_ICON_REQUEST } from "../../../@reducers/user";
import { LOAD_RECENT_POSTS_REQUEST } from "../../../@reducers/post";
import useInput from "../../../util/useInput";
import { WelcomeTable } from "./WelcomeTable";
import { ViewTable } from "./ViewTable";
import { CommentTable } from "./CommentTable";

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

function UserProfile() {
  const { user, addIconDone, removeIconDone } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [url, onChangeUrl, setUrl] = useInput("");
  const [upImg, setUpImg] = useState<ArrayBuffer | string | null>(null);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [completedCrop, setCompletedCrop] = useState<any>(null);
  const [blob, setBlob] = useState<Blob | null>(null);
  const [crop, setCrop] = useState<Crop>({ unit: "px", width: 200, aspect: 1 / 1 });

  useEffect(() => {
    if (addIconDone) {
      message.success("Successfully added your own icon 👍");
    }
    if (removeIconDone) {
      message.success("Successfully removed your icon.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addIconDone, removeIconDone]);

  const handleOk = () => {
    const form = new FormData();
    form.append("image", blob!);
    form.append("id", String(user?.id));
    dispatch({
      type: ADD_ICON_REQUEST,
      data: form,
    });
    setIsModalVisible(false);
    setUrl("");
    setUpImg(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setUrl("");
    setUpImg(null);
  };

  useEffect(() => {
    if (!user) {
      return;
    }
    dispatch({
      type: LOAD_RECENT_POSTS_REQUEST,
      data: user,
    });
  }, [dispatch, user]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleImgError = (e: React.SyntheticEvent) => {
    (e.target as HTMLImageElement).src = "/images/blog/default-user.png";
  };

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image: any = imgRef.current;
    const canvas: any = previewCanvasRef.current;
    const crop: any = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
    new Promise(() => {
      canvas.toBlob(
        (blob: Blob) => {
          setBlob(blob);
        },
        "image/png",
        1
      );
    });
  }, [completedCrop]);

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

      <Modal
        title="Icon Upload 🖼️"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>Set icon from Local storage</h3>
        <input
          style={{ marginBottom: "1.5rem" }}
          type="file"
          accept="image/*"
          disabled={url ? true : false}
          onChange={onSelectFile}
        />
        <h3>Set icon by using URL</h3>
        <Input
          disabled={upImg ? true : false}
          value={url}
          onChange={onChangeUrl}
          placeholder="https://"
        />

        {(url || upImg) && (
          <>
            <h3>Crop the image for icon size.</h3>
            <ReactCrop
              crossorigin="anonymous"
              style={{ width: "100%" }}
              imageStyle={{ width: "100%" }}
              src={upImg || url}
              onImageLoaded={onLoad}
              crop={crop}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
            />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <canvas
                ref={previewCanvasRef}
                style={{
                  width: "50%",
                  height: "50%",
                  borderRadius: "50%",
                }}
              />
            </div>
            <h2 style={{ textAlign: "center" }}>{user?.name}</h2>
          </>
        )}
      </Modal>
    </>
  );
}

export default UserProfile;
