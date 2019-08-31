import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  border-radius: ${props => props.theme.BASE_BORDER_RADIUS};
  color: ${props => props.theme.EMPTY_MESSAGE_TEXT_COLOR};
  font-size: 1.2rem;
`;

Wrapper.defaultProps = {
  theme: {
    BASE_BORDER_RADIUS: "3px",
    EMPTY_MESSAGE_TEXT_COLOR: "#dbedf3"
  }
};
