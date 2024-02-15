import { Link } from "react-router-dom";

function About() {
  return (
    <div className="   bg-slate-900 font-serif ">
      <div className="navbar flex items-center justify-between px-4   py-2 text-white">
        <h3 className=" text-6xl font-bold hover:drop-shadow-2xl ">
          Sahil Mahalle
        </h3>
        <div id="nav-option" className="spaces-x-4 flex text-xl">
          <h4 className=" px-2 py-2  ">About Me</h4>
          <Link to="/project">
            <h4 className=" px-2 py-2 ">Project</h4>
          </Link>
          <h4 className=" px-2 py-2 ">Skills</h4>
          <h4 className=" px-2 py-2">Contact Me</h4>
        </div>
      </div>
      <div className="flex h-screen text-white">
        <div className="flex flex-1 items-center justify-center">
          <div className="">
            <img
              className="w-100 h-64"
              src="https://media.tenor.com/5bv_BndNtRQAAAAj/endingbrowsing.gif"
            />
          </div>
          <div className="mx-auto max-w-lg  p-8 ">
            <h2 className="text-5xl ">I am Sahil Mahalle,</h2>
            <p className="mt-4 text-xl  ">
              Aspiring IT professional with a passion for problem-solving and a
              strong foundation in Python, Java, and HTML/CSS. Eager to
              contribute fresh ideas and learn from experienced teams. Lets
              collaborate and create something amazing together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
