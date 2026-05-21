  import React from "react";

function ProductCard({ name }) {
  console.log("Rendered:", name);

  return <h2>{name}</h2>;
}

export default React.memo(ProductCard);