//reactjs
import React, {useState} from 'react'

//material ui components
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material'

//icons
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

//custom components
const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    mb: '10px'
})


const Add = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <Tooltip 
            title="Create post"
            sx={{position: 'fixed', bottom:20, left:{sm:'calc(50%)',lg:20}}}
            onClick={e=>setOpen(true)}
        >
        <Fab color="primary" aria-label="add" >
            <AddIcon />
        </Fab>
        </Tooltip>

        <StyledModal
            open={open}
            onClose={e=>setOpen(false)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box width={400} height={280} p={2} bgcolor='background.default' color='text.primary' borderRadius={4}>
                <Typography variant='h6'color='gray' textAlign='center'>Create post</Typography>
                <UserBox>

              <Avatar
                src='https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                sx={{width:30,height:30}}
                
              />

              <Typography variant='span' fontWeight={500}>
                Alex
              </Typography>

            </UserBox>

            <TextField 
                sx={{width:'100%'}}   
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"
            />
            <Stack direction='row' gap={2} mt={2} mb={2}>
                <EmojiEmotionsIcon color='primary'/>
                <ImageIcon color='secondary'/>
                <VideoCameraBackIcon color='success'/>
                <PersonAddIcon color='error'/>
            </Stack>
            <ButtonGroup 
            fullWidth   
            
            variant="contained" aria-label="outlined primary button group">
                    <Button>Post</Button>
                    <Button sx={{width:'100px'}} ><DateRangeIcon/></Button>
                    
            </ButtonGroup>
            </Box>
        </StyledModal>
    </>
  )
}

export default Add