
export function helperValidateProgram(errors, program){
    if (!program) {errors.program = "Debes seleccionar un programa.";} else {errors.program = null} 
    return errors
}

export function helperValidateName(errors, name){
    if (!name) {errors.name = "El campo 'Nombre' es obligatorio.";} else{errors.name = null}
    return errors
}

export function helperValidateSurname(errors, surname){
    if (!surname) {errors.surname = "El campo 'Apellidos' es obligatorio.";} else{errors.surname = null}
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

export function helperValidateAge(errors, age){
    if (!age) {errors.age = "El campo 'Edad' es obligatorio.";} else{errors.age = null}
    return errors
}

 export function helperValidatePhone(errors, phone){
     if (!phone) {errors.phone = "El campo 'Teléfono Principal' es obligatorio.";} else 
     if (phone.length !== 11) {errors.phone  = "El campo 'Telefono' es inválido."} else{errors.phone = null}
     return errors
 }



export function helperValidateAccept(errors, accept){
    if (!accept) {errors.accept = "Debe aceptar los términos del servicio y la política de privacidad.";} else{errors.accept = null}
    return errors
}
