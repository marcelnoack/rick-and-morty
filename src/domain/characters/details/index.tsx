import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

const CharacterDetails: FunctionComponent = () => {
  const {id} = useParams<{id: string}>()

  return (
    <>
      Characters {id} works
    </>
  )
}

export default CharacterDetails;