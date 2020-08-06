import React from "react";
import { Field } from 'formik'
import { phoneItems } from "../mock/country"
import FormField from "./FormField"
import { ExpandMore } from '@material-ui/icons';
import { TextField, Typography } from '@material-ui/core';

const InputSelectPhone = ({
    countryValue,
    countryPhone,
    name,
    value,
    label,
    ...rest

}) => {
    const [activeSelect, setactiveSelect] = React.useState(false);
    const handleSelectChange = () => {
        setactiveSelect(true);
    };

    React.useEffect(() => {
        if (countryValue && countryValue.countryPhone !== "") {
            setactiveSelect(false);
        }
    }, []);
    const validateField = value => {
        let errors
        if (!value) {
            errors = `El campo ${name} es obligatorio`
        }
        return errors
    }

    

    return (
        <>

            <>
                {activeSelect && (
                    <>
                        <div className="background-outsideClick" onClick={() => setactiveSelect(false)}></div>
                        <FormField
                            typeControl="selectCountries"
                            label='Select a country'
                            name={countryPhone}
                            autoFocus
                            menuIsOpen={true}
                        />
                    </>
                )}

                {!activeSelect && (
                    <div className="content-form-box">
                        <div className="value-country-number" onClick={handleSelectChange} >
                            <Typography variant="body1" component="p" >
                                {(
                                    <>
                                        {countryValue ? (
                                            <>
                                                <span className={`flag-icon flag-icon-${phoneItems.countryValue.iso3166_a2}`}></span> + {parseInt(phoneItems.countryValue.value)} <ExpandMore />
                                            
                                            </>
                                        ) : (
                                                <span>-</span>
                                            )}
                                    </>
                                )}</Typography>
                        </div>
                        <Field name={name} validate={validateField}>
                            {({ form, field }) => {
                                return (
                                    <TextField
                                        variant="outlined"
                                        htmlFor={name}
                                        id={name}
                                        label={label}
                                        error={form.errors[name] && form.touched[name]}
                                        helperText={form.errors[name] && form.touched[name] ? form.errors[name] : null}
                                        {...rest}
                                        {...field}
                                    />
                                )
                            }}
                        </Field>
                    </div>
                )}
            </>

        </>
    )
}

export default InputSelectPhone;