import React from 'react'
import FormControl from "./FormControl"
import FormField from "./FormField"
import { Button, Grid } from '@material-ui/core';

const initialValues = {
  email: "",
  dni: "",
  checkboxOption: [],
  radioOption: '',
  selectOption: '',
  country: '',
  birthDate: new Date(),
  phone: '',
  countryPhone: {id: 1, label: "España", iso3166_a2: "es", value: "0034"},
  fileImage: null
}
const onSubmit = values => {
  console.log('Form data', values)
}

const dropdownOptions = [
  { key: 'Select an option', value: '' },
  { key: 'Option 1', value: 'option1' },
  { key: 'Option 2', value: 'option2' },
  { key: 'Option 3', value: 'option3' }
]
const checkboxOptions = [
  { key: 'Option 1', value: 'cOption1' },
  { key: 'Option 2', value: 'cOption2' },
  { key: 'Option 3', value: 'cOption3' }
]
const radioOptions = [
  { key: 'Option 1', value: 'rOption1' },
  { key: 'Option 2', value: 'rOption2' },
  { key: 'Option 3', value: 'rOption3' }
]
function ExampleForm(props) {
  return (
    <FormControl initialValues={initialValues} onSubmit={onSubmit} >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormField typeControl="email" />
        </Grid>
        <Grid item xs={12}>
          <FormField name="dni" label="dni" type="number" />
        </Grid>
        <Grid item xs={12}>
          <FormField
            typeControl="checkbox"
            label='Checkbox topics'
            name='checkboxOption'
            options={checkboxOptions} />
        </Grid>
        <Grid item xs={12}>
          <FormField
            typeControl="radioGroup"
            label='Radio topic'
            name='radioOption'
            options={radioOptions} />
        </Grid>
        <Grid item xs={12}>
          <FormField
            typeControl="select"
            label='Select a topic'
            name='selectOption'
            options={dropdownOptions} />
        </Grid>
        <Grid item xs={12}>
          <FormField typeControl="yearDate" label='Fecha de nacimiento' name='birthDate' />
        </Grid>
        <Grid item xs={12}>
          <FormField
            typeControl="selectCountries"
            label='Select a country'
            name='country'
          />
        </Grid>
        <Grid item xs={12}>
          <FormField
            typeControl="selectPhone"
            label='Select a phone'
            name='phone'
            countryPhone='countryPhone'
          //countryValue='countryPhone'
          />
        </Grid>
        <Grid item xs={12}>
          <FormField
            typeControl="inputFile"
            label='Select a file'
            name='fileImage'
          />
        </Grid>

        <Button type='submit' variant="contained" color="primary" style={{ marginTop: 25 }}>Submit</Button>
      </Grid>
    </FormControl>
  )
}
export default ExampleForm
