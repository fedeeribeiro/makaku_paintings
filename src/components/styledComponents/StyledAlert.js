import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

const StyledAlert = styled(Alert)(({ theme }) => ({
    backgroundImage: 'url("https://res.cloudinary.com/makaku-paintings/image/upload/v1680071567/makaku-paintings-app-assets/alert-bg_gyiomk.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    opacity: 0.9
}));

export default StyledAlert;