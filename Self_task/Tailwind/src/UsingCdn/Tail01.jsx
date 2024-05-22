import React from "react";

export default function Tail01() {
  return (
    <div>
      {/* Justify start */}
      <div className="bg-amber-300 sm:text-center md:bg-cyan-400 p-2">
        <h1>Welcome Deepak</h1>
        <h1>Welcome Deepak</h1>
        <h1>Welcome Deepak</h1>
      </div>

     {/* Justify between */}
     <div className="bg-sky-500 text-blue-900 flex justify-between  p-2">
        <h1>Welcome Deepak</h1>
        <h1>Welcome Deepak</h1>
        <h1>Welcome Deepak</h1>
      </div>


     {/* Justify between with hover space around */}
     <div className="bg-sky-500 text-blue-900 flex justify-between hover:justify-around  p-2">
        <h1>Welcome Deepak</h1>
        <h1>Welcome Deepak</h1>
        <h1>Welcome Deepak</h1>
      </div>

     {/* Justify item stretch*/}
     <div className="bg-green-500  grid justify-items-stretch  p-2">
        <h1 className="justify-self-auto">Welcome Deepak</h1>
        <h1>Welcome Deepak</h1>
        <h1>Welcome Deepak</h1>
      </div>

    </div>
  );
}
