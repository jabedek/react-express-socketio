import "./SideBar.scss";
import React, { useState, useEffect } from "react";

export const SideBar = (props) => {
  const [username, setUsername] = useState("Elo");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("[@SideBar]", props.username);

    setUsername(props.username);
    setRoom(props.room);
    setUsers(props.users);
  }, [props.username, props.username, props.users]);

  const renderUsers = () => {
    if (users) {
      const listUsers = users.map((user, index) => (
        <li key={index}>{user.username}</li>
      ));
      return <ul id="users">{listUsers}</ul>;
    }

    return <p id="users">users.length</p>;
  };

  return (
    <div className="sidebar">
      <label className="sidebar__header">Status</label>

      <ul className="sidebar__list">
        <li className="sidebar__item">
          <i className="fas fa-comments"></i> You:
          <p id="current-user">{username}</p>
        </li>

        <li className="sidebar__item">
          <i className="fas fa-comments"></i> Room:
          <p id="room-name">{room}</p>
        </li>

        <li className="sidebar__item">
          <i className="fas fa-users"></i> Users:
          {renderUsers()}
        </li>
      </ul>
    </div>
  );
};
