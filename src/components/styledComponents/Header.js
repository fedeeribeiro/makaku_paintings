import { styled } from '@mui/material/styles';
import { ListItemText } from '@mui/material';

const Header = styled(ListItemText)(({ theme }) => ({
    textAlign: 'start',
    fontSize: '50px',
    fontFamily: 'kodchasan'
}));

export default Header;