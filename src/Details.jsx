import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  //this is part of the toolset that useQuery provides
  //we provide a unique key (["details", id])
  //  and fetchPet only runs if it isn't already cached
  const results = useQuery(["details", id], fetchPet);

  //Additional error handling, though fetchPet has it's own throw
  //  useful to tell user about it

  if (results.isError) {
    return <h2>Uh oh...problem loading pet 😥</h2>;
  }

  //NOTE: You cannot await in a render function

  if (results.isLoading) {
    //NOTE: The emoji vscode shortcut is "Win + ."
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} – {pet.breed} – {pet.city}, {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;
