import React from "react";
import MediaQuery from "react-responsive";
import "./AppHeader.css";
import GlobalSearch from "./components/GlobalSearch";
import HomeNav from "./components/HomeNav";
import NewsNav from "./components/NewsNav";
import ProfileNav from "./components/ProfileNav";

const DESKTOP_MIN = 768;
const MOBILE_MAX = 767;

function AppHeader() {
  return (
    <header className="App-Header">
      <MediaQuery maxWidth={MOBILE_MAX}>Mobile</MediaQuery>
      <MediaQuery minWidth={DESKTOP_MIN}>
        <div className="App-Header__Global-Search-container">
          <GlobalSearch />
        </div>
        <nav className="App-Header__navigation">
          <ul className="App-Header__navigation-list">
            <li className="App-Header__navigation-item">
              <HomeNav />
            </li>
            <li>
              <NewsNav />
            </li>
            <li>
              <ProfileNav />
            </li>
          </ul>
        </nav>
      </MediaQuery>
    </header>
  );
}

export default AppHeader;
