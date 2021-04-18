const TOKEN_KEY = '@projetoWeb2/acess_token'

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