// src/components/DataComponent.tsx

import { useEffect, useState } from 'react';
import { fetchData } from '@/api';

function DataComponent() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData();
      if (fetchedData) {
        setData(fetchedData);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h2>Data List</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataComponent;

