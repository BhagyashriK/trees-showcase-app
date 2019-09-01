import React from "react";

import { getTrees } from "./views/routes/trees/trees.service";
import Trees from "./views/routes/trees/trees.index";
import { GlobalStyles } from "./styles/normalize/normalize.index";
import ErrorBoundary from "./views/components/error-boundary/error-boundary.index";

const App = () => {
  return (
    <ErrorBoundary>
      {/* normalize browser default stye */}
      <GlobalStyles></GlobalStyles>

      {/* render Trees list  */}
      <Trees getTrees={getTrees} />
    </ErrorBoundary>
  );
};

export default App;
