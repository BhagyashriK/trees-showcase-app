import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Header from "../../components/header/header.index";
import Tree from "../../components/tree/tree.index";
import Loader from "../../components/loader/loader.index";
import Message from "../../components/message/message.index";
import { Showcase } from "./trees.style";
import { Container, Column } from "../../../styles/layout/layout.index";

const BASE_CHUNK_SIZE = 2;

const Trees = ({ getTrees }) => {
  // initialize col values with []
  const [col1, setCol1] = useState([]);
  const [col2, setCol2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState({});

  useEffect(() => {
    getTrees().then(
      trees => {
        const totalTrees = trees.length;
        //  divide trees length in chunks and distribut it into cols
        const chunkSize = Math.round(totalTrees / BASE_CHUNK_SIZE);
        const col1 = totalTrees ? trees.slice(0, chunkSize) : [];
        const col2 = totalTrees ? trees.slice(chunkSize, totalTrees) : [];
        setCol1(col1);
        setCol2(col2);
        setIsLoading(false);
        if (totalTrees === 0) {
          setMessage({ text: "No Content" });
        }
      },
      error => {
        setIsLoading(false);
        setMessage({ text: error, type: "error" });
      }
    );
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

          {/* Show empty message if trees list is empty or error message if fetch fails*/}
          {message && <Message message={message.text} type={message.type} />}

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

Trees.propTypes = {
  getTrees: PropTypes.func
};

export default Trees;
