import React, { useState } from "react";
import { Tile, Image, SecondaryText } from "./tree.style";
import { Button } from "../../../styles/button/button.index";

const Tree = ({ name, species_name, image }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisiblity = () => {
    setIsVisible(!isVisible);
  };
  return (
    <Tile data-testid="tree">
      <h2>{name}</h2>
      <SecondaryText>Species: {species_name}</SecondaryText>
      {isVisible && <Image data-testid="tree-img" src={image} alt={name} />}
      <Button data-testid="toggle-btn" onClick={toggleVisiblity}>
        {isVisible ? "Hide Tree" : "Show Tree"}
      </Button>
    </Tile>
  );
};

export default Tree;
