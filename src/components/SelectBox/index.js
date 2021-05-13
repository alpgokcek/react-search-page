import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import "./select-box.scss";

function SelectBox(props) {
  const { persistPlaceholder, placeholder, options, value } = props;

  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = (e, value = "") => {
    showDropdown && props.onChange(value);
    setShowDropdown(!showDropdown);
  };

  const dropdownItems = options.map((item, index) => {
    return (
      <li
        className={cx("select-box__dropdown-item", {
          "select-box__dropdown-item--selected": item.value === value,
        })}
        key={index}
        value={item.value}
        onClick={(e) => handleClick(e, item.value)}
      >
        {item.name}
      </li>
    );
  });

  return (
    <div className="select-box">
      <div
        className="select-box__button"
        onClick={(e) => setShowDropdown(!showDropdown)}
      >
        {persistPlaceholder ? placeholder : value}
        <img
          className="select-box__button-icon"
          src="/images/dropdown-icon.png"
          alt="arrow"
        />
      </div>
      {showDropdown && (
        <ul className="select-box__dropdown">{dropdownItems}</ul>
      )}
    </div>
  );
}

SelectBox.propTypes = {
  persistPlaceholder: PropTypes.bool,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

SelectBox.defaultProps = {
  persistPlaceholder: false,
};

export default SelectBox;
