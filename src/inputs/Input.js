var React = require('react');
var Formsy = require('formsy-react');

var Input = React.createClass({
  mixins: [Formsy.Mixin],

  propTypes: {
    type: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  },

  changeValue: function (event) {
    this.setValue(event.currentTarget.value);
  },

  render: function () {
    return (
      <input {...this.props} onChange={this.changeValue} value={this.getValue()} />
    );
  }
});

module.exports = Input;
