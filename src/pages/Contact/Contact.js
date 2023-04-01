import React from 'react'
import { Helmet } from 'react-helmet'
import { AnimatedTitle } from '../../utils/AnimatedTitle'
import ContactComponent from '../../components/Component.Contact'
import { Box } from '@mui/system'
import './contact.css'

function Contact() {
  const symbol = AnimatedTitle()
  return (
    <div className='contact'>
      <Helmet><title>{symbol} RAZIUR | contact</title></Helmet>
      <Box >
        <ContactComponent />
      </Box>
      <Box sx={{ mb: '25%' }}></Box>
    </div>
  )
}

export default Contact