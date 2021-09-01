import styled from "@emotion/styled";

export const SubCommentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem 0.5rem 1.5rem 2rem;
  position: relative;
  transition: all 0.2s;
  .edit_from {
    button {
      width: 20%;
    }
  }
  @media only screen and (max-width: 576px) {
    padding: 0.5rem 0 1rem 0.5rem;
    .edit_form {
      button {
        width: 50%;
      }
    }
  }
`;

export const SpeechBubble = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 90%;
  padding: 1rem 1.5rem;
  position: relative;
  border-radius: 0.5rem;
  transition: all 0.3s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:before {
    transition: all 0.3s;
    content: "";
    position: absolute;
    top: -0.5rem;
    left: 1.8rem;
    border-top: 1rem solid rgba(0, 0, 0, 0.05);
    border-right: 1rem solid transparent;
    transform: rotate(45deg);
  }
  @media only screen and (max-width: 576px) {
    padding: 1rem;
    width: 100%;
  }
`;
