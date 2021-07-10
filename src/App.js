import './App.css';
import React from "react";
import Header from "./Header";
import FigmaPart from "./FigmaPart"; 
import ViewedPage from "./ViewedPage";
function App() {
  return (
<React.Fragment className="main">
   <Header/>
   <FigmaPart/>
   <ViewedPage/>
</React.Fragment>
  );
}

export default App;
