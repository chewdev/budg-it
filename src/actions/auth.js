import { signInWithPopup, provider, auth } from "../firebase/firebase";

export const login = (uid) => ({
  type: "LOGIN",
  uid,
});

export const startLogin = () => {
  return () => {
    return signInWithPopup(auth, provider);
  };
};

// allow users to use app without signing in
export const loginNoUID = () => ({
  type: "LOGIN",
  uid: "anon",
});

export const logout = () => ({
  type: "LOGOUT",
});

export const startLogout = () => {
  return () => {
    return auth.signOut();
  };
};
