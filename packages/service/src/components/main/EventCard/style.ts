import { css } from "@emotion/react";
import { baseStyles, theme } from "@watermelon-clap/core";

export const eventCard = (isMainEvent: boolean) => css`
  padding: 72px;
  background: ${isMainEvent ? theme.color.mainEventCardBg : theme.color.white};
  width: 552px;
  border-radius: 20px;
  text-align: center;
  white-space: pre-wrap;
  gap: 38px;
  box-shadow: 0px 0px 100px 0px rgba(255, 255, 255, 0.5);
`;

export const eventNumber = css`
  border-radius: 50%;
  background-color: ${theme.color.black};
  width: 44px;
  height: 44px;
  color: ${theme.color.white};
  margin: 0 auto;
  ${baseStyles.flex.center}
  ${theme.font.pretend.bold.body24}
`;

export const eventTitle = css`
  ${theme.font.pyeongChangPeace.bold.title};
  ${baseStyles.margin.mg12}
  font-size: 40px;
`;

export const joinButton = css`
  ${theme.font.pretend.bold.titleB38};
  width: 100%;
  height: 120px;
  border-radius: 18px;
`;
