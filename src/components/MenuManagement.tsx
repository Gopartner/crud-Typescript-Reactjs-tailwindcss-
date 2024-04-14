import React, { useState, useEffect } from 'react';
import Accordion from './Accordion';
import DialogKonfirmasi from './DialogKonfirmasi';

interface MenuItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const MenuManagement: React.FC = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [deleteItemId, setDeleteItemId] = useState<number | null>(null);

  useEffect(() => {
    // Fetch data from API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/Gopartner/json-place-holder-db/db');
        const data = await response.json();
        // Assuming 'makanan' is the key for the food items in the response
        if (data && data.makanan) {
          setItems(data.makanan);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  const handleDeleteClick = (id: number) => {
    setDeleteItemId(id);
  };

  const handleCancelDelete = () => {
    setDeleteItemId(null);
  };

  const handleConfirmDelete = (id: number) => {
    // Implement delete functionality here
    console.log(`Deleting item with ID: ${id}`);
    // Perform delete API call or other actions here

    // Clear deleteItemId to close the dialog
    setDeleteItemId(null);
  };

  return (
    <div>
      {items.map((item) => (
        <Accordion key={item.id} title={item.title}>
          <img src={item.image} alt={item.title} />
          <p>{item.description}</p>
          <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
        </Accordion>
      ))}

      {/* Dialog Konfirmasi Hapus */}
      <DialogKonfirmasi
        isOpen={deleteItemId !== null}
        onConfirm={() => {
          if (deleteItemId !== null) {
            handleConfirmDelete(deleteItemId);
          }
        }}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default MenuManagement;

