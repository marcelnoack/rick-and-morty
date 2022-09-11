import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";

import CharacterDetails from "./details";
import CharactersOverview from "./overview";

const Characters: FunctionComponent = () => {
  return (
    <Routes>
      <Route path=":id" element={<CharacterDetails />} />
      <Route path="" element={<CharactersOverview />} />
    </Routes>
  )
}

export default Characters;