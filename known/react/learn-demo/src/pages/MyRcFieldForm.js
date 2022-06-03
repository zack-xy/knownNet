import React, { Component } from 'react'
import Form, {Field} from '../components/my-rc-field-form'

export default class MyRcFieldForm extends Component {
  render() {
    return (
      <div>
        <h1>MyRcFieldForm</h1>
        <Form>
          <Field>aaaa</Field>
        </Form>
      </div>
    )
  }
}
