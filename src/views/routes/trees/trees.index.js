import React, { useState, useEffect } from "react";
import { Showcase } from "./trees.style";
import Header from "../../components/header/header.index";
import { Container, Column } from "../../../styles/layout/layout.index";
import Tree from "../../components/tree/tree.index";
import Loader from "../../components/loader/loader.index";
import EmptyMessage from "../../components/empty-message/empty-message.index";

const Trees = ({ getTrees }) => {
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getTrees().then(trees => {
      const chunkSize = Math.round(trees.length / 2);
      const col1 = trees.length ? trees.slice(0, chunkSize) : [];
      const col2 = trees.length ? trees.slice(chunkSize, trees.length) : [];
      setCol1(col1);
      setCol2(col2);
      setIsLoading(false);
    });
  }, [getTrees]);
  const renderColumn = columns => {
    return columns.map(tree => <Tree key={tree.name} {...tree}></Tree>);
  };
  return (
    <>
      <Header>
        <h1>Trees</h1>
      </Header>
      <Container>
        <Showcase>
          {/* show Loader if request is in progress */}
          {isLoading && <Loader />}
          {/* Show empty message if trees list is empty */}
          {col1.length === 0 && col2.length === 0 && !isLoading && (
            <EmptyMessage message={"No Content"} />
          )}
          {/* Column 1 */}
          <Column data-testid="col1">
            {col1.length > 0 && renderColumn(col1)}
          </Column>
          {/* Column 2 */}
          <Column data-testid="col2">
            {col2.length > 0 && renderColumn(col2)}
          </Column>
        </Showcase>
      </Container>
    </>
  );
};

export default Trees;
