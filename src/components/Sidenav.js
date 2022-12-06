import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Decorlogo from '../images/decorlogo.PNG'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Cart from '../images/cart.jpg'
import User from '../images/user.jpg'
import '../css/header.css'

const drawerWidth = 100;
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius:'20px',
  marginRight: theme.spacing(2),
  marginLeft: '20px',
  width: '50%',
  border:'1px solid black' ,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 4, 3, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '90%',
  },
}));


export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <Toolbar>
          <IconButton
          style={{'backgroundColor':'blue','borderRadius':'1px','height':'55px' ,'width':'60px'}}
            color="blue"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            
           <ArrowForwardIcon />
          </IconButton>
        </Toolbar>    
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            height:'20%',
            border:'1px solid black' ,
            top:'70px',
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <CloseIcon  /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Typography variant='h6' component='div'>
            Side3
          </Typography>
      </Drawer>
      <img style={{'height':'50px','marginLeft':'-120px','marginTop':'6px' }}
    src={Decorlogo}  alt="img"/>
          <Search>
            <StyledInputBase
              placeholder="What are you looking for?"
            />
          </Search>
          <img src={User}  alt="img"  style={{'height':'50px','marginLeft':'1px','marginTop':'6px' }}/>
          <Typography marginTop={'20px'}
          marginLeft={'10px'}
          variant='body1' >Hey!Log in or Sign Up
          </Typography>
          <img src={Cart}  alt="img"  style={{'height':'50px','marginLeft':'20px','marginTop':'6px' }}/>
    </Box>
  );
}
