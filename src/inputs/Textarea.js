import React, { Component, PropTypes } from 'react';
import Formsy from 'formsy-react';
import reactMixin from 'react-mixin';

export default
@reactMixin.decorate(Formsy.Mixin)
class Textarea extends Component {
  static propTypes =  {
    name: PropTypes.string.isRequired
  }

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  }

  render() {
    return (
      <textarea {...this.props} onChange={::this.changeValue} value={this.getValue()} />
    );
  }
}
