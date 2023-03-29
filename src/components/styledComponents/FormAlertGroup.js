import { useContext } from 'react';
import { Context } from '../../context/Context.js';
import FormAlert from './FormAlert.js';
import Box from '@mui/material/Box';

const FormAlertGroup = () => {
    const { showAlert, setShowAlert } = useContext(Context);
    
    return (
        <>
            { showAlert ?
                <Box>
                    <Box sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        background: 'black',
                        opacity: 0.6,
                        zIndex: 998,
                        height: '100%',
                        width: '100%',
                    }}>
                    </Box>
                    <Box sx={{ maxWidth: '60%', position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', zIndex: 999 }}>
                        <FormAlert setShowAlert={setShowAlert}/>
                    </Box>
                </Box>
                : <></>
            }
        </>
    )
}

export default FormAlertGroup;