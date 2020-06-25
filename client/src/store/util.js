export const tokenConfig = (getState) => {
  //Headers
  const token = getState().auth.token;
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  if (token) {
    config.headers['x-auth-token'] = token;
  }
  return config;
};
