import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Feditor.css";
import Question from "./Question";

const FormEditor = () => {
  const formname = useSelector((state) => state.cfiReducer.formname);
  const description = useSelector((state) => state.cfiReducer.formDescription);
  const [userImg, setUserImg] = useState("");
  function handelImageChange(e) {
    const file = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setUserImg(fileReader.result);
      }
    };
  }
  return (
    <div className="full-page-background flex flex-col content-center p-7">
      <div className="formInfo flex float-left mt-10 ml-6  border-black justify-center text-center nw-50 shadow-lg border border-light-blue-300 bg-white rounded-lg">
        <div className="input-user-img">
          <label htmlFor="inputImg" className="labelImg">
            <img
              src={
                userImg
                  ? userImg
                  : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
              }
              alt="iamge"
            />
          </label>

          <input
            className="inputImg"
            id="inputImg"
            type="file"
            accept="image/*"
            onChange={handelImageChange}
          />
        </div>
          
      <div className="fname flex float-left ml-5 mb-10 font-bold justify-center text-center content-center flex-col py-4" ><h2 contenteditable="true" id="editableName">{formname ? formname:"enter your form name"}</h2>
      <h2 className="desc font-semibold"contenteditable="true" >{description ? description:"enter description here"}</h2>
      </div>
      </div>
     <Question/>
      
    </div>
  );
};

export default FormEditor;
