import React, { useState, useContext } from 'react';
import { Context } from '../context/Context.js';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import StyledTabs from './styledComponents/StyledTabs.js';
import StyledTab from './styledComponents/StyledTab.js';
import Paragraph from './styledComponents/Paragraph.js';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";

export default function Navbar() {
    const { page, switchPage, displaySize } = useContext(Context);
    const [open, setOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    return (
        <AppBar position="static" >
            <Container maxWidth="100%" disableGutters>
                <Toolbar sx={{ height: '49px', padding: displaySize === 'xs' ? '12px 22px !important' : '16px 43px !important', backgroundColor: 'white' }}>
                    <Box component={ Link } to='/home' sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: { xs: 'flex', sm: 'none' } }}>
                        <img height='49px' 
                            alt='Makaku Paintings logo' 
                            src='https://res.cloudinary.com/dlc8f2ajd/image/upload/v1679518063/makaku/logoPNG_uj8q9v.png'/>
                    </Box>
                    <StyledTabs value={page} onChange={switchPage} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <Box component={ Link } to='/home'>
                            <img height='49px' 
                                alt='Makaku Paintings logo' 
                                src='https://res.cloudinary.com/dlc8f2ajd/image/upload/v1679518063/makaku/logoPNG_uj8q9v.png'/>
                        </Box>                
                        <StyledTab id='ilustraciones' label='ILUSTRACIONES' component={ Link } to='/ilustraciones' />
                        <StyledTab id='cuadros' label='CUADROS' component={ Link } to='/cuadros' />
                    </StyledTabs>
                    <IconButton 
                        color="black"
                        disableRipple
                        aria-label="open drawer" 
                        onClick={toggleDrawer(true)}
                        sx={{ display: { xs: 'block', sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={open}
                        onClose={toggleDrawer(false)}
                        onOpen={toggleDrawer(true)}
                    >
                        <Box sx={{
                        p: 2,
                        height: 1,
                        backgroundColor: "white" }}
                        >
                            <IconButton sx={{ marginBottom: '10px' }}>
                                <CloseIcon onClick={toggleDrawer(false)} />
                            </IconButton>
                            <Divider sx={{ marginBottom: '10px' }} />
                            <Box>
                                <ListItemButton id='drawerHome' className={ page === 0 ? 'drawerHome' : '' }
                                    component={ Link } to='/home'
                                    sx={{
                                        color: 'rgba(0, 0, 0, 0.7)',
                                        marginBottom: '10px',
                                        '&#drawerHome:hover': { 
                                        color: 'black',
                                        backgroundColor: '#C969A4',
                                        transition: '1s ease'
                                        },
                                        '&.drawerHome': {
                                            backgroundColor: '#C969A4',
                                        } 
                                }}>
                                    <Paragraph disableTypography>HOME</Paragraph>
                                </ListItemButton>
                                <ListItemButton id='drawerIlustraciones' className={ page === 1 ? 'drawerIlustraciones' : '' }
                                    component={ Link } to='/ilustraciones'
                                    sx={{
                                        color: 'rgba(0, 0, 0, 0.7)',
                                        marginBottom: '10px',
                                        '&#drawerIlustraciones:hover': { 
                                        color: 'black',
                                        backgroundColor: '#4B8AC9',
                                        transition: '1s ease'
                                        },
                                        '&.drawerIlustraciones': {
                                            backgroundColor: '#4B8AC9',
                                        } 
                                }}>
                                    <Paragraph disableTypography>ILUSTRACIONES</Paragraph>
                                </ListItemButton>
                                <ListItemButton id='drawerCuadros' className={ page === 2 ? 'drawerCuadros' : '' }
                                    component={ Link } to='/cuadros'
                                    sx={{
                                        color: 'rgba(0, 0, 0, 0.7)',
                                        marginBottom: '10px',
                                        '&#drawerCuadros:hover': { 
                                        color: 'black',
                                        backgroundColor: '#F49F00',
                                        transition: '1s ease'
                                        },
                                        '&.drawerCuadros': {
                                            backgroundColor: '#F49F00',
                                        } 
                                }}>
                                    <Paragraph disableTypography>CUADROS</Paragraph>
                                </ListItemButton>
                            </Box>
                        </Box>
                    </Drawer>            
                </Toolbar>
            </Container>
        </AppBar>
    );
}



// const Navbar = () => {
//     const { page, setPage, switchPage } = useContext(Context);

//     const pages = ['Products', 'Pricing', 'Blog'];
//     const [anchorElNav, setAnchorElNav] = React.useState(null);

//     const handleOpenNavMenu = (event) => {
//       setAnchorElNav(event.currentTarget);
//     };
  
//     const handleCloseNavMenu = () => {
//       setAnchorElNav(null);
//     };

//     return (
//         <Box sx={{ height: '49px', padding: '16px 43px' }}>
//             <AppBar position="static">
//                 <Container maxWidth="xl">
//                     <Toolbar disableGutters>
//                         <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//                             <IconButton
//                                 size="large"
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleOpenNavMenu}
//                                 color="inherit"
//                                 sx={{ height: '49px' }}>
//                                 <MenuIcon />
//                             </IconButton>
//                             <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorElNav}
//                                 anchorOrigin={{
//                                     vertical: 'bottom',
//                                     horizontal: 'left',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'left',
//                                 }}
//                                 open={Boolean(anchorElNav)}
//                                 onClose={handleCloseNavMenu}
//                                 sx={{
//                                     display: { xs: 'block', md: 'none' },
//                                     position: 'absolute'
//                                 }}>
//                                 {pages.map((page) => (
//                                     <MenuItem key={page} onClick={handleCloseNavMenu}>
//                                         <Typography textAlign="center">{page}</Typography>
//                                     </MenuItem>
//                                 ))}
//                             </Menu>
//                             <Box onClick={ () => setPage(0) } component={ Link } to='/home' sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
//                                 <img height='49px'
//                                     alt='Makaku Paintings logo'
//                                     src='https://res.cloudinary.com/dlc8f2ajd/image/upload/v1679518063/makaku/logoPNG_uj8q9v.png'/>
//                             </Box> 
//                             <Box></Box>
//                         </Box>
                        
//                         <StyledTabs value={page} onChange={switchPage} sx={{ display: { xs: 'none', md: 'flex' } }}>
//                             <Box onClick={ () => setPage(0) } component={ Link } to='/home'>
//                                 <img height='49px' 
//                                     alt='Makaku Paintings logo' 
//                                     src='https://res.cloudinary.com/dlc8f2ajd/image/upload/v1679518063/makaku/logoPNG_uj8q9v.png'/>
//                             </Box>                
//                             <StyledTab id='ilustraciones' label='ILUSTRACIONES' component={ Link } to='/ilustraciones' />
//                             <StyledTab id='cuadros' label='CUADROS' component={ Link } to='/cuadros' />
//                         </StyledTabs>
//                     </Toolbar>
//                 </Container>
//             </AppBar>
//         </Box>
//     );
// }

// export default Navbar;