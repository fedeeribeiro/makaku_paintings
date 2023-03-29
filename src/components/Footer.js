import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <main>
            <Box sx={{ display: 'flex', padding: '74px 0', backgroundColor: '#4B8AC9', justifyContent: 'space-around' }}>
                <Button sx={{ color: '#FFFFFF' }} href='https://instagram.com/makakupaintings' target='_blank'>
                    <InstagramIcon sx={{ pr: 1 }}/> @makakupaintings
                </Button>
            </Box>
        </main>
    )
}

export default Footer;