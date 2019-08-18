import React from "react";
import {Link} from "react-router-dom";

function Header(props) {
  const { children, title, styleClass } = props;
  return (
    <header>
      <div className="container-fluid">
        <div className={`row align-items-center ${styleClass}`}>
          <div className="col text-center">
            <h1 className="text-light display-3 letter-spacing text-slanted">
              {title}
            </h1>
            {children}
          </div>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "default title",
  styleClass: "header-hero"
};

export default Header;
