export const updateObject = (object, updated) => {
  return {
    ...object,
    ...updated,
  };
};
