import { css } from "@emotion/react";

export const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Noto Sans CJK KR, -apple-system, BlinkMacSystemFont, SUIT,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "AirbnbCereal_W_Bd";
    src: url("/fonts/AirbnbCereal_W_Bd.otf");
  }

  @font-face {
    font-family: "AirbnbCereal_W_Md";
    src: url("/fonts/AirbnbCereal_W_Md.otf");
  }

  @font-face {
    font-family: "Gilroy";
    src: url("/fonts/Gilroy-ExtraBold.otf");
  }

  @font-face {
    font-family: "Urbanist";
    src: url("/fonts/Urbanist-VariableFont_wght.ttf");
  }
`;
