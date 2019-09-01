import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "../../../styles/button/button.index";
import { Tile, Image, SubHeading } from "./tree.style";

const Tree = ({ name, species_name, image }) => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const toggleImageVisiblity = () => {
    setIsImageVisible(!isImageVisible);
  };

  return (
    <Tile data-testid="tree">
      <h2>{name}</h2>
      {species_name && <SubHeading>Species: {species_name}</SubHeading>}
      {isImageVisible && (
        <Image data-testid="tree-img" src={image} alt={name} />
      )}
      <Button data-testid="toggle-btn" onClick={toggleImageVisiblity}>
        {isImageVisible ? "Hide Image" : "Show Image"}
      </Button>
    </Tile>
  );
};

Tree.propTypes = {
  name: PropTypes.string,
  species_name: PropTypes.string,
  image: PropTypes.string
};

export default Tree;
