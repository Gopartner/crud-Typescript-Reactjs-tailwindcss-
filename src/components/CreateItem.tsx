import React, { useState } from 'react';
import axios from 'axios';

const CreateItem: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleCreate = async () => {
    try {
      const response = await axios.post('https://my-json-server.typicode.com/Gopartner/json-place-holder-db/db', {
        title,
        description,
      });
      console.log('Item created:', response.data);
      // Tambahkan logika lainnya setelah berhasil membuat item
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Create New Item</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 mb-4 border rounded-md"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-3 py-2 mb-4 border rounded-md"
      />
      <button onClick={handleCreate} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Create Item
      </button>
    </div>
  );
};

export default CreateItem;

