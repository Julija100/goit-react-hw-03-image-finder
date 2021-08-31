import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primaryBg: "#fdfc47",
    secondaryBg: "#33ff33",
    lightBg: "#ccff99",
    primaryDarkText: "#009900",
    secondaryDarkText: "#66ff33",
    primaryLightText: "#ffff00",
    secondaryLightText: "#ffffff",
    primaryBgGradient: "linear-gradient(to right,#24fe41, #fdfc47)",
  },
  fontWeight: {
    medium: "500",
    bold: "700",
  },
  media: {
    phone: "(max-width: 320px)",
    tablet: "(max-width: 768px)",
    desktop: "(max-width: 1024px)",
  },
};

export const StyledCommon = createGlobalStyle

export const StyledBasicList = styled.ul`
  margin-top: 0;
  padding-left: 0;
  list-style: none;
`;

export const StyledBasicButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  font-family: inherit;
  line-height: inherit;
`;

export const StyledBasicLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-style: normal;
  color: inherit;
`;

export const StyledErrorMessage = styled.p`
  font-size: 24px;
  color: ${() => theme.colors.secondaryDarkText};
  font-weight: ${() => theme.fontWeight.bold};
`;
