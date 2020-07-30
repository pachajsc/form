import React from "react";
import { default as SelectNumber } from 'react-select';
import { phoneItems } from "../../mock/country"
import { ExpandMore, Check, Close } from '@material-ui/icons';
import { TextField, Typography } from '@material-ui/core';

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
    console.log('props');
    if (props.countryValue && props.countryValue.countryPhone !== "") {
      setactiveSelect(false);
    }
  }, [props]);


  return (
    <>
      {activeSelect && (
        <>
          <div className="background-outsideClick" onClick={() => setactiveSelect(false)}></div>
          <SelectNumber
            formatOptionLabel={formatOptionLabel}
            onChange={(value) => {
              console.log('SelectNumber que vino aca ', value);
              props.onChangeSelect(value);
            }}
            autoFocus
            menuIsOpen={true}
            className={"react-select-phone"}
            options={phoneItems}
            placeholder="Seleccione un pais"
            value={props.countryValue ? props.countryValue.id : null}
          />
        </>
      )}

      {!activeSelect && (
        <div className="content-form-box">
          <div className="value-country-number" onClick={handleSelectChange} >
            <Typography variant="body1" component="p" >
              {(
                <>
                  {props.countryValue ? (
                    <>
                      <span className={`flag-icon flag-icon-${props.countryValue.iso3166_a2}`}></span> + { parseInt(props.countryValue.value)} <ExpandMore />
                    </>
                  ) : (
                    <span>-</span>
                  )}
                </>
              )}</Typography>
          </div>
          {(props.success === true) && (
            <Check className="validate-icon icon-success" />
          )}
          {(props.error === false) && (
            <Close className="validate-icon icon-error" />
          )}
          <TextField error={props.error} helperText={props.error} onChange={props.onChangeInput} label="Tu telefono:" name="utie_ampliado_pack[tel1]" id="utie_ampliado_pack_tel1" variant="outlined" className={props.error === true ? "error-field" : (props.success === true) ? "success-field" : ""} />
        </div>
      )}

    </>
  )
}

export default InputPhone;