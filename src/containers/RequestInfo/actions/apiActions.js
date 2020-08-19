import axios from 'axios';
import config from './../../../config'

export const fileUpload = (fileData) => {
  const headerConfig = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  };

  const formData = new FormData();
  formData.append('file', fileData.file);
  formData.append('name', fileData.name);
  formData.append('main', fileData.main);

  return axios.post(`${config.apipath}/api/file/`, formData, headerConfig)
}


export const formUpload = (fileData) => {
  return axios.post(`${config.apipath}/api/customer-information/`, JSON.stringify(fileData))
}


