// Contoh komponen React menggunakan Tailwind CSS

import React from 'react';

function MyComponent() {
  return (
    <div className="bg-blue-500 p-4 rounded-md shadow-lg">
      <h1 className="text-white text-2xl">Hello, Tailwind CSS!</h1>
      <p className="text-white mt-2">This is a Tailwind CSS example.</p>
      <button className="bg-white text-blue-500 px-4 py-2 mt-4 rounded-md shadow-sm hover:bg-blue-400 hover:text-white">
        Click me
      </button>
    </div>
  );
}

export default MyComponent;

