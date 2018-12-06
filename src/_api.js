import axios from 'axios'

const API_ROOT = ""

const handleErrors = err => {
    if (err && err.response && err.response.status === 401) {
      authStore.logout();
    }
    return err;
  };