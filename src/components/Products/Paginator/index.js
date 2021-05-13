import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setPage } from "../../../store/actions";

import "./paginator.scss";

function Paginator(props) {
  const { filteredProducts, currentPage } = props;
  const pageCount = filteredProducts.length;

  const handleNext = () => {
    pageCount >= currentPage + 1 && props.setPage(currentPage + 1);
  };

  const handlePrevious = () => {
    currentPage > 0 && props.setPage(currentPage - 1);
  };

  const handleSetPage = (page) => {
    props.setPage(page);
  };

  const pages = [...Array(pageCount).keys()].map((x) => ++x);

  const pageItems = pages.map((page, index) => {
    return (
      <div
        className="paginator-item"
        onClick={() => handleSetPage(page)}
        key={index}
      >
        {page}
      </div>
    );
  });
  return (
    <div className="paginator">
      <div className="paginator-item" onClick={handlePrevious}>
        {"<"}
      </div>
      {pageItems}
      <div className="paginator-item" onClick={handleNext}>
        {">"}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    filteredProducts: state.productsReducer.filteredProducts,
    currentPage: state.productsReducer.filters.currentPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setPage: (page) => {
      dispatch(setPage(page));
    },
  };
};

Paginator.propTypes = {
  filteredProducts: PropTypes.array,
  currentPage: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
