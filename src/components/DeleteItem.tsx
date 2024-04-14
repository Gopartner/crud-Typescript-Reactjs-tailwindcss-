import React, { useState } from 'react';
import axios from 'axios';

interface DeleteItemProps {
  itemType: 'makanan' | 'minuman'; // Tipe item yang akan dihapus ('makanan' atau 'minuman')
}

const DeleteItem: React.FC<DeleteItemProps> = ({ itemType }) => {
  const [itemId, setItemId] = useState<number | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const handleDelete = async () => {
    if (!itemId) return; // Jika itemId kosong, tidak melakukan apa-apa

    try {
      setIsDeleting(true);
      const endpoint = `https://my-json-server.typicode.com/Gopartner/json-place-holder-db/${itemType}/${itemId}`;
      await axios.delete(endpoint);
      console.log(`Item with ID ${itemId} deleted successfully from ${itemType}.`);
      setItemId(null); // Reset itemId setelah penghapusan berhasil
    } catch (error) {
      console.error('Error deleting item:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Delete {itemType === 'makanan' ? 'Food' : 'Drink'} Item</h2>
      <div className="flex items-center gap-4 mb-4">
        <input
          type="number"
          placeholder="Enter ID to delete"
          value={itemId ?? ''}
          onChange={(e) => setItemId(Number(e.target.value))}
          className="w-full px-3 py-2 border rounded-md"
        />
        <button
          onClick={handleDelete}
          disabled={!itemId || isDeleting}
          className={`bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Delete
        </button>
      </div>
      {isDeleting && <p className="text-red-500">Deleting item...</p>}
    </div>
  );
};

export default DeleteItem;

