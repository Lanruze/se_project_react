

import "./SideBar.css";

import defaultAvatar from "../../assets/defaultAvatar.png";

export default function SideBar() {
  const username = "Lanre Afolabi";
  const userAvatar = null;
  const userInitial = username.charAt(0).toUpperCase();
  return (
    <aside className="sidebar">
      <div className="sidebar__user-container">
        <p className="sidebar__username">{username}</p>
        {userAvatar ? (
          <img
            className="sidebar__avatar"
            src={userAvatar}
            alt="user avatar"
            onError={(e) => (e.target.src = defaultAvatar)}
          />
        ) : (
          <div className="sidebar__avatar sidebar__avatar_placeholder">
            {userInitial}
          </div>
        )}
      </div>
    </aside>
  );
}
