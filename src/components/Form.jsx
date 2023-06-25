import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  render() {
    const { formState, onInputChange, onSaveButtonClick, disabled } = this.props;
    const {
      name,
    } = formState;

    return (
      <div>
        <form>
          <fieldset className="mb-4 text-center border-blue-700 decoration-blue-700">
             <label 
          htmlFor="name"
          className="mb-4 text-center border-blue-700 decoration-blue-700"
          >
            Nome:
            <input
              data-testid="login-name-input"
              id="name"
              name="name"
              type="text"
              onChange={ onInputChange }
              value={ name }
              className="w-full w-400 h-10 mt-400 ml 440 rounded-2xl p-2
                   border-blue-700 border-2 text-blue-700"
            />
          </label>
          </fieldset>
          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ disabled }
            onClick={ onSaveButtonClick }
            className="w-400 h-10 mt-400 ml 440 rounded-2xl p-2
            text-white w-full bg-blue-700"
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
