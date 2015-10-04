import React, { Component, PropTypes } from 'react';
import Formsy from 'formsy-react';
import reactMixin from 'react-mixin';
import changable from './changable';

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

@reactMixin.decorate(Formsy.Mixin)
@changable
export default
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
