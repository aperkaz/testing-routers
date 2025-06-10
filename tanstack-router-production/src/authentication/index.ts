const LOGIN_KEY = "login";
export default {
  isAuthenticated: () => sessionStorage.getItem(LOGIN_KEY) === "true",
  fakeLogin: () => sessionStorage.setItem(LOGIN_KEY, "true"),
  fakeLogout: () => sessionStorage.clear(),
};
