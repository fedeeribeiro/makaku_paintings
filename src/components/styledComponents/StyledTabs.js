import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps = {{ display: 'none', height: 0 }}
    />
    ))({
        '& .MuiTabs-flexContainer': {
            height: '49px'
        },
        '& .MuiTabs-indicator': {
            display: 'none'
        }
});

export default StyledTabs;