import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Offline support only in production builds. In dev, a service worker serves stale
// modules and makes the app look frozen after code changes.
if ('serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => undefined);
  } else {
    navigator.serviceWorker.getRegistrations().then((rs) => rs.forEach((r) => r.unregister()));
    if ('caches' in window) caches.keys().then((ks) => ks.forEach((k) => caches.delete(k)));
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
