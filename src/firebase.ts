// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBg-aOujAv8E9dyMC287uAyeQ93PUOotYI",
  authDomain: "taoistcalculator.firebaseapp.com",
  projectId: "taoistcalculator",
  storageBucket: "taoistcalculator.firebasestorage.app",
  messagingSenderId: "82203331485",
  appId: "1:82203331485:web:838117e93cb63d28cbbd74",
  measurementId: "G-5H13KRTLLF",
};

const app = initializeApp(firebaseConfig);

// Only initialize analytics if supported
let analytics: ReturnType<typeof getAnalytics> | null = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export { app, analytics };
