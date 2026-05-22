import React, { useMemo, useState } from "react";
import ProductCard from "../components/productcard";

function PerformancePage() {
  const [count, setCount] = useState(0);

  const products = useMemo(() => {
    return ["iPhone", "MacBook", "iPad"];
  }, []);

  return React.createElement(
    "div",
    { className: "performance-page" },
    React.createElement(
      "section",
      { className: "performance-hero" },
      React.createElement("p", { className: "eyebrow" }, "React performance"),
      React.createElement("h1", null, "Memoized Product Rendering"),
      React.createElement(
        "p",
        { className: "performance-copy" },
        "A small demo showing useMemo with memoized product cards in a polished interface."
      )
    ),
    React.createElement(
      "div",
      { className: "performance-toolbar" },
      React.createElement(
        "div",
        null,
        React.createElement("span", { className: "label" }, "Counter state"),
        React.createElement("strong", null, count)
      ),
      React.createElement(
        "button",
        {
          className: "primary-action",
          onClick: () => setCount((currentCount) => currentCount + 1),
        },
        "Increase count"
      )
    ),
    React.createElement(
      "div",
      { className: "product-grid" },
      products.map((item) =>
        React.createElement(ProductCard, { key: item, name: item })
      )
    )
  );
}

export default PerformancePage;
