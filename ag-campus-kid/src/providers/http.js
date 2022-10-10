const axios = require("axios");

const defaultHeaders = {
  "Content-Type": "application/json",
};
const buildUrlWithQuery = (url, query) => {
  let queryString = "?";
  if (query) {
    Object.keys(query).forEach((key) => {
      if (query[key]) {
        queryString += `${encodeURIComponent(key)}=${encodeURIComponent(
          query[key]
        )}&`;
      }
    });
  }
  return url + (queryString.length == 1 ? "" : queryString);
};

module.exports.get = (url, query = {}, token = "") => {
  return new Promise((resolve, reject) => {
    axios
      .get(buildUrlWithQuery(url, query), {
        headers: { ...defaultHeaders, Authorization: token },
      })
      .then((response) => resolve(response.data))
      .catch((error) => {
        let exception = Object.assign(error);
        exception.query = query;
        reject(exception);
      });
  });
};
module.exports.getGeneral = (url, query = {}, token = "") => {
  return new Promise((resolve, reject) => {
    axios
      .get(buildUrlWithQuery(url, query), {
        headers: { ...defaultHeaders, authorization: token },
      })
      .then((response) => resolve(response.data))
      .catch((error) => {
        let exception = Object.assign(error);
        exception.query = query;
        reject(error);
      });
  });
};
module.exports.postWithQuery = (url, query = {}, data, token = "") => {
  return new Promise((resolve, reject) => {
    axios
      .post(buildUrlWithQuery(url, query), data, {
        headers: { ...defaultHeaders, Authorization: token },
      })
      .then((response) => resolve(response.data))
      .catch((error) => {
        let exception = Object.assign(error);
        exception.data = data;
        exception.query = query;
        reject(exception);
      });
  });
};
module.exports.postGeneral = (url, data, token = "") => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: { ...defaultHeaders, authorization: token },
      })
      .then((response) => resolve(response.data))
      .catch((error) => {
        let exception = Object.assign(error);
        exception.data = data;
        reject(exception);
      });
  });
};

module.exports.post = (url, data, token = "") => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data, {
        headers: { ...defaultHeaders, Authorization: token },
      })
      .then((response) => resolve(response.data))
      .catch((error) => {
        let exception = Object.assign(error);
        exception.data = data;
        reject(exception);
      });
  });
};

module.exports.put = (url, data, token = "") => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, data, {
        headers: { ...defaultHeaders, Authorization: token },
      })
      .then((response) => resolve(response.data))
      .catch((error) => {
        let exception = Object.assign(error);
        exception.data = data;
        reject(exception);
      });
  });
};

module.exports.patch = (url, data, token = "") => {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, data, {
        headers: { ...defaultHeaders, Authorization: token },
      })
      .then((response) => resolve(response.data))
      .catch((error) => {
        let exception = Object.assign(error);
        exception.data = data;
        reject(exception);
      });
  });
};

module.exports.deleted = (url, data, token = "") => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, data, {
        headers: { ...defaultHeaders, Authorization: token },
      })
      .then((response) => resolve(response.data))
      .catch((error) => {
        let exception = Object.assign(error);
        exception.data = data;
        reject(exception);
      });
  });
};
