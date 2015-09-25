var React = require('react');
var Formsy = require('formsy-react');

var Select = React.createClass({
  mixins: [Formsy.Mixin],

  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  changeValue: function (event) {
    this.setValue(event.currentTarget.value);
  },

  render: function () {
    return (
      <select {...this.props} onChange={this.changeValue} value={this.getValue()}>
        {this.props.children}
      </select>
    );
  }
});

module.exports = Select;
