import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  height: 30px;
  padding: 4px 10px;
  border-radius: ${props => props.theme.BASE_BORDER_RADIUS};
  background: ${props => props.theme.BUTTON_BG};
  border: 1px solid ${props => props.theme.BUTTON_BORDER_COLOR};
  color: ${props => props.theme.BUTTON_TEXT_COLOR};
  font-size: 0.8rem;
  text-transform: uppercase;

  &:hover {
    background: ${props => props.theme.BUTTON_BG_HOVER};
    border: 1px solid ${props => props.theme.BUTTON_BORDER_COLOR_HOVER};
  }

  &:focus {
    outline: 0;
  }
`;

Button.defaultProps = {
  theme: {
    BASE_BORDER_RADIUS: "3px",
    BUTTON_BG: "#00818a",
    BUTTON_TEXT_COLOR: "#dbedf3",
    BUTTON_BORDER_COLOR: "#00818a",
    BUTTON_BG_HOVER: "#007780",
    BUTTON_BORDER_COLOR_HOVER: "#007780"
  }
};
