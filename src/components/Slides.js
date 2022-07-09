import React, { useState } from "react";
import "./Slides.css";

function Slides({ slides }) {
    const [pageCounter, setPageCounter] = useState(0);
    console.log(pageCounter);

  const incrementPageCounter = () => {
    setPageCounter((prev) => prev + 1);
  };

  const decrementPageCounter = () => {
    setPageCounter((prev) => prev - 1);
  };

  const resetPageCounter = () => {
    setPageCounter(0);
  };

  return (
    <div className="slideArea">
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={resetPageCounter}
          disabled={pageCounter===0?true:false}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={decrementPageCounter}
          disabled={pageCounter===0?true:false}
        >
          Prev
        </button>{" "}
        <button
          data-testid="button-next"
          className="small"
          onClick={incrementPageCounter}
          disabled={pageCounter===slides.length-1?true:false}
        >
          Next
        </button>{" "}
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[pageCounter].title}</h1>
        <p data-testid="text">{slides[pageCounter].text}</p>
      </div>
    </div>
  );
}

export default Slides;
