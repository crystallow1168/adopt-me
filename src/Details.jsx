import { useParams } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import fetchPet from "./fetchPet";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet); // NOTE: Store it here in the cache

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🐌</h2>
      </div>
    );
  }

  if (results.isError) {
    return (
      <h1>OH NO!</h1>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
        <button>Adopt {pet.name}</button>
        <p>{pet.description}</p>
      </div>
    </div>
  );
};

export default Details;