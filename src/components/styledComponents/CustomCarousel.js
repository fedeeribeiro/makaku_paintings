import React, { useState, useContext } from 'react';
import Carousel from 'react-material-ui-carousel';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { Context } from '../../context/Context';

const StyledImage = styled('img')({
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const CustomCarousel = ({ images }) => {
    const [activeStep, setActiveStep] = useState(0);
    const { displaySize } = useContext(Context);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    
    let items; 

    if (displaySize === 'xs') {
        items = images.map((image, index) => (
            <Paper key={index} sx={{ background: 'none', boxShadow: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <StyledImage src={ images[index] } alt='carousel' />
            </Paper>
        ));
    } else {
        items = [0, 2].map((index) => (
            <Paper key={index} sx={{ background: 'none', boxShadow: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <StyledImage src={ images[index] } alt='carousel' />
                <StyledImage src={ index + 1 < images.length ? images[index + 1] : images[0] } alt='carousel' />
            </Paper>
        ));
    }

    return (
        <Carousel
            autoPlay={true}
            indicators={true}
            swipe={true}
            stopAutoPlayOnHover
            cycleNavigation={true}
            fullHeightHover={false}
            animation={'fade'}
            timeout={500}
            activeStep={activeStep}
            onChange={handleStepChange}
            navButtonsAlwaysInvisible={true}
            navButtonsProps={{
                style: {
                    backgroundColor: 'transparent',
                    color: 'black',
                    boxShadow: 'none',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                }
            }}
            navButtonsWrapperProps={{
                next: {
                    right: '100px !important'
                },
                prev: {
                    left: '20px'
                }
            }}
            indicatorContainerProps={{
                style: {
                marginTop: '30px',
                }
            }}
        >
            {items}
        </Carousel>
    );
};

export default CustomCarousel;