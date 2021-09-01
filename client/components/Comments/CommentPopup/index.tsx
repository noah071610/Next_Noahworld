import Link from "next/link";
import React, { FC } from "react";
import { CommentPopupWrapper } from "./styles";

interface IProps {
  popup_message: string;
  setDeletePopup?: (type: boolean) => void;
  onClickRemoveComment?: () => void;
}

const CommentPopup: FC<IProps> = ({ popup_message, onClickRemoveComment, setDeletePopup }) => {
  return (
    <CommentPopupWrapper>
      <h2>{popup_message}</h2>
      {setDeletePopup ? (
        <div>
          <button onClick={onClickRemoveComment} className="popup-btn">
            YES
          </button>
          <button onClick={() => setDeletePopup(false)} className="popup-btn">
            NO
          </button>
        </div>
      ) : (
        <Link href="/login">
          <a className="popup-btn">GO TO LOGIN PAGE</a>
        </Link>
      )}
    </CommentPopupWrapper>
  );
};

export default CommentPopup;
