import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Header from './styledComponents/Header.js';
import Paragraph from './styledComponents/Paragraph.js';
import CustomButton from './styledComponents/CustomButton.js';
import { Context } from '../context/Context.js';
import CustomCarousel from './styledComponents/CustomCarousel.js';

const HomeContainer = () => {
    const { displaySize } = useContext(Context);
    
    const images = [
        'https://res.cloudinary.com/dlc8f2ajd/image/upload/v1679923713/makaku/mockup-cuadros-home-1_v2j6qq.png',
        'https://res.cloudinary.com/dlc8f2ajd/image/upload/v1679923713/makaku/mockup-cuadros-home-2_fknjwt.png',
        'https://res.cloudinary.com/dlc8f2ajd/image/upload/v1679923713/makaku/mockup-cuadros-home-3_ecytcl.png',
        'https://res.cloudinary.com/dlc8f2ajd/image/upload/v1679923713/makaku/mockup-cuadros-home-4_sjmcxs.png'
      ];

    return (
        <main>
            <Box sx={{ display: 'flex',
                padding: displaySize !== 'xs' ? '66px 43px' : '35px 22px',
                backgroundImage: 'url("https://res.cloudinary.com/dlc8f2ajd/image/upload/v1679545225/makaku/home-bg_b6dz5a.jpg")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top',
                justifyContent: 'space-around'
            }}>    
                <Grid container spacing={2}>
                    <Grid xs={12} md={6} sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                        <Box>
                            <Header disableTypography sx={{ fontSize: displaySize === 'xs' ? '25px' : '50px' }}>SORPRENDÉ A TUS SERES{displaySize === 'xs' ? <></> : <br/>} QUERIDOS</Header>
                            <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '12px' : '20px' }}>Regalales una <strong>ilustración digital</strong> de sus fotos favoritas.</Paragraph>
                            <CustomButton variant='contained' id='orderIlustraciones' sx={{ marginTop: '20px', fontSize: displaySize === 'xs' ? '15px' : '20px' }} 
                                component={ Link } to='/ilustraciones'>Hacé tu pedido</CustomButton>
                        </Box>
                    </Grid>
                    <Grid xs={4} md={2} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        <img style={{ alignSelf: 'flex-end', maxWidth: '100%', verticalAlign: 'bottom', bottom: 0 }} alt='mockup de ilustración pequeña'
                            src='https://res.cloudinary.com/dlc8f2ajd/image/upload/v1679923713/makaku/mockup-ilustraciones-home-small_pdbly0.png'
                            max-height='100%'    
                        />
                    </Grid>
                    <Grid xs={8} md={4} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        <img style={{ alignSelf: 'flex-end', maxWidth: '100%' }} alt='mockup de ilustración grande'
                            src='https://res.cloudinary.com/dlc8f2ajd/image/upload/v1679923713/makaku/mockup-ilustraciones-home-large_d68lvp.png'   
                        />
                    </Grid>
                    <Grid xs={12} sx={{ marginTop: '20px' }}>
                        <Header disableTypography sx={{ fontSize: displaySize === 'xs' ? '25px' : '50px', textAlign: 'center' }}>MIRÁ NUESTROS CUADROS<br/>PERSONALIZADOS</Header>
                        <Paragraph disableTypography sx={{ fontSize: displaySize === 'xs' ? '12px' : '20px', textAlign: 'center' }}>Hechos a mano en bastidor de tela.</Paragraph>
                    </Grid>
                    <Grid xs={12} sx={{ justifyContent: "center", flexGrow: 1, marginTop: '20px' }}>
                        <CustomCarousel images={images}/>
                    </Grid>
                    <Grid xs={12} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                        <CustomButton variant='contained' id='orderCuadros' sx={{ fontSize: displaySize === 'xs' ? '15px' : '20px', marginTop: '20px' }} 
                            component={ Link } to='/cuadros'>Hacé tu pedido</CustomButton>
                    </Grid>
                </Grid>
            </Box>
        </main>
    )
}

export default HomeContainer;