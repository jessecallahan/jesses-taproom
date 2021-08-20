import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function NewTapForm(props) {

  function handleNewTapFormSubmission(event) {
    event.preventDefault();
    props.onNewTapCreation({ name: event.target.name.value, brand: event.target.brand.value, description: event.target.description.value, price: event.target.price.value, pints: 124, alcohalContent: event.target.alcohalContent.value, amountMade: 0, id: v4() });
  }

  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewTapFormSubmission} buttonText="Make Tap" />
    </React.Fragment>
  );
}

NewTapForm.propTypes = {
  onNewTapCreation: PropTypes.func
};

export default NewTapForm;