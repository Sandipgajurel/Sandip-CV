import React from "react";
import { Routes, Route } from 'react-router-dom'
import Mainpage from "./Container/mainpage";

function App() {
  return (
    <>  
  <Routes>
  <Route path="/" element={<Mainpage />} />
 </Routes>
</>
  );
}

export default App;
