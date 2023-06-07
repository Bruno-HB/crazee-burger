export const getFilteredArrayWithoutSelected = (array, id) =>
  array.filter((product) => product.id !== id);

export const parseJson = (array) => JSON.parse(JSON.stringify(array));
