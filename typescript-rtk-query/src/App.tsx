import { useState } from "react";
import { useFetchBreedsQuery } from "./features/api/apiSlice";

function App() {
  const [numberOfDogs, setNumberOfDogs] = useState(10);
  const { data = [], isFetching } = useFetchBreedsQuery(numberOfDogs);

  return (
    <div className="flex flex-col items-center space-y-6 mt-10  ">
      <h1 className="text-gray-900 text-[20px] font-medium mt-5s">
        Number of dogs fetched ={" "}
        <select
          name="breed-select"
          value={numberOfDogs}
          onChange={(e) => setNumberOfDogs(Number(e.target.value))}
          className="bg-yellow-500 text-[20px]  outline-none text-white rounded-sm"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="100">100</option>
        </select>
      </h1>

      {isFetching && <p>Loading...</p>}
      {!isFetching && (
        <div>
          {data.map((breed) => (
            <img
              className="mb-3 rounded-md"
              height={250}
              width={400}
              key={breed.id}
              src={breed.image.url}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
