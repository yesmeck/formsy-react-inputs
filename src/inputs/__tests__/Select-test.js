jest.dontMock('../Select');

describe('Select', function() {
  it('render a select', function() {
    var React = require('react/addons');
    var Select = require('../Select');
    var select = (
      <Select name="name">
        <option value="1">One</option>
        <option value="2">Two</option>
      </Select>
    )
    var markup = React.renderToStaticMarkup(select);
    expect(markup).toEqual('<select name="name"><option value="1">One</option><option value="2">Two</option></select>');
  });
});
