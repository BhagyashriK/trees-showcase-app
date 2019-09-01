// Fetch Tree list using FETCH API can be moved to interceptor to handle headers, errors etc
export const getTrees = () => {
  const url = `${process.env.REACT_APP_API_BASE_URL}ecosia-frontend-developer/trees.json`;

  return fetch(url)
    .then(response => response.json())
    .then(response => response.trees)
    .catch(error => Promise.reject(error.message));
};
