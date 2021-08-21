import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTapForm(props) {
  const { tap } = props;

  function handleEditTapFormSubmission(event) {
    event.preventDefault();
    props.onEditTap({ name: event.target.name.value, brand: event.target.brand.value, description: event.target.description.value, price: parseInt(event.target.price.value), pints: tap.pints, alcohalContent: parseInt(event.target.alcohalContent.value), amountMade: tap.amountMade, id: tap.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTapFormSubmission}
        buttonText="Update Tap" />
    </React.Fragment>
  );
}

EditTapForm.propTypes = {
  Tap: PropTypes.object,
  onEditTap: PropTypes.func
};

export default EditTapForm;