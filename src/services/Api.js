import axios from 'axios';

export default () => axios.create({
  baseURL: 'https://rwthr.herokuapp.com/',
});
