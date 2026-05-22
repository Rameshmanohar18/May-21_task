import React from "react";

function ProductCard({ name }) {
  console.log("Rendered:", name);

  return (
    <article className="product-card">
      <div className="product-icon">{name.charAt(0)}</div>
      <div>
        <p className="label">Product</p>
        <h2>{name}</h2>
      </div>
    </article>
  );
}

export default React.memo(ProductCard);
