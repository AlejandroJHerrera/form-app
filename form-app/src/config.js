import axios from 'axios';

const URL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:4656'
    : 'http://';

const customInstance = axios.create({
  baseURL: URL,
  headers: {
    Accept: 'application/json',
  },
});

export default customInstance;
