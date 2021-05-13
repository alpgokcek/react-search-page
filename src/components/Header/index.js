import React from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";

import "./header.scss";
import Cart from "./Cart";

const Header = () => {
  return (
    <div className="header">
      <img
        alt="hepsiburada logo"
        src="images/logo.png"
        className="header__logo"
      />
      <SearchBar placeholder="25 milyon’dan fazla ürün içerisinde ara" />
      <Cart />
    </div>
  );
};

Header.propTypes = {};

export default Header;
