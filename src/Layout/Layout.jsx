import { Box } from '@mui/material'
import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import LandingPage from '../Pages/LandingPage/LandingPage'
const Layout = () => {
  return (
    <div>
        <Box sx={{padding:
            {xs:'1rem 2rem',
             sm:'1rem 2rem',
             md:'1rem 3rem',
             lg:'1rem 5rem',
             xl:'1rem 5rem'},
            }}>
            <Header />
        </Box>

            <Box sx={{padding:
            {xs:'1rem 2rem',
             sm:'1rem 2rem',
             md:'1rem 3rem',
             lg:'1rem 5rem',
             xl:'1rem 5rem'},
            }}><LandingPage /></Box>
        <Box>
      
        </Box>
    </div>
  )
}

export default Layout