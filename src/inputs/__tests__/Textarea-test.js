jest.dontMock('../Textarea');
jest.dontMock('../changable');
jest.dontMock('fbjs/lib/keyMirror');

describe('Textarea', function() {
  it('render a textarea', function() {
    var React = require('react');
    var ReactDOM = require('react-dom/server');
    var Textarea = require('../Textarea');
    var textarea = <Textarea name="name" />
    var markup = ReactDOM.renderToStaticMarkup(textarea);
    expect(markup).toEqual("<textarea name=\"name\"></textarea>");
  });
});
