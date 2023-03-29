import { useEffect } from 'react';
import Header from './Header.js';
import Paragraph from './Paragraph.js';
import Stack from '@mui/material/Stack';
import StyledAlert from './StyledAlert.js';

const FormAlert = (props) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            props.setShowAlert(false);
        }, 5000);
    
        return () => {
            clearTimeout(timeout);
        }
    });

    return (
        <main>
            <StyledAlert icon={false} sx={{ color: 'white' }}>
                <Stack spacing={2}>
                    <Header disableTypography sx={{ fontSize: '40px', textAlign: 'center' }}>
                        ¡TU FORMULARIO HA SIDO REGISTRADO CON ÉXITO!
                    </Header>
                    <Paragraph disableTypography sx={{ alignSelf: 'center' }}>
                        Nos contactaremos con vos a la brevedad.
                    </Paragraph>
                    <img style={{ alignSelf: 'center', maxWidth: '60px', verticalAlign: 'bottom', bottom: 0 }}
                        alt='makaku logo' 
                        src='https://res.cloudinary.com/dlc8f2ajd/image/upload/v1680009704/makaku/logoAlert_l0ut7i.svg' 
                    />
                </Stack>
            </StyledAlert>
        </main>
    )
}

export default FormAlert;