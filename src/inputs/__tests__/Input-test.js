jest.dontMock('../Input');

describe('Input', function() {
  it('render a input', function() {
    var React = require('react/addons');
    var Input = require('../Input');
    var input = <Input type="text" name="name" />
    var markup = React.renderToStaticMarkup(input);

    expect(markup).toEqual('<input type="text" name="name">');
  });
});
