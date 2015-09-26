import React, { Component, PropTypes } from 'react';
import Formsy from 'formsy-react';
import reactMixin from 'react-mixin';

export default
@reactMixin.decorate(Formsy.Mixin)
class Input extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  }

  render() {
    return (
      <input {...this.props} onChange={::this.changeValue} value={this.getValue()} />
    );
  }
}
