jest.dontMock('../Input');
jest.dontMock('fbjs/lib/keyMirror');

describe('Input', function() {
  it('render a input', function() {
    var React = require('react/addons');
    var ReactDOM = require('react-dom/server');
    var Input = require('../Input');
    var input = <Input type="text" name="name" />
    console.log(ReactDOM);
    var markup = ReactDOM.renderToStaticMarkup(input);

    expect(markup).toEqual('<input type="text" name="name"/>');
  });
});
