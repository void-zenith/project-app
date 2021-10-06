import React from "react";
import Notification from "../Icons/Notification";
import Contact from "../Icons/Contact";
import Message from "../Icons/Message";
const Sidebar = () => {
  return (
    <div className="sidebar-menu">
      <Notification></Notification>
      <Contact></Contact>
      <Message></Message>
    </div>
  );
};

export default Sidebar;
