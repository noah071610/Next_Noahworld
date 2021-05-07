import React from "react";
import { Editor } from "@toast-ui/react-editor";
import { useDispatch, useSelector } from "react-redux";
import { UPLOAD_POST_IMAGE_REQUEST } from "../../../@reducers/post";
import { RootState } from "../../../@reducers";
import colorSyntaxPlugin from "@toast-ui/editor-plugin-color-syntax";

function PostEditor({ post, editorRef }): JSX.Element {
  const dispatch = useDispatch();
  const { postEditOn } = useSelector((state: RootState) => state.blog);
  return (
    <Editor
      plugins={[colorSyntaxPlugin]}
      placeholder="Welcome Noah!"
      height="600px"
      initialValue={postEditOn && postEditOn ? post?.content : null}
      initialEditType="markdown"
      useCommandShortcut={true}
      usageStatistics={false}
      ref={editorRef}
      hooks={{
        addImageBlobHook: async (blob) => {
          const imageFormData = new FormData();
          imageFormData.append("image", blob);
          dispatch({
            type: UPLOAD_POST_IMAGE_REQUEST,
            data: imageFormData,
          });
        },
      }}
    />
  );
}

export default PostEditor;
