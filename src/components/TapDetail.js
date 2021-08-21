import React from "react";
import PropTypes from "prop-types";

function TapDetail(props) {
  const { tap } = props;
  let soldOut = null;

  function handleBuy(event) {
    event.preventDefault();
    let pintsVar;
    let amountOfPints;
    if (tap.pints <= 0) {
      pintsVar = 0;
      amountOfPints = 0;
    }
    else {
      amountOfPints = 1;
      pintsVar = tap.pints - 1;
    }
    props.sellButtonClick({ name: tap.name, brand: tap.brand, price: tap.price, pints: pintsVar, alcohalContent: 5.0, amountMade: (tap.price * amountOfPints) + tap.amountMade, id: tap.id });
  }

  if (tap.pints <= 0) {
    soldOut = "Sold out"
  } else (
    soldOut = `${tap.pints}`
  )
  return (
    <React.Fragment>
      <div className="row">
        <div onClick={props.detailClick} className="column">
          <h1>Tap Detail</h1>
          <h3>{tap.name} - {tap.brand}</h3>
          <p><em>price per pint: ${tap.price}</em></p>
          <p><em>alcohal content: {tap.alcohalContent}</em></p>
          <p><em>pints: {soldOut}</em></p>
          <p style={{ color: "green" }}><em>Amount made off beer: ${tap.amountMade}</em></p>
        </div>

        <div onClick={props.detailClick} className="column">

          <p>Description of Beer:</p>
          <p>Girthy Beer with good finish</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <p><button onClick={handleBuy}>sell some pints</button></p>
        <p><button onClick={props.editButtonClick}>edit beer</button></p>
        <p><button onClick={() => props.deleteButtonClick(tap.id)}>delete beer</button></p>
      </div>




    </React.Fragment>
  );
}

TapDetail.propTypes = {
  tap: PropTypes.object,
  detailClick: PropTypes.func,
  editButtonClick: PropTypes.func,
  deleteButtonClick: PropTypes.func,
  sellButtonClick: PropTypes.func
}

export default TapDetail;