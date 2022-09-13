import React from "react";
import { Routes, Route } from 'react-router-dom'
import Mainpage from "./Container/mainpage";

function App() {
  return (
<Mainpage />

//Routes doesnot work properly on github pages so it was done like this for deployment in github pages.
    //     <>  
//   <Routes>
//   <Route path="/" element={<Mainpage />} />
//  </Routes>
// </>
  );
}

export default App;
