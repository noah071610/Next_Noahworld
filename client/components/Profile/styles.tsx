import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CameraFilled } from "@ant-design/icons";
import tw from "twin.macro";
import { BLUE_COLOR } from "../../config";
import { GRID_STYLE } from "../../styles/emotion";

export const ProfileWrapper = styled.div`
  ${tw`absolute right-0 top-full p-8 bg-white z-30 shadow-md`}
  border:1px solid rgba(0,0,0,0.1);
  width: 300px;
  .icon-wrapper {
    ${tw`relative w-24 h-24 mx-auto mb-4`}
    img {
      ${tw`w-full h-full rounded-full shadow-lg`}
    }
  }
  h1 {
    ${tw`text-base text-center`}
  }
  ul {
    ${GRID_STYLE("1rem", "1fr 1fr 1fr")};
    li {
      h2 {
        ${tw`text-sm m-0 text-center`}
      }
      span {
        ${tw`mt-2 block text-center`}
        color:${BLUE_COLOR};
      }
    }
  }
  .admin-link {
    ${tw`text-center mt-8`}
  }
`;

export const Camera = styled(CameraFilled)`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1.5rem;
  float: right;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
    color: ${BLUE_COLOR};
  }
`;
export const Close = styled(FontAwesomeIcon)`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 1.5rem;
  float: right;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
    color: ${BLUE_COLOR};
  }
`;
