export default function changeable(target) {
  target.prototype.changeValue = function(event) {
    this.setValue(event.currentTarget.value);
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  };
}
