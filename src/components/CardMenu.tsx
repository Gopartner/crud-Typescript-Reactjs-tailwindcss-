import React, { useState } from 'react';

interface MenuItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CardMenuProps {
  isFoodSelected: boolean;
  items: MenuItem[];
}

const CardMenu: React.FC<CardMenuProps> = ({ isFoodSelected, items }) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {items.map((item) => (
        <div key={item.id} className="border rounded-lg shadow-md p-4" onClick={() => handleItemClick(item)}>
          <img src={item.image} alt={item.title} className="w-full h-auto" />
          <div className="mt-2">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </div>
      ))}
      {selectedItem && (
        <ModalBox item={selectedItem} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CardMenu;

