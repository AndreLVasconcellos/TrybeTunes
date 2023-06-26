import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { formState, onInputChange, onSaveButtonClick, disabled } = this.props;
    const {
      name,
    } = formState;

    return (
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form className="space-y-4 md:space-y-6">
          {/* <fieldset className="mb-4 text-center border-blue-700 decoration-blue-700"> */}
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Nome:
            <input
              data-testid="login-name-input"
              id="name"
              name="name"
              type="text"
              onChange={ onInputChange }
              value={ name }
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm
                rounded-lg focus:ring-primary-600 focus:border-primary-600
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                 dark:focus:border-blue-500"
            />
          </label>
          {/* </fieldset> */}
          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ disabled }
            onClick={ onSaveButtonClick }
            className="w-full bg-blue-700 text-white bg-primary-600 hover:bg-primary-700
            focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium
            rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600
            dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  formState: PropTypes.object,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
  name: PropTypes.string,
  disabled: PropTypes.bool,
}.isRequired;
