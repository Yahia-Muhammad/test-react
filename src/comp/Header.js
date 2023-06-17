import logo from "../images/logo.svg";
import menu from "../images/icon-menu.svg";
import close from "../images/icon-close-menu.svg";
import down from "../images/icon-arrow-down.svg";
import todo from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState("");
  const [hideHeader, setHideHeader] = useState("");
  const [listOne, setListOne] = useState(false);
  const [listTwo, setListTwo] = useState(false);

  return (
    <header>
      <img src={logo} alt="logo" />
      <div className={`in-header ${showHeader} ${hideHeader}`} onChange={() => {
        console.log("Yes")
      }}>
        <div className="closeMenu">
          <img
            className="click"
            src={close}
            alt="close"
            onClick={() => {
              setShowHeader("");
              setHideHeader("hide-header");
              setTimeout(() => {
                setHideHeader("");
              }, 500);
            }}
          />
        </div>
        <ul>
          <li>
            <div
              className="click"
              onClick={() => {
                setListOne((e) => !e);
              }}
            >
              Features <img src={down} alt="down" />
            </div>
            {listOne && (
              <ul style={{left: "-50px"}} className="small-list">
                <li className="click">
                  <img src={todo} alt="todo" /> Todo List
                </li>
                <li className="click">
                  <img src={calendar} alt="calendar" /> Calendar
                </li>
                <li className="click">
                  <img src={reminders} alt="reminders" /> Reminders
                </li>
                <li className="click">
                  <img src={planning} alt="planning" /> Planning
                </li>
              </ul>
            )}
          </li>
          <li>
            <div
              className="click"
              onClick={() => {
                setListTwo((e) => !e);
              }}
            >
              Company <img src={down} alt="down" />
            </div>
            {listTwo && (
              <ul className="small-list">
                <li className="click">History</li>
                <li className="click">Out Team</li>
                <li className="click">Blog</li>
              </ul>
            )}
          </li>
          <li>
            <div className="click">Careers</div>
          </li>
          <li>
            <div className="click">About</div>
          </li>
        </ul>
        <div className="log-btn">
          <button>Login</button>
          <button className="active">Register</button>
        </div>
      </div>
      <div className="openMenu">
        <img
          className="click"
          src={menu}
          alt="menu"
          onClick={() => {
            setShowHeader("show-header");
            setHideHeader("");
          }}
        />
      </div>
    </header>
  );
};

export default Header;
