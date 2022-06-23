//react
import React, { useState} from 'react'

//material ui components
import { AppBar, Avatar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'

//icons
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


//custom components
const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})

const Search = styled('div')({
    backgroundColor: '#FFFFFF',
    padding: '0 10px',
    borderRadius: '5px',
    width: '40%',
})

const Icons = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
})

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
})


const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky' >

        <StyledToolBar >

           <Typography variant='h6' sx={{
            display: {xs:'none', sm: 'block',},
           }}>
                SELFIE
           </Typography>

           <CameraAltIcon 
             sx={{
            display: {xs:'block', sm: 'none',},
           }}
           />

           <Search> 
             <InputBase placeholder='search' />
           </Search>

           <Icons
              sx={{
                display: {xs:'none', sm:'flex'}
              }}
           >

                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>

                <Badge badgeContent={10} color="error">
                    <NotificationsIcon  />
                </Badge>

                <Avatar 
                  src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'

                  onClick={e=>setOpen(true)}
             
                  />
           </Icons>

           <UserBox 
              sx={{
                display:{xs:'flex', sm:'none'}
              }}
           >

              <Avatar 
                src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                
                onClick={()=>setOpen(true)}
              />

              <Typography variant='span'>
                Alex
              </Typography>

           </UserBox>

        </StyledToolBar>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          // anchorEl={anchorEl}
          open={open}
          onClose={e=>setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar>
  )
}

export default Navbar


