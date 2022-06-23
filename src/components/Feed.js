//reactjs
import React from 'react'


//material ui components
import { Box} from '@mui/material'


//components
import Post from './Post';


const Feed = () => {
  return (
    <Box  flex={4} p={2}>

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  )
}

export default Feed