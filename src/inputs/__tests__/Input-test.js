jest.dontMock('../Input');
jest.dontMock('../changable');
jest.dontMock('fbjs/lib/keyMirror');

describe('Input', function() {
  it('render a input', function() {
    var React = require('react');
    var ReactDOM = require('react-dom/server');
    var Input = require('../Input').default;
    var input = <Input type="text" name="name" />
    var markup = ReactDOM.renderToStaticMarkup(input);

    expect(markup).toEqual('<input type="text" name="name"/>');
  });
});
