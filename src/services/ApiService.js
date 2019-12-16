/* eslint-disable camelcase */
import ajax from './AxiosService';
const API_URL = 'https://jsonplaceholder.typicode.com/';
const ApiService = function() {
  const getUsers = () => {
    return ajax.get(API_URL + 'todos1/api/users');
  };

  return {
    getUsers,
  };
};

export default ApiService();
