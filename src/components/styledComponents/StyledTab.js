import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        height: '49px',
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(24),
        marginLeft: theme.spacing(2),
        color: 'rgba(0, 0, 0, 0.7)',
        '&#ilustraciones:hover': {
            color: 'black',
            backgroundColor: '#4B8AC9',
            transition: '1s ease'
        },
        '&#cuadros:hover': {
            color: 'black',
            backgroundColor: '#F49F00',
            transition: '1s ease'
        },
        '&.Mui-selected#ilustraciones': {
        color: 'black',
        backgroundColor: '#4B8AC9',
        transition: '1s ease'
        },
        '&.Mui-selected#cuadros': {
        color: 'black',
        backgroundColor: '#F49F00',
        transition: '1s ease'
        },
        '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
        }
    })
);

export default StyledTab;