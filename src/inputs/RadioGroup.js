import React, { Component, PropTypes } from 'react';
import Formsy from 'formsy-react';
import reactMixin from 'react-mixin';

function radio(name, defaultValue, onChange) {
  return React.createClass({
    render: function() {
      return (
        <input
          {...this.props}
          type="radio"
          name={name}
          checked={this.props.value === defaultValue}
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
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    children: React.PropTypes.func.isRequired,
  }

  changeValue(event) {
    this.setValue(event.currentTarget.value);
  }

  componentDidMount() {
    this.setValue(this.props.defaultValue);
  }

  render() {
    const { name, children } = this.props;
    let defaultValue = this.getValue() || this.props.defaultValue;
    const renderedChildren = children(radio(name, defaultValue, ::this.changeValue));
    return renderedChildren && React.Children.only(renderedChildren);
  }
}
