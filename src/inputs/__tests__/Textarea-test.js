jest.dontMock('../Textarea');

describe('Textarea', function() {
  it('render a textarea', function() {
    var React = require('react/addons');
    var Textarea = require('../Textarea');
    var textarea = <Textarea name="name" />
    var markup = React.renderToStaticMarkup(textarea);
    expect(markup).toEqual("<textarea name=\"name\">\n</textarea>");
  });
});
