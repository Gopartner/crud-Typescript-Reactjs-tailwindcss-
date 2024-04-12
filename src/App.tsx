import React from 'react';
import { Button, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h1" color="primary">
          Hello, Material UI!
        </Typography>
        <Button variant="contained" color="primary">
          Click Me
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;

