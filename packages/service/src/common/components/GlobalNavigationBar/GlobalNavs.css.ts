import { css } from "@emotion/react";
import { theme } from "@watermelon-clap/core";

export const navsContainerStyles = css`
  display: flex;
  justify-content: right;
  align-items: center;
  flex: 1;
  width: 100%;
  justify-content: space-around;
  flex-grow: 0.6;
`;

export const nLogoStyles = css`
  width: 32px;
  height: 14px;
`;

export const linkStyles = css`
  color: ${theme.color.white};
  ${theme.font.preB16}
  text-decoration: none;
  display: inline-flex;
  gap: 4px;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(1px);
  }
`;
