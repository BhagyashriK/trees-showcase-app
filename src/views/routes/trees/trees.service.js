//import fetchJsonp from "fetch-jsonp";

export const getTrees = () => {
  const url =
    "https://s3.eu-central-1.amazonaws.com/ecosia-frontend-developer/trees.json";

  return fetch(url)
    .then(response => response.json())
    .then(response => response.trees)
    .catch(error => error);
};
