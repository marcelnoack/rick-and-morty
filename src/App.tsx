import { FunctionComponent } from "react";
import {BrowserRouter} from "react-router-dom";

import Layout from "./domain/layout";

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
