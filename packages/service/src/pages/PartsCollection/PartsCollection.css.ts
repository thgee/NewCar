import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core";

export const mainBg = css`
  background-image: url("images/common/main-bg.svg");
  background-size: cover;
  padding-bottom: 200px;
`;

export const pageTitle = css`
  text-align: center;
  ${theme.font.pcpB}
  font-size : calc(50px + 2vw);
  padding: 100px;
  color: ${theme.color.white};
`;
