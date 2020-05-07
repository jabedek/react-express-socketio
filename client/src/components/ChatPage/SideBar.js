import "./SideBar.scss";
import React from "react";

export const SideBar = () => {
  return (
    <div className="sidebar">
      <label className="sidebar__header">Status</label>

      <ul className="sidebar__list">
        <li className="sidebar__item">
          <i className="fas fa-comments"></i> Room:
          <p id="room-name"></p>
        </li>

        <li className="sidebar__item">
          <i className="fas fa-users"></i> Users:
          <ul id="users"></ul>
        </li>
      </ul>
    </div>
  );
};
