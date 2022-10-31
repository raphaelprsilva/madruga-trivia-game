import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Form from '../../components/Form';
import Select from '../../components/Select';
import Button from '../../components/Button';

import { categories, types, difficulties } from '../../utils/questionsOptions';
import { setItemToLocalStorage } from '../../utils/localStorage';

import * as S from './styled';

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
      <S.SettingsContainer>
        <S.SettingsTitle data-testid="settings-title">Settings</S.SettingsTitle>
        <div>
          <Form onSubmit={ this.saveOptions }>
            <Select
              name="questionCategory"
              id="category-input"
              label="Category"
              options={ categories }
              handleChange={ this.handleChange }
            />
            <Select
              name="questionDifficulty"
              id="difficulty-input"
              label="Difficulty"
              options={ difficulties }
              handleChange={ this.handleChange }
            />
            <Select
              name="questionType"
              id="type-input"
              label="Type"
              options={ types }
              handleChange={ this.handleChange }
            />
            <Button type="submit" name="Save Options" />
          </Form>
        </div>
      </S.SettingsContainer>
    );
  }
}

Settings.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Settings;
