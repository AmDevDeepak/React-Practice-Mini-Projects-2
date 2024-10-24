import { useEffect, useState } from "react";

const FilterByCategories = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const uniqueCategories =
    products && products.length
      ? ["All", ...new Set(products.map((product) => product.category))]
      : [];
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data?.products);
      setFilteredProducts(data?.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const categoryFilterHandler = (category) => {
    if (category === "All") {
      setFilteredProducts(products);

      return;
    }
    const filtered = products.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="w-full min-h-[100vh] bg-slate-600 flex flex-col items-center justify-center text-white">
      <h1 className="font-semibold text-red-300 my-5 text-4xl font-mono">
        Filter Products By Categories
      </h1>
      <div className="w-[80%] my-6 mx-auto flex items-center justify-between gap-2">
        {uniqueCategories &&
          uniqueCategories.length > 0 &&
          uniqueCategories.map((category) => (
            <button
              onClick={() => categoryFilterHandler(category)}
              className="px-2 py-2 bg-red-400 font-semibold text-white rounded-md text-2xl"
            >
              {category.toUpperCase()}
            </button>
          ))}
      </div>
      {loading ? (
        <p>Loading your products</p>
      ) : (
        <div className="grid grid-cols-3 gap-4 px-3">
          {filteredProducts.length &&
            filteredProducts.map((product) => (
              <div
                className="p-2 bg-slate-300 rounded-md text-black flex flex-col shadow-slate-300 shadow-md hover:scale-[0.95] transition-all"
                key={product.id}
              >
                <img
                  className="w-[70%] h-[70%] mx-auto"
                  src={product.thumbnail}
                  alt={product.title}
                />
                <h2 className="text-2xl font-semibold font-mono ">
                  {product.title}
                </h2>
                <p className="text-green-500 font-bold font-mono text-3xl">
                  $ {product.price}
                </p>
                <p className="bg-red-400 py-1 px-2 mt-3 rounded-md font-medium w-fit text-slate-200">
                  Category : {product.category}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FilterByCategories;
