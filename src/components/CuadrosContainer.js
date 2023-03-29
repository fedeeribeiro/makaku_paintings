import React, { useContext } from 'react';
import { Context } from '../context/Context.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';
import { Input, List, ListItem } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Header from './styledComponents/Header.js';
import Paragraph from './styledComponents/Paragraph.js';
import TextInput from './styledComponents/TextInput.js';
import CustomButton from './styledComponents/CustomButton.js';
import HelperText from './styledComponents/HelperText.js';

const CuadrosContainer = () => {
    const { 
        changeHandler,
        submitOrder,
        selectedFile,
        orderName,
        setOrderName,
        orderEmail,
        setOrderEmail,
        orderDescription,
        setOrderDescription,
        displaySize } = useContext(Context);

    return (
        <main>
            <Box  sx={{ display: 'flex',
            padding: displaySize !== 'xs' ? '66px 43px' : '35px 22px',
            backgroundImage: 'url("https://res.cloudinary.com/dlc8f2ajd/image/upload/v1679545225/makaku/cuadros-bg_jn2epd.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            justifyContent: 'space-around'
            }}>
                <Grid container spacing={2} sx={{ width: '100%' }}>
                    <Grid xs={12} md={6} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        <Box>
                            <img style={{ alignSelf: 'flex-end', verticalAlign: 'bottom', bottom: 0, maxWidth: '100%' }} 
                                alt='mockup de cuadro grande'
                                src='https://res.cloudinary.com/dlc8f2ajd/image/upload/v1679923714/makaku/mockup-cuadros-page-large_e77pox.png'
                            />
                            <Header disableTypography sx={{ fontSize: displaySize === 'xs' ? '25px' : '50px', marginTop: '20px' }}>CUADRO<br/>PERSONALIZADO</Header>
                            <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '15px' : '20px', marginTop: '20px' }}>Precio a acordar.</Paragraph>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', justifyContent: 'flex-start' }}>
                        <Box component='form' sx={{ width: '100%' }}>
                            <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '15px' : '20px', alignSelf: 'flex-start' }}>NOMBRE</Paragraph>
                            <TextInput id='orderName' disableUnderline sx={{ width: '100%' }}
                                onChange={ e => { setOrderName(e.target.value) }}
                                value={orderName}/>
                            <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '15px' : '20px', alignSelf: 'flex-start' }}>EMAIL</Paragraph>
                            <TextInput id='orderEmail' disableUnderline sx={{ width: '100%' }}
                                onChange={ e => { setOrderEmail(e.target.value) }}
                                value={orderEmail}/>
                            <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '15px' : '20px', alignSelf: 'flex-start' }}>DESCRIPCIÓN DEL PEDIDO</Paragraph>
                            <TextInput id='orderDescription' disableUnderline multiline rows={4} sx={{ width: '100%' }}
                                onChange={ e => { setOrderDescription(e.target.value) }}
                                value={orderDescription}/>
                            <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '15px' : '20px', alignSelf: 'flex-start' }}>ADJUNTAR IMAGEN</Paragraph>
                            <Input type="file" id="fileUploadButton" onChange={changeHandler} style={{ display: 'none' }} />
                            <CustomButton variant="contained" id='uploadCuadros' sx={{ marginTop: '10px', width: '100%' }}
                                onClick={ () => { document.getElementById('fileUploadButton').click() }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <AttachFileIcon fontSize='small' sx={{ marginRight: '5px' }}/>
                                    {
                                        selectedFile ? <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '12px' : '20px', textAlign: 'center', margin: 0 }}>{selectedFile.name} - {Math.round(selectedFile.size / 1024)}KB</Paragraph>
                                        : <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '12px' : '20px', width: '100%', margin: 0, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>Seleccionar archivo</Paragraph>
                                    } 
                                </Box>
                            </CustomButton>
                            {
                                !selectedFile ? <HelperText>La imagen tiene que estar en formato <em>.png, .jpg</em> o <em>.jpeg</em>.</HelperText> : <></>
                            }
                            <CustomButton variant="contained" id='submitCuadros' sx={{ fontSize: displaySize === 'xs' ? '12px' : '20px', marginTop: '20px', width: '100%' }} 
                                onClick={ (e) => { submitOrder(e) }}
                                disabled={!selectedFile || !orderName || !orderEmail || !orderDescription}>
                                Enviar formulario
                            </CustomButton>
                        </Box>
                    </Grid>
                    <Grid xs={12} sx={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
                        <List>
                            <ListItem>
                                <CircleSharpIcon sx={{ fontSize: displaySize === 'xs' ? '8px' : '12px' }}/>
                                <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '12px' : '20px', marginLeft: '10px' }}>
                                    El cuadro es realizado con acrílicos sobre lienzo. El tamaño del lienzo es a elección. El tamaño estándar es de 18cm x 24cm.
                                </Paragraph>
                            </ListItem>
                            <ListItem>
                                <CircleSharpIcon sx={{ fontSize: displaySize === 'xs' ? '8px' : '12px' }}/>
                                <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '12px' : '20px', marginLeft: '10px' }}>
                                    Una vez recibido el formulario, se confirmará la orden y se enviarán los datos bancarios para realizar el pago.
                                </Paragraph>
                            </ListItem>
                            <ListItem>
                                <CircleSharpIcon sx={{ fontSize: displaySize === 'xs' ? '8px' : '12px' }}/>
                                <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '12px' : '20px', marginLeft: '10px' }}>
                                    El pago se realiza por transferencia bancaria.
                                </Paragraph>
                            </ListItem>
                            <ListItem>
                                <CircleSharpIcon sx={{ fontSize: displaySize === 'xs' ? '8px' : '12px' }}/>
                                <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '12px' : '20px', marginLeft: '10px' }}>
                                    El cuadro será realizado en el plazo de <strong>15 días hábiles</strong> desde el momento del pago.
                                </Paragraph>
                            </ListItem>
                            <ListItem>
                                <CircleSharpIcon sx={{ fontSize: displaySize === 'xs' ? '8px' : '12px' }}/>
                                <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '12px' : '20px', marginLeft: '10px' }}>
                                El <strong>envío del cuadro</strong> será realizado a través de Correo Argentino. También podrá ser retirado en punto de entrega a acordar. Una vez terminado el cuadro, nos contactaremos para coordinar la entrega.
                                </Paragraph>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </main>
    )
}

export default CuadrosContainer;