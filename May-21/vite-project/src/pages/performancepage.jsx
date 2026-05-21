import React, { useMemo, useState } from "react";
import ProductCard from "../components/productcard";

function PerformancePage() {
  const [count, setCount] = useState(0);

  const products = useMemo(() => {
    return ["iPhone", "MacBook", "iPad"];
  }, []);

  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { onClick: () => setCount((currentCount) => currentCount + 1) },
      `Count ${count}`
    ),
    products.map((item) =>
      React.createElement(ProductCard, { key: item, name: item })
    )
  );
}

export default PerformancePage;
