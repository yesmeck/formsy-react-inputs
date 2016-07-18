jest.dontMock('../Select');
jest.dontMock('../changable');
jest.dontMock('fbjs/lib/keyMirror');

describe('Select', function() {
  it('render a select', function() {
    var React = require('react');
    var ReactDOM = require('react-dom/server');
    var Select = require('../Select').default;
    var select = (
      <Select name="name">
        <option value="1">One</option>
        <option value="2">Two</option>
      </Select>
    )
    var markup = ReactDOM.renderToStaticMarkup(select);
    expect(markup).toEqual('<select name="name"><option value="1">One</option><option value="2">Two</option></select>');
  });
});
