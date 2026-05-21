import React, { useEffect, useState } from "react";

function CounterPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Updated:", count);
  }, [count]);

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, count),
    React.createElement(
      "button",
      {
        onClick: () => {
          setCount((currentCount) => currentCount + 1);
        },
      },
      "Increment"
    )
  );
}

export default CounterPage;
