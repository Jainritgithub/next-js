'use client'
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'AIzaSyDLNyuAqokLrqv4FgHBvNm4uaQOZ7aYyZA',
  authDomain: 'alpha-bi-32fae.firebaseapp.com',
  projectId: 'alpha-bi-32fae',
  storageBucket: 'alpha-bi-32fae.appspot.com',
  messagingSenderId: '362838916612',
  appId: '1:362838916612:web:2caf1f0dffbca65fab3f51',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
