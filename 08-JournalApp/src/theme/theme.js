import {createTheme} from '@mui/material';
import {red} from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary:{
            main: '#576552'
        },
        secondary: {
            main: '#543884'
        },
        error: {
            main: red.A400
        }
    }
});