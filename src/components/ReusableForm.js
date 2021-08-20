import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name of Beer' />
        <input
          type='text'
          name='brand'
          placeholder='Brand of Beer' />
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <input
          type='number'
          name='alcohalContent'
          placeholder='Alchohal Content' />
        <textarea
          name='description'
          placeholder='Description' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;