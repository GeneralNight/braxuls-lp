import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyDy_0qhqFgrXuF8s7JOczgFNjCQSgHq61s",
    authDomain: "braxuls.firebaseapp.com",
    projectId: "braxuls",
    storageBucket: "gs://braxuls.appspot.com",
    messagingSenderId: "176788370237",
    appId: "1:176788370237:web:f5c631928da2d5a1c04b54",
    measurementId: "G-5EMBN4LLEV",
  };

  const app = initializeApp(firebaseConfig);

  const storage = getStorage(app);
  const firestore = getFirestore(app);

  return {
    provide: {
      firestore,
      storage,
    },
  };
});
