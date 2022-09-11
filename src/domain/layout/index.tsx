import { FunctionComponent } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Characters from "../characters";
import Episodes from "../episodes";

const Layout: FunctionComponent = () => {
  return (
    <div className="app-layout">
      <header className="app-header"></header>
      <main className="app-main">
        <Routes>
          <Route path="characters/*" element={<Characters />} />
          <Route path="episodes/*" element={<Episodes />} />
          <Route path='*' element={<Navigate to="characters" replace />} />
        </Routes>
      </main>
      <footer className="app-footer"></footer>
    </div>
  );
};

export default Layout;
