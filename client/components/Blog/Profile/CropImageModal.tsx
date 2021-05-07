import { Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import { useDispatch } from "react-redux";
import { UserInter } from "../../../@reducers/@reducerTypes";
import { ADD_ICON_REQUEST } from "../../../@reducers/user";
import useInput from "../../../util/useInput";

interface CropImageModal {
  user: UserInter;
  setIsModalVisible: (e: boolean) => void;
  isModalVisible: boolean;
}

const CropImageModal: FC<CropImageModal> = memo(({ isModalVisible, setIsModalVisible, user }) => {
  const dispatch = useDispatch();
  const [url, onChangeUrl, setUrl] = useInput("");
  const [upImg, setUpImg] = useState<ArrayBuffer | string | null>(null);
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [completedCrop, setCompletedCrop] = useState<any>(null);
  const [blob, setBlob] = useState<Blob | null>(null);
  const [crop, setCrop] = useState<Crop>({ unit: "px", width: 200, aspect: 1 / 1 });

  const handleOk = useCallback(() => {
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
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false);
    setUrl("");
    setUpImg(null);
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
    <Modal title="Icon Upload 🖼️" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
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
  );
});

export default memo(CropImageModal);
