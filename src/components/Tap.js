import React from "react";
import PropTypes from "prop-types";

function Tap(props) {
  return (
    <React.Fragment>
      <tr onClick={() => props.whenTapClicked(props.id)}>
        {/* <div }> */}
        <td>{props.name}</td>
        <td>{props.brand}</td>
        <td>{props.price}</td>
        <td>{props.alcohalContent}</td>
        <td>{props.amountMade}</td>
        {/* </div> */}
      </tr>
    </React.Fragment>
  );
}

Tap.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number,
  alcohalContent: PropTypes.number,
  amountMade: PropTypes.number,
  id: PropTypes.string,
  whenTapClicked: PropTypes.func
};

export default Tap;