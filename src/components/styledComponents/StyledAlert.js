import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

const StyledAlert = styled(Alert)(({ theme }) => ({
    backgroundImage: 'url("https://res.cloudinary.com/dlc8f2ajd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1679923673/makaku/alert-bg_nyyepi.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    opacity: 0.9
}));

export default StyledAlert;