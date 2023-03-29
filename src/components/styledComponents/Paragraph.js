import { styled } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';

const Paragraph = styled(ListItemText)(({ theme }) => ({
    textAlign: 'start',
    fontSize: '20px',
    fontFamily: 'inter'
}));

export default Paragraph;