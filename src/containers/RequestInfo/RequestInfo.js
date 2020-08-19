import React from 'react';

import { fileUpload, formUpload } from './actions/apiActions';

const RequestInfo = (props) => {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [birthday, setBirthday] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [file, setFile] = React.useState(null);

  const [errorMessage, setErrorMessage] = React.useState(null);

  const submitForm = () => {
    fileUpload({ main: true, file: file[0], name: file[0].name }).then(resFileUplad => {
      console.log('QUE VINO! resFileUplad -> ', resFileUplad);
      formUpload({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        birthDay: 26,
        gender: Number(gender),
        source: 'UTIE',
        file: resFileUplad.data.uuid, // uuid que vino en el res
      }).then(resFormUpload => {
        console.log('QUE VINO! resFormUpload -> ', resFormUpload);
      }).catch(e => console.log('ERRORRRR 1 ', handleError(e)))
    }).catch(e => console.log('ERRORRRR 2 ', handleError(e)))
  }

  const handleError = (e) => {
    const error = e.response ? e.response.data : 'SERVER ERROR';
    setErrorMessage(error);
    return error;
  }

  return (
    <div className="RequestInfo">
      <form>
        <label>Nombre</label>
        <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        <br /><br />
        <label>Apellido</label>
        <input type="text" onChange={(e) => setLastName(e.target.value)} />
        <br /><br />
        <label>Mail</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <label>Telefono</label>
        <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} />
        <br /><br />
        <label>Cumple</label>
        <input type="text" onChange={(e) => setBirthday(e.target.value)} />
        <br /><br />
        <label>Genero</label>
        <input type="text" onChange={(e) => setGender(e.target.value)} />
        <br /><br />
        <label>Archivo</label>
        <input type="file" onChange={(e) => setFile(e.target.files)} />
        <br /><br />
        <button type="button" onClick={submitForm} >Submut!</button>
      </form>

      {errorMessage && (
        <div className="error">
          {JSON.stringify(errorMessage)}
        </div>
      )}
    </div>
  );
}

export default RequestInfo;
