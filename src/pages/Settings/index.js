import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { categories, types, difficulties } from '../../utils/questionsOptions';
import { setItemToLocalStorage } from '../../utils/localStorage';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionCategory: '',
      questionDifficulty: '',
      questionType: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  saveOptions = (event) => {
    event.preventDefault();
    const { questionCategory, questionDifficulty, questionType } = this.state;

    if (questionCategory || questionDifficulty || questionType) {
      setItemToLocalStorage('settings', {
        category: questionCategory,
        difficulty: questionDifficulty,
        type: questionType,
      });
    }
    const { history } = this.props;
    history.push({
      pathname: '/',
    });
  };

  render() {
    return (
      <div>
        <h1 data-testid="settings-title">Settings</h1>
        <div>
          <form onSubmit={ this.saveOptions }>
            <label htmlFor="category-input">
              Categoria:
              <select
                name="questionCategory"
                id="category-input"
                onChange={ this.handleChange }
              >
                {categories.map((category, index) => (
                  <option key={ index } value={ category.value }>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="difficulty-input">
              Dificuldade:
              <select
                name="questionDifficulty"
                id="difficulty-input"
                onChange={ this.handleChange }
              >
                {difficulties.map((difficulty, index) => (
                  <option key={ index } value={ difficulty.value }>
                    {difficulty.name}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="type-input">
              Tipo:
              <select
                name="questionType"
                id="type-input"
                onChange={ this.handleChange }
              >
                {types.map((type, index) => (
                  <option key={ index } value={ type.value }>
                    {type.name}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit">Save Options</button>
          </form>
        </div>
      </div>
    );
  }
}

Settings.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Settings;
