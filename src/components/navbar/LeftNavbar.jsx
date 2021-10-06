import logo from "../../assets/images/logo.png";
import man from "../../assets/images/man.png";
import { navItems, navSubItems } from "./constants";
import "./styles/left-nav.scss";
import Dot from "../dot/Dot";

const LeftNavbar = () => {
  return (
    <nav className="d-flex flex-column justify-content-between left-nav">
      <div className="top">
        <img src={logo} alt="logo" />
      </div>
      <div className="middle">
        {navItems.map((item) => (
          <>
            <div className="navbar-item">{item}</div>
            {navSubItems[item].map((subItem) => {
              let Icon = subItem.icon;
              return (
                <div className={subItem.className}>
                  <div className="icon">
                    <Icon />
                  </div>
                  <div className="name">
                    {subItem.name === "Calendar" ? (
                      <>
                        <div>{subItem.name}</div>
                        <div>
                          <Dot color="#fff" />
                        </div>
                      </>
                    ) : (
                      subItem.name
                    )}
                  </div>
                </div>
              );
            })}
          </>
        ))}
      </div>
      <div className="d-flex gap-3 align-items-center last">
        <div className="image">
          <img src={man} alt="man" />
        </div>
        <div className="details">
          <h6>Acme Clinic, Inc.</h6>
          <p>Marvin Tunji-ola</p>
          <a href="/">View Profile</a>
        </div>
      </div>
    </nav>
  );
};

export default LeftNavbar;
