
// export function helperValidateProgram(errors, programa_id){
//     if (!programa_id) {errors.programa_id = "Debes seleccionar un programa.";} else {errors.programa_id = null} 
//     return errors
// }

export function helperValidateName(errors, firstName){
    if (!firstName) {errors.firstName = "El campo 'Nombre' es obligatorio.";} else{errors.firstName = null}
    return errors
}

export function helperValidateSurname(errors, lastName){
    if (!lastName) {errors.lastName = "El campo 'Apellido' es obligatorio.";} else{errors.lastName = null}
    return errors
}

export function helperValidateEmail(errors, email){
    if (!email) {
        errors.email = "El campo 'E-mail' es obligatorio.";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = "El campo 'E-mail' es inválido.";
      } else {errors.email = null}
      return errors
}

export function helperValidateAge(errors, birthDay){
    if (!birthDay) {errors.birthDay = "El campo 'Edad' es obligatorio.";} else{errors.birthDay = null}
    return errors
}

 export function helperValidatePhone(errors, phoneNumber){
     if (!phoneNumber) {errors.phoneNumber = "El campo 'Teléfono Principal' es obligatorio.";} else 
     if (phoneNumber.length !== 11) {errors.phoneNumber  = "El campo 'Telefono' es inválido."} else{errors.phoneNumber = null}
     return errors
 }



export function helperValidateAccept(errors, source){
    if (!source) {errors.source = "Debe aceptar los términos del servicio y la política de privacidad.";} else{errors.source = null}
    return errors
}
