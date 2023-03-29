import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)(({ theme }) => ({
    fontSize: '20px',
    fontFamily: 'inter',
    borderRadius: '20px',
    color: 'white',
    backgroundColor: 'black',
    '&#uploadIlustraciones:hover': {
        backgroundColor: '#4B8AC9',
        color: 'black',
        fontWeight: 'bold'
    },
    '&#submitIlustraciones:hover': {
        backgroundColor: 'white',
        border: '1px solid',
        color: 'black',
        fontWeight: 'bold'
    },
    '&#orderIlustraciones:hover': {
        backgroundColor: '#4B8AC9',
        color: 'black',
        fontWeight: 'bold'
    },
    '&#orderCuadros:hover': {
        backgroundColor: '#F49F00',
        color: 'black',
        fontWeight: 'bold'
    }
}));

export default CustomButton;