import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <main>
            <Stack useFlexGap={true} sx={{ display: 'flex', padding: '50px 0', backgroundColor: '#4B8AC9', alignItems: 'center' }}>
                <Button sx={{ color: '#FFFFFF' }} href='https://instagram.com/makakupaintings' target='_blank'>
                    <InstagramIcon sx={{ pr: 1 }}/> @makakupaintings
                </Button>
                <Button sx={{ color: '#FFFFFF', fontSize: '11px', textTransform: 'lowercase' }} href='https://fedeeribeiro.dev' target='_blank'>
                    site by fedeeribeiro
                </Button>
            </Stack>
        </main>
    )
}

export default Footer;