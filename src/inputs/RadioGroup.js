var React = require('react');
var Formsy = require('formsy-react');

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

var RadioGroup = React.createClass({
  mixins: [Formsy.Mixin],

  propTypes: {
    name: React.PropTypes.string.isRequired,
    selectedValue: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.bool,
    ]),
    children: React.PropTypes.func.isRequired,
  },

  changeValue: function(event) {
    this.setValue(event.currentTarget.value);
  },

  render: function () {
    const { name, onChange, children } = this.props;
    var selectedValue = this.getValue() || this.props.selectedValue;
    const renderedChildren = children(radio(name, selectedValue, this.changeValue));
    return renderedChildren && React.Children.only(renderedChildren);
  }
});

module.exports = RadioGroup;
