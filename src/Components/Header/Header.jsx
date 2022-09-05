import React, { useState } from 'react';
import "./Header.css";
import { Box, Typography, Stack, Button, IconButton } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Services', 'Blogs', 'Contact'];
const Header = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [selected, setSelected] = useState('');
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
   
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: '1000', fontSize: '2rem', my: 2 ,color:'#FEE9D1'}}>
                Logo
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding onClick={() => setSelected(item)}>
                        <ListItemButton sx={{ textAlign: 'center', backgroundColor: selected ===item ? '#FEE9D1' : 'white' }}>
                            <ListItemText primary={item} sx={{ color: selected === item ? '#FA541C' : 'gray' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Button variant='contained'
                  sx={{backgroundColor:'#FA541C',
                fontWeight:'600',
                borderRadius:'10px',marginTop:'3rem',
                '&:hover':{backgroundColor:'#B3200E'},width:'13rem'
                }}
                  className='i-button'
                  >
                    Join us
                    </Button>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{position:'static'}} >
           <Box sx={{ display: 'flex', gap: '2rem' }}>
            <Typography varient='h6' component='div' sx={{ flexGrow: 1, fontWeight: '800', fontSize: '2rem',color:'#FA541C' }}  >
                Logo
            </Typography>

            <Stack
                direction='row'
                alignment='center'
                justifyContent='flex-end'
                spacing={5} mt={2} 
                sx={{ display: { xs: 'none', md: 'flex' } }}>
                {navItems.map((items) => (
                    <Typography varient='h6' key={items} component='div' className={'h-element'}
                        onClick={() => setSelected(items)}
                        sx={{ color: selected == items ? '#FA541C' : 'gray', }}
                    >{items}</Typography>
                ))}
            </Stack>

            <Stack mt={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
 <Button variant="contained"     sx={{backgroundColor:'#FA541C',
                fontWeight:'600',
                borderRadius:'10px',
                '&:hover':{backgroundColor:'#B3200E'}
                }}
                    className={'head-button'} color="primary">join us</Button>
            </Stack>
            <Stack mt={1} sx={{ display: { xs: 'flex', md: 'none' } }} >
                <IconButton aria-label="delete" onClick={handleDrawerToggle}>
                    <MenuIcon />
                </IconButton></Stack>
                </Box>
            <Box><Drawer
                anchor='right'
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer></Box>
        </Box>
    )
}

export default Header