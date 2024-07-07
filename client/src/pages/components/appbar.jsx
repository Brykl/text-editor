import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TemporaryDrawer from './drawer';


export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1}} >
      <AppBar position="static">
        <Toolbar variant="dense" sx={{height: '13vh'}}>
                <TemporaryDrawer />
          <Typography variant="h6" color="inherit" component="div">
            VizMaster
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
