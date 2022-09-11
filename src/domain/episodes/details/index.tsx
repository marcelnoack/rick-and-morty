import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

const EpisodeDetails: FunctionComponent = () => {
  const {id} = useParams<{id: string}>()

  return (
    <>
      Episodes {id} works
    </>
  )
}

export default EpisodeDetails;