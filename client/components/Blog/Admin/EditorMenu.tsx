import React, { FC, memo } from "react";
import { Button, Radio } from "antd";
import { POST_EDIT_ON } from "../../../@reducers/blog";
import { useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { css } from "@emotion/react";

const EditorMenuWrapper = css`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

interface EditorMenu {
  postValue: string;
  setPostValue: (e: string) => void;
  postEditOn: boolean;
}

const EditorMenu: FC<EditorMenu> = memo(({ postEditOn, postValue, setPostValue }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div css={EditorMenuWrapper}>
      <Radio.Group
        style={{ width: "50%" }}
        onChange={(e) => setPostValue(e.target.value)}
        value={postValue}
      >
        <Radio value="tech">Infomation Technology</Radio>
        <Radio value="daily">Daily</Radio>
        <Radio value="class">Korean Class</Radio>
        <Radio value="culture">Korean Culture</Radio>
      </Radio.Group>
      {postEditOn ? (
        <>
          <Button type="primary" htmlType="submit" style={{ width: "25%" }}>
            EDIT
          </Button>
          <Button
            onClick={() => {
              dispatch({ type: POST_EDIT_ON });
              router.push("/");
            }}
            style={{ width: "25%" }}
          >
            CANCEL
          </Button>
        </>
      ) : (
        <Button htmlType="submit" style={{ width: "50%" }}>
          UPLOAD
        </Button>
      )}
    </div>
  );
});

export default memo(EditorMenu);
