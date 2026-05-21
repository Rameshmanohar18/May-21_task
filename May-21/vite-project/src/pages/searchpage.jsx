 import { useState, useMemo } from "react";
import useDebounce from "../hooks/useDebounce";

const products = [
  "iPhone",
  "Samsung",
  "MacBook",
  "Dell",
  "AirPods",
];

function SearchPage() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  const filteredProducts = useMemo(() => {
    return products.filter((item) =>
      item
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch]);

  return (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default SearchPage;