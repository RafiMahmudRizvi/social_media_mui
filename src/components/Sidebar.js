//reactjs
import React from 'react'


//material ui components
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch,} from '@mui/material'


//icons
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import ModeNightIcon from '@mui/icons-material/ModeNight';



const Sidebar = ({mode, setMode}) => {
  return (
    <Box 
        flex={1} 
        p={2}
        sx={{
            display: {xs: 'none', lg: 'block',},
            
        }}
        >
         <Box style={{position:'fixed'}}>
            <List>
                  <ListItem disablePadding>
                    <ListItemButton components='a' href='#home'>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Homepage" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton components='a' href='#pages'>
                      <ListItemIcon>
                        <ArticleIcon />
                      </ListItemIcon>
                      <ListItemText primary="Pages" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton components='a' href='#groups'>
                      <ListItemIcon>
                        <GroupIcon />
                      </ListItemIcon>
                      <ListItemText primary="Groups" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton components='a' href='#marketplace'>
                      <ListItemIcon>
                        <StorefrontIcon />
                      </ListItemIcon>
                      <ListItemText primary="Marketplace" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton components='a' href='#friends'>
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <ListItemText primary="Friends" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton components='a' href='#settings'>
                      <ListItemIcon>
                        <SettingsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Settings" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton components='a' href='#profile'>
                      <ListItemIcon>
                        <AccountBoxIcon />
                      </ListItemIcon>
                      <ListItemText primary="Profile" />
                    </ListItemButton>
                  </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton components='a' href='#switch' >
                      <ListItemIcon>
                        <ModeNightIcon />
                      </ListItemIcon>
                      <Switch onChange={()=> (setMode(mode === 'light' ? 'dark' : 'light'))}/>
                    </ListItemButton>
                  </ListItem>
              </List> 
         </Box>
            
     </Box>
  )
}

export default Sidebar