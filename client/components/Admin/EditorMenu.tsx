import React, { FC, memo } from "react";
import { Button, Radio } from "antd";
import { useSelector } from "react-redux";
import { useRouter } from "next/dist/client/router";
import styled from "@emotion/styled";
import { FLEX_STYLE } from "../../styles/emotion";
import { RootState } from "../../@reducers";

const EditorMenuWrapper = styled.div`
  ${FLEX_STYLE("flex-start", "center")};
  margin: 1rem 0;
`;

interface EditorMenu {
  postValue: string;
  setPostValue: (e: string) => void;
}

const EditorMenu: FC<EditorMenu> = memo(({ postValue, setPostValue }) => {
  const { onEditPost } = useSelector((state: RootState) => state.post);
  const router = useRouter();
  return (
    <EditorMenuWrapper>
      <Radio.Group
        style={{ width: "50%" }}
        onChange={(e) => setPostValue(e.target.value)}
        value={postValue}
      >
        <Radio value="tech">Infomation Technology</Radio>
        <Radio value="daily">Daily</Radio>
      </Radio.Group>
      {onEditPost ? (
        <>
          <Button type="primary" htmlType="submit" style={{ width: "25%" }}>
            EDIT
          </Button>
          <Button
            onClick={() => {
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
    </EditorMenuWrapper>
  );
});

export default memo(EditorMenu);
