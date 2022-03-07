import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  child,
  get,
  push,
  set,
  remove,
  update,
} from "firebase/database";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  getAuth,
} from "firebase/auth";

import keys from "../config/keys";

const config = {
  apiKey: keys.FIREBASE_API_KEY,
  authDomain: keys.FIREBASE_AUTH_DOMAIN,
  databaseURL: keys.FIREBASE_DATABASE_URL,
  projectId: keys.FIREBASE_PROJECT_ID,
  storageBucket: keys.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: keys.FIREBASE_MESSAGING_SENDER_ID,
  appId: keys.FIREBASE_APP_ID,
};

const app = initializeApp(config);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
const auth = getAuth(app);
function isAuthed() {
  return !!auth.currentUser;
}

const database = getDatabase(app);

export {
  auth,
  isAuthed,
  onAuthStateChanged,
  provider,
  signInWithPopup,
  ref,
  database,
  get,
  child,
  push,
  set,
  remove,
  update,
};
