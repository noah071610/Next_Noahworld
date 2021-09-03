import styled from "@emotion/styled";

export const LoadingScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .bouncer {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 100px;
    height: 100px;
  }

  .bouncer div {
    width: 20px;
    height: 20px;
    background-color: #0077ff;
    border-radius: 50%;
    animation: bouncer 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite alternate;
  }

  .bouncer div:nth-child(2) {
    animation-delay: 0.1s;
    opacity: 0.8;
  }

  .bouncer div:nth-child(3) {
    animation-delay: 0.2s;
    opacity: 0.6;
  }

  .bouncer div:nth-child(4) {
    animation-delay: 0.3s;
    opacity: 0.4;
  }

  @keyframes bouncer {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-50px);
    }
  }
`;
