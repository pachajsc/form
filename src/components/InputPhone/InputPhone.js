import React from "react";
import { default as SelectNumber } from 'react-select';
import { phoneItems } from "../../mock/country"
import {ExpandMore, Check, Close } from '@material-ui/icons';
import { TextField,  Typography } from '@material-ui/core';



const formatOptionLabel = ({ label, iso3166_a2 }) => (
    <>
        <div style={{ display: "flex" }} >
            <div><span className={`flag-icon flag-icon-${iso3166_a2}`}></span> {label}</div>
        </div>
    </>

);

const InputPhone = (props) => {
    const [activeSelect, setactiveSelect] = React.useState(false);
    const handleSelectChange = () => {
        setactiveSelect(true);
    };

    React.useEffect(() => {
        if (props.values.countryPhone !== "") {
            setactiveSelect(false);
        }
    }, [props.values]);


    return (
        <>
            {activeSelect && (
                <>
                    <div className="background-outsideClick" onClick={() => setactiveSelect(false)}></div>
                    <SelectNumber
                        formatOptionLabel={formatOptionLabel}
                        onChange={props.onChangeSelect}
                        autoFocus
                        menuIsOpen={true}
                        className={"react-select-phone"}
                        options={phoneItems}
                        placeholder="Seleccione un pais"

                    />
                </>

            )}
       
            {!activeSelect && (
                <div className="content-form-box">
                    <div className="value-country-number" onClick={handleSelectChange} >
                        <Typography variant="body1" component="p" >
                            {(
                                <>
                                    <span className={`flag-icon flag-icon-${props.values.iso3166_a2}`}></span> +{parseInt(props.values.value)} <ExpandMore />
                                </>
                            )}</Typography>
                    </div>
                    {props.errors.phone === null && <Check className="validate-icon icon-success" />}
                    {props.errors.phone && <Close className="validate-icon icon-error" />}
                    <TextField error={props.errors.phone && true} helperText={props.errors.phone ? props.errors.phone : ""} onChange={props.onChangeInput} label="Tu telefono:" name="utie_ampliado_pack[tel1]" id="utie_ampliado_pack_tel1" variant="outlined" className={props.errors.phone !== null ? "error-field" : "success-field"} />
                </div>
            )}

        </>
    )
}

export default InputPhone;