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
      <div onClick={props.detailClick}>

        <div className="row">
          <div className="column">
            <h1>Tap Detail</h1>
            <h3>{tap.name} - {tap.brand}</h3>
            <p><em>{tap.price}</em></p>
            <p><em>quantity: {tap.alchohalContent}</em></p>

            <p><em>pints: {tap.pints}</em></p>
          </div>
          <div className="column">
            <p>Description of Beer:</p>
            <p>Girthy Beer with good finish</p>
            <p><botton>sell some pints</botton></p>
            <p><botton>edit beer</botton></p>
            <p><botton>delete beer</botton></p>
          </div>
        </div>
        <hr />
      </div>
    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  detailClick: PropTypes.func
}

export default TapDetail;