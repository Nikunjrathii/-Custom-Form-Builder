
import "./App.css";
import Createform from "./components/Createform";

import { Routes, Route } from "react-router";
import FormEditor from "./components/FormEditor";


function App() {
  return (
    <div className="App">
      
      <Routes>
      
        
        <Route path="/" element={<Createform />} />
        <Route path="/edit" element={<FormEditor />} />
      </Routes>
    </div>
  );
}

export default App;
