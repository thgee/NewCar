import { css } from "@emotion/react";
import { mobile } from "@service/common/responsive/responsive";
import { theme } from "@watermelon-clap/core";

export const partsPickBackgroundStyle = css`
  background-image: url("/images/parts/background.svg");
  background-size: cover;
  background-position: center;

  ${theme.flex.center}
  ${theme.flex.column}

  min-height: 100vh;
  padding: 0 18vw;

  ${mobile(css`
    min-height: calc(100vh - 136.5px);
    padding: 20vw 6vw;
  `)}
`;

export const partsPickButtonStyle = css`
  background-color: ${theme.color.white};
  color: ${theme.color.black};

  ${mobile(css`
    width: 80%;
    padding: 14px 10px;
  `)}
`;

export const partsPickModalContentStyle = css`
  ${theme.flex.center};
  ${theme.flex.column};
  p {
    margin: 0;
  }
`;
