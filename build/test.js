import React, { Component } from 'react';
import { Form } from 'formsy-react';
import { Input, Select, Textarea, RadioGroup } from '../src';

class MyForm extends Component {
  submit(model) {
    console.log(model);
  }

  render() {
    return (
      <Form onValidSubmit={::this.submit}>
        <p>
          <Input type="text" name="name" />
        </p>
        <p>
          <RadioGroup name="fruit" selectedValue="apple">
            {Radio => (
              <div>
                <Radio value="apple" />Apple
                <Radio value="orange" />Orange
                <Radio value="watermelon" />Watermelon
              </div>
            )}
          </RadioGroup>
        </p>
        <p>
          <Select name="gender">
            <option value></option>
            <option value="m">Male</option>
            <option value="f">Female</option>
          </Select>
        </p>
        <p>
          <Textarea name="bio"></Textarea>
        </p>
        <button type="submit">Submit</button>
      </Form>
    );
  }
}

React.render(<MyForm />, document.getElementById('app'));
