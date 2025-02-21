// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAapikus60_AszS3guaVDeIzcuwRJJaLI4",
//   authDomain: "interactive-task-manager-65940.firebaseapp.com",
//   projectId: "interactive-task-manager-65940",
//   storageBucket: "interactive-task-manager-65940.firebasestorage.app",
//   messagingSenderId: "1068044668681",
//   appId: "1:1068044668681:web:0f4099298030e138da8dd8"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const auth = getAuth(app);

export default auth;

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;