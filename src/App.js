import React from "react";
import Trees from "./views/routes/trees/trees.index";
import { GlobalStyles } from "./styles/normalize/normalize.index";
import { getTrees } from "./views/routes/trees/trees.service";

const App = () => {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <Trees getTrees={getTrees} />
    </>
  );
};

export default App;
