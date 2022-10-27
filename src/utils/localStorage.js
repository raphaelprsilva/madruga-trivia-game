export const setItemToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItemFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};

export const removeItemFromLocalStorage = (key) => {
  localStorage.removeItem(key);
};
