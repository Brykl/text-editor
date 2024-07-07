import React from 'react';
import { Card, CardContent, CardActions, Button, Typography, IconButton, Icon } from '@mui/material';
import { Box } from '@mui/system';
import GridOnIcon from '@mui/icons-material/GridOn';



const IconCard = (Icon, text) => {
  return (
    <Card sx={{ Width: '100px', height: '100px'}}>
        <Box >
          <Icon/>
        </Box>
            <Button>{text}</Button>
    </Card>
  );
};

export default IconCard;
