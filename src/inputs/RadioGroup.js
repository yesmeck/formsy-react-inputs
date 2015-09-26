import React, { Component, PropTypes } from 'react';
import Formsy from 'formsy-react';
import reactMixin from 'react-mixin';

function radio(name, selectedValue, onChange) {
  return React.createClass({
    render: function() {
      return (
        <input
          {...this.props}
          type="radio"
          name={name}
          checked={this.props.value === selectedValue}
          onChange={onChange} />
      );
    }
  });
}

export default
@reactMixin.decorate(Formsy.Mixin)
class RadioGroup extends Component {
  static propTypes =  {
    name: PropTypes.string.isRequired,
    selectedValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    children: React.PropTypes.func.isRequired,
  }

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  }

  render() {
    const { name, onChange, children } = this.props;
    var selectedValue = this.getValue() || this.props.selectedValue;
    const renderedChildren = children(radio(name, selectedValue, ::this.changeValue));
    return renderedChildren && React.Children.only(renderedChildren);
  }
}
