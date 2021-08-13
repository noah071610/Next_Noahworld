import { Input } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import { useDispatch } from "react-redux";
import { UserInter } from "../../@reducers/@reducerTypes";
import { ADD_ICON_REQUEST } from "../../@reducers/user";
import useInput from "../../util/useInput";

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
    //5. blob 객체와 user id를 서버에 요청하기위해 form을 만듭니다.
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
  }, [blob, user?.id]);

  const handleCancel = useCallback(() => {
    setIsModalVisible(false);
    setUrl("");
    setUpImg(null);
  }, []);

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    //1-1. React-crop 공식문서의 내용입니다. 이미지를 로드해줍니다.
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
    //3. React-crop 공식문서의 내용입니다. canvas에 자른 이미지를 표시하는 함수입니다.
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
        //4. 자른 이미지를 Blob 객체로 바꿔 state에 저장합니다.
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
      {/* 1. Url을 이용해 아이콘을 업로드할지, file을 이용할지 선택합니다. */}
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
          {/* 2. 올린 이미지를 활용해 이미지를 자릅니다. */}
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
