import React from 'react'
import InputField from './InputField'
import EmailField from './EmailField'
import CheckboxGroup from './CheckboxGroup'
import RadioGroup from './RadioGroup'
import SelectForm from './SelectForm'
import InputDate from './InputDate'
import SelectCountries from "./SelectCountries"
import InputSelectPhone from "./InputSelectPhone"
import InputFile from "./InputFile"

function FormField (props) {
  const { typeControl, ...rest } = props
  switch (typeControl) {
    case 'email':
        return <EmailField {...rest} /> 
    case 'textarea':
        return <InputField {...rest} textarea/>   
    case 'checkbox':
        return <CheckboxGroup {...rest}/>
    case 'radioGroup':
        return <RadioGroup {...rest}/>  
    case 'select' :
        return <SelectForm {...rest}/>  
    case 'yearDate' :
      return <InputDate {...rest}/>  
    case 'selectCountries' :
      return <SelectCountries {...rest}/>  
    case 'selectPhone' :
      return <InputSelectPhone {...rest} />  
      case 'inputFile' :
        return <InputFile {...rest} />      
    default:
        return <InputField {...rest} />
  }
}

export default FormField
