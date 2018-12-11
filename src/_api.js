import axios from 'axios'

const API_ROOT = ""

const handleErrors = err => {
    if (err && err.response && err.response.status === 401) {
      authStore.logout();
    }
    return err;
  };
  const responseBody = res => res.data;

const authen = {
 login: (username,password)=> axios(API_ROOT+"/login")   
}
