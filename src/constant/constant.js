const API_URL = import.meta.env.VITE_APP_API_ENDPOINT_BASE;
const CREATE_PRODUCT = `${API_URL}/products`;
const UPDATE_PRODUCT = `${API_URL}/products`;
const DELETE_PRODUCT = `${API_URL}/products`;

const CREATE_CATEGORY = `${API_URL}/categories`;
const UPDATE_CATEGORY = `${API_URL}/categories`;
const DELETE_CATEGORY = `${API_URL}/categories`;

export {
  API_URL,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  DELETE_CATEGORY,
};
