import { Box } from '@mui/material';
import '../App.css';
import SimpleContainer from './components/container';
import ListAltIcon from '@mui/icons-material/ListAlt';

export default function Home() {
    return (
        <>
            <SimpleContainer>
                <Box sx={{height: '100px', width: '100px', bgcolor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <ListAltIcon />
                </Box>
            </SimpleContainer>
        </>
    );
}
