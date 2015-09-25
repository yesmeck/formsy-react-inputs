var React = require('react');
var Formsy = require('formsy-react');

var Textarea = React.createClass({
  mixins: [Formsy.Mixin],

  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  changeValue: function (event) {
    this.setValue(event.currentTarget.value);
  },

  render: function () {
    return (
      <textarea {...this.props} onChange={this.changeValue} value={this.getValue()} />
    );
  }
});

module.exports = Textarea;
