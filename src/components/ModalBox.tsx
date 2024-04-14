import React from 'react';

interface MenuItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ModalBoxProps {
  item: MenuItem;
  onClose: () => void;
}

const ModalBox: React.FC<ModalBoxProps> = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8">
        <button className="absolute top-4 right-4" onClick={onClose}>
          Close
        </button>
        <img src={item.image} alt={item.title} className="w-full h-auto" />
        <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
        <p className="text-sm text-gray-500 mt-2">{item.description}</p>
      </div>
    </div>
  );
};

export default ModalBox;

