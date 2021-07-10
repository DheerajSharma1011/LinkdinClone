import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import HeaderOption from "./HeaderOption";
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from "@material-ui/icons/Notifications";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import WorkIcon from '@material-ui/icons/Work';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HowToRegIcon from '@material-ui/icons/HowToReg';

function Header() {
  return (
    <div className="Header">
      {/* left part */}
      <div className="header_left">
        <img src="https://img.icons8.com/fluent/48/000000/linkedin-2.png" alt="image loading" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search"  />
        </div>
      </div>
      {/* right part */}
      <div className="header_right">   
         <HeaderOption Icon={NotificationsIcon} />
         <HeaderOption Icon={MessageIcon}  />
         <img src="https://image.flaticon.com/icons/png/512/3135/3135715.png" alt="image loading" />
         <HeaderOption Icon={DragIndicatorIcon}  />
         <p>
           <a
            href="Try Premium Month Free for 1 Month"
            className="Header_premium"> Upgrade Premium 
            </a>
        </p>
      </div>

      <div className="scndheader">
          <HomeTwoToneIcon/ >
          <WorkIcon/>
          <PermIdentityIcon/>
          <HowToRegIcon/>
            
      </div>
      
    </div>
  );
}

export default Header;
