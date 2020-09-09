import React from 'react'
import { Formik, Form } from 'formik'

function FormControl(props) {
  return (
    <Formik
      initialValues={props.initialValues}
      onSubmit={props.onSubmit}
    >
      {formik => {
        console.log('formik props', formik)
        return (
          <Form>
            {props.children}
          </Form>
        )
      }}

    </Formik>
  )
}

export default FormControl
