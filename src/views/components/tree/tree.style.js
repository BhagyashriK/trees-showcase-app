import styled from "styled-components";

export const Tile = styled.div`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  background: ${props => props.theme.TILE_BG};
  border-radius: ${props => props.theme.BASE_BORDER_RADIUS};
  text-align: center;
`;

Tile.defaultProps = {
  theme: {
    TILE_BG: "#283149",
    BASE_BORDER_RADIUS: "20px"
  }
};

export const Image = styled.img`
  display: flex;
  max-width: 100%;
  margin-bottom: 30px;
`;

export const SecondaryText = styled.p`
  color: ${props => props.theme.SECONDARY_TEXT_COLOR};
  margin-bottom: 20px;
`;

SecondaryText.defaultProps = {
  theme: {
    SECONDARY_TEXT_COLOR: "#dbedf3"
  }
};
