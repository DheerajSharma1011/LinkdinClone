import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Icon, title }) {
  return (
    <div className="HeaderOption">
      {Icon && <Icon className="headerOption_Icon" style={{ color: 'white' }}/>}
      {<h3 style={{ color: 'black' }} className="HeaderOption_titles">{title}</h3>}
    </div>
  );
}

export default HeaderOption;