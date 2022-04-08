import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { useState, useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyBoIQ6Tw3aSdUJyWUHGzswfHQq70cYuBUc",
  authDomain: "scheduler-16335.firebaseapp.com",
  databaseURL: "https://scheduler-16335-default-rtdb.firebaseio.com",
  projectId: "scheduler-16335",
  storageBucket: "scheduler-16335.appspot.com",
  messagingSenderId: "247970157406",
  appId: "1:247970157406:web:599891401eead8687a75cf",
  measurementId: "G-4BYW56VV2D"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    if (devMode) { console.log(`loading ${path}`); }
    return onValue(dbRef, (snapshot) => {
      const val = snapshot.val();
      if (devMode) { console.log(val); }
      setData(transform ? transform(val) : val);
      setLoading(false);
      setError(null);
    }, (error) => {
      setData(null);
      setLoading(false);
      setError(error);
    });
  }, [path, transform]);

  return [data, loading, error];
};

export const setData = (path, value) => (
  set(ref(database, path), value)
);