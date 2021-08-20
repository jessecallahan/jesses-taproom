import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTapForm(props) {
  const { tap } = props;

  function handleEditTapFormSubmission(event) {
    event.preventDefault();
    props.onEditTap({ names: event.target.names.value, location: event.target.location.value, issue: event.target.issue.value, quantity: 10, id: tap.id });
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