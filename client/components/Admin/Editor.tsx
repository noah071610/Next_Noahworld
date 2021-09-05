import React, { useCallback, useEffect, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import { useDispatch, useSelector } from "react-redux";
import { UPLOAD_POST_IMAGE_REQUEST } from "../../@reducers/post";
import { RootState } from "../../@reducers";
import Prism from "prismjs";
import "@toast-ui/editor/dist/toastui-editor.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

function PostEditor({ editorRef }): JSX.Element {
  const dispatch = useDispatch();
  const { post } = useSelector((state: RootState) => state.post);
  return (
    <Editor
      placeholder="Welcome Noah!"
      height="600px"
      initialValue={post?.content}
      initialEditType="markdown"
      useCommandShortcut={true}
      usageStatistics={false}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
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
