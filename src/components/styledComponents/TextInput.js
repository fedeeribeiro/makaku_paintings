import { styled } from '@mui/material/styles';
import Input from '@mui/material/Input';

const TextInput = styled(Input)(({ theme }) => ({
    '& .MuiInput-input': {
        borderRadius: 8,
        marginBottom: '20px',
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? 'white' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: '16px',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(',')
    }
}));

export default TextInput;