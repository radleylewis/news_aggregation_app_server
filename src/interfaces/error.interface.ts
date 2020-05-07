interface ICustomError extends Error {
  statusCode?: number,
};

export {
  ICustomError,
};