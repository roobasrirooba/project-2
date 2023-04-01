import {AppBar,Typography,Toolbar} from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React from "react";

function Appbar()
{
    return(
        <AppBar sx={{backgroundColor:"bisque"}}>
            <Toolbar>
                <LocalMallIcon style={{color:"black"}}/>
                <Typography style={{color:"black"}}>STORE</Typography>
        <Box sx={{ width: '100%' }}>
       <Tabs>
        <Tab value="one" label="HOME" />
        <Tab value="two" label="PRODUCTS" />
        <Tab value="three" label="SERVICE" />
        <Tab value="four" label="ABOUT US" />
        <Tab value="five" label="CONTACT" />
      </Tabs>
    </Box>
  
     </Toolbar>
        </AppBar>
    );
}
export default Appbar;