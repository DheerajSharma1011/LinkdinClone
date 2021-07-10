import React from "react";
import "./FigmaPart.css";
const FigmaPart= () =>{
return(
       <div className="mainfigma">
         <div className="figmaimg">
            <img src="https://media-exp1.licdn.com/dms/image/C561BAQHXuBYDcBUm2w/company-background_10000/0/1620411660155?e=1625979600&v=beta&t=ksGne3UwgRW22melvMXJwHVmuDh0Ue9ZDKjVHYVJspw" alt="image loading" />
         </div>
          <div className="figmaprofile">
             <img src="https://media-exp1.licdn.com/dms/image/C560BAQGvV_5x3UBMJA/company-logo_200_200/0/1571158216754?e=1634169600&v=beta&t=lpqcmp0SIlHQ-em4_o8Iirwi2oWtABKEVbR3zuO0iu4" alt="image loading" />
          </div>
          <div className="profilediv">
             <h1>Figma</h1>
             <h4>A design platform for teams who build product together.</h4>
             <p>Design - San Franciso, CA - 101,282 followers</p>
             <h5>See all 358 employees on Linkedin </h5>
             <div className="mainfollowdiv">
             <div className="follow">
               <h4>Follow</h4>
             </div>
             <div className="visitweb">
             <h4>Visit Website</h4>
             </div>
             <div className="dot">  
              <h1>...</h1>
             </div>
             </div>
         </div>
       </div>
	)
}
export default FigmaPart;