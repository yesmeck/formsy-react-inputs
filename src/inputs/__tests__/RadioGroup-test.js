jest.dontMock('../RadioGroup');

describe('RadioGroup', function() {
  it('render a radio group', function() {
    var React = require('react/addons');
    var RadioGroup = require('../RadioGroup.js');
    var radioGroup = (
      <RadioGroup name="fruit" selectedValue="apple">
        {Radio => (
          <div>
            <Radio value="apple" />Apple
            <Radio value="orange" />Orange
            <Radio value="watermelon" />Watermelon
          </div>
        )}
      </RadioGroup>
    )
    var markup = React.renderToStaticMarkup(radioGroup);

    expect(markup).toEqual('<div><input value="apple" type="radio" name="fruit" checked>Apple<input value="orange" type="radio" name="fruit">Orange<input value="watermelon" type="radio" name="fruit">Watermelon</div>');
  });
});
