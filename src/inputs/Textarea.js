import React, { Component, PropTypes } from 'react';
import Formsy from 'formsy-react';
import reactMixin from 'react-mixin';
import changable from './changable';

@reactMixin.decorate(Formsy.Mixin)
@changable
export default
class Textarea extends Component {
  static propTypes =  {
    name: PropTypes.string.isRequired
  }

  render() {
    return (
      <textarea {...this.props} onChange={::this.changeValue} value={this.getValue()} />
    );
  }
}
