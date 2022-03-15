import React, { useState } from 'react'
import './App.css';
import ImageUpload from './Components/ImageUpload';
import Success from './Components/Success';


function App() {

   //======Show DIV States======//
   const [showdiv1, setshowdiv1] = useState(true);
   const [showdiv2, setshowdiv2] = useState(false);

  const Backbtn = () => {
   
    localStorage.clear();    
    setshowdiv1(true);
    setshowdiv2(false);
    }


  return (
    <div className="main">
      {showdiv1 ? (<ImageUpload  setshowdiv1={setshowdiv1} setshowdiv2={setshowdiv2} />) :
       showdiv2 ? (<Success Backbtn={Backbtn} />) 
       : <div>    </div>}
    </div>
  );
}

export default App;
