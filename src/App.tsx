import React, { useEffect, useState } from 'react';
import { ThemeProvider, Typography, Button } from '@mui/material';
import Player from './Player';
import CardMenu from './components/CardMenu';
import theme from './theme';
import MenuManagement from './components/MenuManagement';
import ProductCard from './components/ProductCard';


const App: React.FC = () => {
  const [isFoodSelected, setIsFoodSelected] = useState(true);
  const [menuData, setMenuData] = useState<any>({ makanan: [], minuman: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/Gopartner/json-place-holder-db/db');
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    };

    fetchData();
  }, []);

  const handleToggleMenu = () => {
    setIsFoodSelected(!isFoodSelected);
  };

  const itemsToShow = isFoodSelected ? menuData.makanan : menuData.minuman;

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h4" color="primary">
          Hello, Material UI!
        </Typography>
        <MenuManagement />
        <Button
          variant="contained"
          color="primary"
          onClick={handleToggleMenu}
          style={{ marginTop: '16px' }}
        >
          {isFoodSelected ? 'Minuman' : 'Makanan'}
        </Button>
        <CardMenu isFoodSelected={isFoodSelected} items={itemsToShow} />
      </div>
      <Player />
      <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contoh Penggunaan Material-UI dengan ReactJS, TypeScript, dan Tailwind CSS</h1>
      <ProductCard
        title="Sepatu Olahraga"
        description="Sepatu olahraga nyaman untuk berlari dan berolahraga."
        price="$49.99"
        stock={10}
        imageUrl="https://via.placeholder.com/150"
      />
    </div>
    </ThemeProvider>
  );
};

export default App;

