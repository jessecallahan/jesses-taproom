import React from "react";
import PropTypes from "prop-types";

function TapDetail(props) {
  const { tap } = props;

  // function handleBuy(event) {
  //   event.preventDefault();
  //   props.onClickingBuy({ names: tap.names, location: tap.location, issue: tap.issue, quantity: tap.quantity - 1, id: tap.id });
  // }

  return (
    <React.Fragment>
      <h1>tap Detail</h1>
      <h3>{tap.name} - {tap.brand}</h3>
      <p><em>{tap.price}</em></p>
      <p><em>quantity: {tap.alchohalContent}</em></p>
      <p><em>pints: {tap.pints}</em></p>
      <hr />
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,

}

export default TapDetail;