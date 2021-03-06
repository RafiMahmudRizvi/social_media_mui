//reactjs
import React, {useState} from "react";
//material ui components
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";

//components
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Add from "./components/Add";



function App() {
const [mode, setMode] = useState('dark');

 const darkTheme = createTheme({
     palette: {
      mode: mode
     },
 })

  return (
    <ThemeProvider theme={darkTheme}>
          <Box bgcolor='background.default' color='text.primary'>  
            
            <Navbar />

            <Stack 
              direction='row' 
              spacing={{xs: 0, sm: 2}}    
              justifyContent='space-between'
              > 

              <Sidebar mode={mode} setMode={setMode}/>
              <Feed />
              <Rightbar />

            </Stack>
            <Add />
          </Box>
    </ThemeProvider>
  );
}

export default App;
