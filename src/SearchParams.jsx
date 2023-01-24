import { useState } from "react";

const ANIMALS = ["Cat", "Rat", "Pig", "Dog"];
const BREEDS = [];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");

  return (
    <div className="search-params">
      <form>

        <label htmlFor="location">Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">Animal
          <select
            id="animal"
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            value={animal}
            placeholder="Animal"
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">Breed
          <select
            id="breed"
            disabled={BREEDS.length === 0}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            value={breed}
            placeholder="Breed"
          >
            <option />
            {BREEDS.map(breed => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>

        <button> Submit </button>
      </form>
    </div>
  );
};

export default SearchParams;