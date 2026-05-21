import React, { useEffect, useState } from "react";

function CounterPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Updated:", count);
  }, [count]);


  return (
    <>
    <div>
<h2>Count:{count} </h2>
<button onClick={()=> setCount(count +1) }>Increment </button>
<button onClick={()=> setCount(count -1)} disabled={count === 0} >Decrement </button>
<button onClick={()=> setCount(0) }>Reset </button>




    </div>
    
    </>




  )
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, count),
  //   React.createElement(
  //     "button",
  //     {
  //       onClick: () => {
  //         setCount((currentCount) => currentCount + 1);
  //       },
  //     },
  //     "Increment"
  //   )
  // );
}

export default CounterPage;
