import React, { useState } from "react";

export default function TextComponent() {
  let [Data, setData] = useState("");

  let [change, setchange] = useState("");

  let [count, setcount] = useState("");

  let [wordCount, setwordcount] = useState("");

  let [normal, setnormal] = useState("");

  let funwordCount = () => {
    let array = Data.trim().split(/\s+/);
    setwordcount(array.length);
  };

  let reverseFun = () => {
    setnormal(Data);
    let array = Data.split("");
    let reverse = array.reverse();
    // console.log(reverse);
    setData(reverse);
  };

  let NormalFun = () => {
    setData(normal);
  };

  return (
    <div>
      <div className="mydiv">
        <textarea onChange={(e) => setData(e.target.value)}></textarea>
        <div className="childDiv" style={{ textTransform: change }}>
          {Data}
        </div>
      </div>

      <div className="mybuttons">
        <button onClick={() => setchange("lowercase")}>LowerCase</button>
        <button onClick={() => setchange("uppercase")}>UpperCase</button>

        <button onClick={() => setchange("capitalize")}>Capitalize</button>

        <button onClick={() => setcount(Data.length)}>
          Total Character {count}
        </button>

        <button onClick={funwordCount}>Total Word {wordCount}</button>

        <button onClick={reverseFun}>Reverse Order</button>

        <button onClick={NormalFun}>Normal Order</button>

        <button
          onClick={() => {
            setData(normal);
            setchange("");
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
