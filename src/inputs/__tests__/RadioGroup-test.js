jest.dontMock('../RadioGroup');
jest.dontMock('../changable');
jest.dontMock('fbjs/lib/keyMirror');

describe('RadioGroup', function() {
  it('render a radio group', function() {
    var React = require('react');
    var ReactDOM = require('react-dom/server');
    var RadioGroup = require('../RadioGroup.js');
    var radioGroup = (
      <RadioGroup name="fruit" defaultValue="apple">
        {Radio => (
          <div>
            <Radio value="apple" />Apple
            <Radio value="orange" />Orange
            <Radio value="watermelon" />Watermelon
          </div>
        )}
      </RadioGroup>
    )
    var markup = ReactDOM.renderToStaticMarkup(radioGroup);

    expect(markup).toEqual('<div><input value="apple" type="radio" name="fruit" checked=""/>Apple<input value="orange" type="radio" name="fruit"/>Orange<input value="watermelon" type="radio" name="fruit"/>Watermelon</div>');
  });
});
