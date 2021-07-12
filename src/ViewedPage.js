import React from "react";
import "./ViewedPage.css";
import Data from "./Data"
 const ViewedPage = () =>{
 return(
      <div className="mainViewedPage">
       <div className="innerViewedPage">
       
         <h3>Pages people also viewed</h3>
        { Data.map((val)=>{
          return (
                 <div className="ViewedPageusers">
                   <img src={val.imgscr} alt ="profile loading"/>
                   <h4>{val.title}</h4>
                   <p>{val.followers}</p>
                  </div>
          )
         })
          }
         
      </div>
     </div>
 	)
 }
 export default ViewedPage;