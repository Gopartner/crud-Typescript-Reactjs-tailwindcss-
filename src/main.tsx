// src/main.tsx

import React from 'react';
import { createRoot } from 'react-dom/client'; // Mengimpor createRoot dari react-dom/client
import './styles/main.css'; // Impor file CSS untuk Tailwind CSS
import App from './App';

const root = document.getElementById('root'); // Mendapatkan elemen root
const rootElement = createRoot(root); // Membuat instance createRoot pada elemen root

rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

