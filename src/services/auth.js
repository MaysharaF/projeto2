const TOKEN_KEY = 'd41d8cd98f00b204e9800998ecf8427e'

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const isAuthenticated = async () => {
  const token = getToken();

  if (token === null) {
    return false;
  }
  return true;
};

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};