import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const DebounceAPI = () => {
  const [searchParam, setSearchParam] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const debounceParamVal = useDebounce(searchParam, 1000);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/recipes/search?q=${debounceParamVal}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.recipes);
        setRecipes(data.recipes);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [debounceParamVal]);

  return (
    <div className="w-full min-h-[100vh] p-2 bg-purple-300 flex items-center justify-center">
      <div className="w-full h-full shadow-amber-50 shadow-lg bg-purple-400 flex flex-col items-center rounded-md">
        <div className="mt-2 w-full h-10 p-3 flex items-center justify-center">
          <input
            type="search"
            value={searchParam}
            onChange={(ev) => setSearchParam(ev.target.value)}
            placeholder="Search recipe..."
            className="border w-1/2 border-slate-200 mt-5 text-blue-600 font-semibold rounded-lg py-3 px-5 outline-none bg-purple-400"
          />
        </div>
        <div className="recipes grid grid-cols-5 mt-3 gap-2">
          {loading && (
            <div className="mt-2 w-full">
              <p className="text-white text-xl font-semibold">
                Searching For {debounceParamVal} ....
              </p>
            </div>
          )}
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="mt-2 w-full bg-purple-800 rounded-md p-2 "
              >
                <img className="w-10" src={recipe.image} alt="" />
                <h2 className="text-white text-sm font-semibold">
                  {recipe.name}
                </h2>
              </div>
            ))
          ) : (
            <div className="mt-2 w-full">
              <p className="text-white text-xl font-semibold">
                No Results found for {debounceParamVal} ....
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DebounceAPI;
