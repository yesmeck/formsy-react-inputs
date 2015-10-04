import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'formsy-react';
import { Input, Select, Textarea, RadioGroup } from '../src';

const styles = {
  formGroup: {
    margin: '10px'
  }
}

class MyForm extends Component {
  submit(model) {
    console.log(model);
  }

  render() {
    return (
      <Form onValidSubmit={::this.submit}>
        <div style={styles.formGroup}>
          <Input type="text" name="name" />
        </div>
        <div style={styles.formGroup}>
          <RadioGroup name="fruit" defaultValue="apple">
            {Radio => (
              <div>
                <Radio value="apple" />Apple
                <Radio value="orange" />Orange
                <Radio value="watermelon" />Watermelon
              </div>
            )}
          </RadioGroup>
        </div>
        <div style={styles.formGroup}>
          <Select name="gender">
            <option value></option>
            <option value="m">Male</option>
            <option value="f">Female</option>
          </Select>
        </div>
        <div style={styles.formGroup}>
          <Textarea name="bio"></Textarea>
        </div>
        <div style={styles.formGroup}>
          <button type="submit">Submit</button>
        </div>
      </Form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('app'));
