import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface FoodItem {
  id: number;
  title: string;
  description: string;
  image: string;
  token: string;
}

const ReadItems: React.FC = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get<FoodItem[]>('https://my-json-server.typicode.com/Gopartner/json-place-holder-db/makanan');
        setFoodItems(response.data);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };

    fetchFoodItems();
  }, []);

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Food Items List</h2>
      <div className="grid grid-cols-1 gap-4">
        {foodItems.map((item) => (
          <div key={item.id} className="border p-4 rounded-md">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadItems;

