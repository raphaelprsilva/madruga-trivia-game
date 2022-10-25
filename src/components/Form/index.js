import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { children } = this.props;

    return <form>{children}</form>;
  }
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Form;
