import React from 'react'
import Intro from '../../Components/Intro/Intro'
import { Box } from '@mui/material'
import OurClients from '../../Components/OurClients/OurClients'
import About from '../../Components/About/About'
import Services from '../../Components/Services/Services'
import WorkFlow from '../../Components/WorkFlow/WorkFlow'
import CaseStudy from '../../Components/CaseStudy/CaseStudy'
import Team from '../../Components/Team/Team'
const LandingPage = () => {
  return (
   <> <Box>
      <Intro /> 
      <OurClients />
      <About />
      <Services />
      <WorkFlow />
      <CaseStudy />
      <Team />
    </Box>
    </>
  )
}

export default LandingPage