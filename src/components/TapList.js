import React from 'react';
import Tap from './Tap';
import PropTypes from "prop-types";


function TapList(props) {
  return (
    <React.Fragment>
      <hr />
      <table id="customers">
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Alcohal Content</th>
          <th>Price:</th>
          <th>Amount Sold:</th>
        </tr>

        {props.tapList.map((tap) =>

          <Tap
            whenTapClicked={props.whenTapClicked}
            name={tap.name}
            brand={tap.brand}
            price={tap.price}
            alcohalContent={tap.alcohalContent}
            id={tap.id}
            amountMade={tap.amountMade}
            key={tap.id} />

        )}
      </table>

    </React.Fragment>
  );
}

TapList.propTypes = {
  tapList: PropTypes.array,
  whenTapClicked: PropTypes.func
};

export default TapList;