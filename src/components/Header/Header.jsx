import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import defaultAvatar from "../../assets/defaultAvatar.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({ handleAddClick, weatherData }) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const username = "Lanre Afolabi";
  const userAvatar = null;

  const userInitial = username.charAt(0).toUpperCase();

  return (
    <header className="header">
      <div className="header__left">
        <NavLink to="/">
          <img className="header__logo" src={logo} alt="App logo" />
        </NavLink>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>

      <div className="header__right">
        <ToggleSwitch />
        <button onClick={handleAddClick} className="header__add-clothes-btn">
          + Add clothes
        </button>
        <NavLink className="header__nav-link" to="/profile">
          <div className="header__user-container">
            <p className="header__username">{username}</p>
            {userAvatar ? (
              <img
                className="header__avatar"
                src={userAvatar}
                alt="user avatar"
                onError={(e) => (e.target.src = defaultAvatar)}
              />
            ) : (
              <div className="header__avatar header__avatar_placeholder">
                {userInitial}
              </div>
            )}
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
