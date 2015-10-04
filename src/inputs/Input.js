import React, { Component, PropTypes } from 'react';
import Formsy from 'formsy-react';
import reactMixin from 'react-mixin';
import changable from './changable';

@reactMixin.decorate(Formsy.Mixin)
@changable
export default
class Input extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <input {...this.props} onChange={::this.changeValue} value={this.getValue()} />
    );
  }
}
