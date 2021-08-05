import "./Header.scss";
import React from "react";

const Header = () => {
  return (
    <div>
      <div class="top-bar">
        <div class="logo">
          <img src="/img/logo.png" />
        </div>
        <div class="profile">
          <i class="bi bi-bell-fill" id="notifation-icon"></i>
          <div class="profile-fill">
            <span class="ABicon">
              <p>AB</p>
            </span>
            <p class="AB">Alex Bold</p>
          </div>

          <div class="profile-menu">
            <li>My Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </div>
        </div>

        <div class="notifation">
          <div class="noti-heading">
            <div id="setting">
              <i class="bi bi-gear"></i>
            </div>
            <p>Notification</p>
            <div id="check">
              <i class="bi bi-check2"></i>
            </div>
          </div>
          <div class="noti-coming">
            <img src="/img/Ellipse 27.png" />
            <p>
              <b>Nayla</b> Mentioned you in a <b>Comment</b>
            </p>
          </div>
          <div class="noti-coming">
            <img src="/img/Ellipse 27.png" />
            <p>
              <b>Nayla</b> Mentioned you in a <b>Comment</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
