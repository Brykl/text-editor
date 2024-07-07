import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import BarChartIcon from '@mui/icons-material/BarChart';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import { createTheme, Grid } from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import PieChartIcon from '@mui/icons-material/PieChart';
import BasicModal from './modalWindow';



export default function SimpleContainer() {

    const [openModal, setOpenModal] = React.useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    const icon = (IconName, text, someFunction) => {
        return (
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2, height: '30vh',
                '&:hover': {
                    backgroundColor: 'rgb(212, 207, 207)',
                }
             }}>
                <Box >
                    <IconName sx={{fontSize: '70px'}}/>
                </Box>
                <Button onClick={someFunction}>Create new {text}</Button>
                
            </Card>
        )
    }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100vw">
        <Box sx={{ bgcolor: '#cfe8fc', height: '80vh', marginTop: '10px', display: 'flex', alignItems: 'start', justifyContent: 'center' }}>
            <Grid container spacing={2} padding={3}>
                <Grid item xs={4}>
                    {icon(ListAltIcon, 'Table', handleOpenModal)}
                </Grid>
                <Grid item xs={4}>
                    {icon(BarChartIcon, 'Diagram')}
                </Grid>
                <Grid item xs={4}>
                    {icon(AspectRatioIcon, '2d Space')}
                </Grid>
                <Grid item xs={4}>
                    {icon(TextSnippetIcon, 'text')}
                </Grid>
                <Grid item xs={4}>
                    {icon(AccountTreeIcon, 'diagram tree')}
                </Grid>
                <Grid item xs={4}>
                    {icon(PieChartIcon, 'diagram')}
                </Grid>
            </Grid>
        </Box>
        <BasicModal open={openModal} handleClose={handleCloseModal} />
      </Container>
    </React.Fragment>
  );
}
