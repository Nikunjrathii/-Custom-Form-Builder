import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setformdata } from "../redux/slices/cfiSlice";
import Navbar from "./Navbar";
const Createform = () => {
  const dispatch =useDispatch();
  const formname=useRef("");
  const description=useRef("");
  function onCreate(){
   const fname=formname.current.value;
   const desc=description.current.value;
dispatch(setformdata({fname:fname,desc:desc}))
  }
  return (
    
    <>
    <Navbar/>
      <div className="flex justify-center flex-col my-28 vw-50 items-center marx-25 mary-25 p-4 shadow-lg border border-light-blue-300 bg-white rounded-lg">
        <div className="head flex-row text-center">
          <h1 className="font-bold font">Create Form</h1>
          <h3 className="my-1 text-black-900">
            Begin the process of data collection from your users by creating a
            new form.
          </h3>
        </div>
        <div className="forminput  flex flex-col  mx-16 my-3 justify-center items-center">
          <label className=" flex justify-center font-medium" for="name">
            Form Name
          </label>
          <input
            className="border border-black p-1 rounded w-64 mt-2"
            type="text"
            id="name"
            placeholder="Enter Form Name"
            ref={formname}
          ></input>
          <label className=" flex justify-center mt-3 font-medium" for="desc">
            Description
          </label>
          <textarea
            className="border border-black p-1 rounded w-64 mt-2"
            type="text"
            id="desc"
            placeholder="Enter description"
            row="5"
            col="12"
            ref={description}
          ></textarea>
          <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-3" onClick={onCreate}>
            <Link to="/edit">Create Form
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Createform;
