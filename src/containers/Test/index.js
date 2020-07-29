import React from "react";
const Test = () => {

  const [isSubmited, setIsSubmited] = React.useState(false);
  const submited = (goodOrBad) => {
    setIsSubmited(true);
    console.log('isGoodOrIsBad', `${goodOrBad ? 'GOOD' : 'BAD'}`);
    console.log('CON ESTOS VALORES', formObj);
  }

  const [formObj, setFormObj] = React.useState({
    nombre: null, // matchea con el name que le pasas al input
    apellido: null, // matchea con el name que le pasas al input
  });

  return (
    <>
      <h1>Este es un form para testear</h1>
      <Form onSubmit={submited} >
        <Input
          name='nombre' //isRequired
          isSubmited={isSubmited}
          type="text"
          label="Nombre"
          defaultValue=""
          onChange={(nombre) => setFormObj(Object.assign({}, formObj, { nombre }))}
          validate={(inputValue) => (inputValue.length > 4)}
          errorText="El valor del campo tiene que superar los 4 caracteres de largo"
        />
        <br />
        <Input
          name='apellido' //isRequired
          isSubmited={isSubmited}
          type="text"
          label="Apellido"
          defaultValue=""
          onChange={(apellido) => setFormObj(Object.assign({}, formObj, { apellido }))}
          validate={(inputValue) => (inputValue.length > 2)}
          errorText="El valor del campo tiene que superar los 2 caracteres de largo"
        />
        <br />
        <Input
          name="numero"
          isSubmited={isSubmited}
          type="number" />
        <br />
        <button type="submit">Mande noma'</button>
      </Form>
    </>
  )
}



export const Input = ({ name, type = 'text', label, defaultValue = null, onChange = () => { }, validate = () => true, isSubmited = false, errorText = null }) => {

  let inputRef = React.useRef(null);
  const [value, setValue] = React.useState(defaultValue);
  const [isValidated, setIsValidated] = React.useState(null);

  const checkValidation = () => {
    if (isSubmited) {
      const isValid = validate(value);
      inputRef.current.goodOrBad = isValid;
      setIsValidated(isValid);
    }
  }

  React.useEffect(() => {
    onChange(value);
    checkValidation();
  }, [value]);

  React.useEffect(() => {
    checkValidation();
  }, [isSubmited]);

  return (
    <div className="customInput" ref={inputRef} >
      {label && (<label>{label}</label>)}
      <input name={name} type={type} defaultValue={defaultValue} onChange={(e) => setValue(e.target.value)} />
      <p>
        {isValidated === true && ('ESTA BIEN')}
        {isValidated === false && (`ESTA MAL ${errorText ? errorText : ''}`)}
        {isValidated === null && ('NO ESTA VALIDADO')}
      </p>
    </div>
  )
}


export const Form = ({ children, onSubmit }) => {
  let formRef = React.useRef(null);

  const submit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('QUE VINO ACA', formRef);
    /*
    let children = [];
    let result = true;

    for (let index = 0; index < formRef.current.children.length; index++) {
      const element = formRef.current.children[index];
      console.log('element', [element], element.goodOrBad, element.localName);
      if (element.goodOrBad !== undefined) children.push(element);
    }

    for (let index = 0; index < children.length; index++) {
      const element = children[index];
      if (!element.goodOrBad) result = false;
    }
    */
    onSubmit();
  }
  return (
    <form ref={formRef} onSubmit={submit}>
      { children }
    </form>
  )
}


export default Test

