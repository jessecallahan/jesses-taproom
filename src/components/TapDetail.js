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


      <div className="row">
        <div onClick={props.detailClick} className="column">
          <h1>Tap Detail</h1>
          <h3>{tap.name} - {tap.brand}</h3>
          <p><em>{tap.price}</em></p>
          <p><em>alcohal content: {tap.alchohalContent}</em></p>

          <p><em>pints: {tap.pints}</em></p>
        </div>

        <div onClick={props.detailClick} className="column">

          <p>Description of Beer:</p>
          <p>Girthy Beer with good finish</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <p><botton>sell some pints</botton></p>
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
  deleteButtonClick: PropTypes.func
}

export default TapDetail;