import React from "react";
import "./App.css";

function Navbar() {
  return (
    <div className="navbar flex justify-between items-center  py-2 px-4 bg-slate-950">
      <h3 className="text-lg font-bold text-white  hover:shadow-sm">
        Sahil Mahalle
      </h3>
      <div id="nav-option" className="flex spaces-x-4">
        <h4 className="text-sm text-white px-2 py-2 ">About Me</h4>
        <h4 className="text-sm text-white px-2 py-2">Project</h4>
        <h4 className="text-sm text-white px-2 py-2">Skills</h4>
        <h4 className="text-sm text-white px-2 py-2">Contact Me</h4>
      </div>
    </div>
  );
}

export default Navbar;
