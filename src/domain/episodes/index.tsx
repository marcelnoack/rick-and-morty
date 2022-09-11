import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";

import EpisodeDetails from "./details";
import EpisodesOverview from "./overview";

const Episodes: FunctionComponent = () => {
  return (
    <Routes>
      <Route path=":id" element={<EpisodeDetails />} />
      <Route path="" element={<EpisodesOverview />} />
    </Routes>
  )
}

export default Episodes;