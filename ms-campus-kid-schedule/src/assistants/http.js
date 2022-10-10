const axios = require('axios');

module.exports.get = (url, query = {}, data = {}) => {
  let queryString = '?';
  if (query) {
    Object.keys(query).forEach((key) => {
      if (query[key]) {
        queryString += `${key}=${query[key]}&`;
      }
    });
  }

  return new Promise((resolve, reject) => {
    axios
      .get(url + (queryString.length == 1 ? '' : queryString), data)
      .then((response) => resolve(response))
      .catch((error) => {
        let exception = Object.assign(error);
        exception.query = query;
        exception.data = data;
        reject(error);
      });
  });
};

module.exports.post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((response) => resolve(response))
      .catch((error) => {
        let exception = Object.assign(error);
        exception.data = data;
        reject(exception);
      });
  });
};

module.exports.put = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, data)
      .then((response) => resolve(response))
      .catch((error) => {
        let exception = Object.assign(error);
        exception.data = data;
        reject(exception);
      });
  });
};

module.exports.patch = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, data)
      .then((response) => resolve(response))
      .catch((error) => {
        let exception = Object.assign(error);
        exception.data = data;
        reject(exception);
      });
  });
};

module.exports.deleted = (url, data) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, data)
      .then((response) => resolve(response))
      .catch((error) => {
        let exception = Object.assign(error);
        exception.data = data;
        reject(exception);
      });
  });
};

module.exports.setDefaultHeaders = () => {
  axios.defaults.headers.common['Authorization'] = '';
  axios.defaults.headers.common['X-CSRF-Token'] = '';
  axios.defaults.headers.common['Cookie'] = [];
  axios.defaults.headers.common['Content-Type'] = '*/*';
};

module.exports.setHeaderAuthorization = (token) => {
  axios.defaults.headers.common['Authorization'] = token;
};

module.exports.setHeaderToken = (token) => {
  axios.defaults.headers.common['X-CSRF-Token'] = token;
};

module.exports.setHeaderCookie = (token) => {
  axios.defaults.headers.common['Cookie'] = token;
};

module.exports.setHeaderBaseURL = (URL) => {
  axios.defaults.baseURL = URL;
};
