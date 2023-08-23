import { useState, useEffect, useDebugValue } from "react";

const saveTheValue = (key, defaultValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) {
    return savedValue;
  }
  if (defaultValue instanceof Function) {
    return defaultValue();
  }
  return defaultValue;
};

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    return saveTheValue(key, defaultValue);
  });

  useDebugValue(key, value);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
