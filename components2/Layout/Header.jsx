import React , {useState} from 'react'

import {  AppBar  ,  Toolbar, Box, Typography, IconButton , Divider } from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import  '../../styles/HeaderStyles.css'
import {Link} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';


//  hello world!

const Header = () => {

  const [mobileOpen , setMobileOpen] =useState(false)

  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen)
    
  }


  const drawer1 = (


    <Box onClick = {handleDrawerToggle} sx = {{  display : {xs : "block" , sm : "none" } ,   textAlign : 'center' , bgcolor: "pink" }} >

      <Typography 
        color = {"goldenred"}
        variant = "h6" 
        component = "div" 
        sx = {{flexGrow : 1  , marginTop : '40px'}}
      >

        <FastfoodIcon/>

        My Resturant In Box 




      </Typography>
      
      <Divider/>

      <ul className = 'mobile-navigation'>
        <li>   Home  </li>
        <li>   About  </li>
        <li>   Contact  </li>
        <li>   Menu  </li>
      </ul>


    </Box>
  )

  return (
    <Box>
      <AppBar component={'nav'} sx={{ bgcolor: 'black' ,  color : 'white' }} >
        <Toolbar>

          <IconButton color = "inherit" edge ="start" sx = {{ mr:2 ,  display : { sm : "none" }  }}
            // onClick ={handleDrawerToggle}
          
          >
            <MenuIcon color = "inherit"   />
          </IconButton   >


          <Typography 
            color = {'goldenred'}
            variant = 'h6' 
            component = 'div'
            sx = {{flexGrow : 1}}
          >

            <FastfoodIcon/>
            My Resturant

          </Typography>

          <Box sx = {{display :  { sm : 'block' ,   xs: 'none'  }}} >
            <ul className = 'navigation-menu'>

              <li>   Home  </li>
              <li>   About  </li>
              <li>   Contact  </li>
              <li>   Menu  </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      
      <Box component = "nav" >
        
        <drawer1 variant = "temporary"
          open = {mobileOpen} 
          onClose = {handleDrawerToggle} 
          sx = {{ display : {xs : "block" , sm : "none" } ,width : '200px'  }}
        >

          {drawer1}
        </drawer1>
      </Box>

      


      <Toolbar/> 
    </Box>
  )
}

export default Header
