import { Grid, Box, Stack, IconButton } from '@mui/material'
import React from 'react'
import logo from '../assets/icon_dark.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_border_line'></div>
            <Grid container className='footer_container' justifyContent={'center'}>
                <Grid item xs={5}>
                    <Box sx={{ mt: '30px' }}>
                        <Stack direction={'row'} spacing={2} sx={{ mb: '10px' }}>
                            <img className='footer_img' src={logo} alt="Footer Logo" />
                            <a className='email' href='mailto:raziur.rahaman.ronju@gmail.com'>raziur.rahaman.ronju@gmail.com</a>
                        </Stack>

                        <h5>Full Stack Devloper</h5>
                    </Box>
                </Grid>
                <Grid xs={5} item className='media_section' sx={{ mt: '30px', justifyContent: 'right' }}>
                    <Box sx={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <h3>Media</h3>
                        <Stack direction={'row'} justifyContent='right'>
                            <IconButton disableRipple style={{ background: 'none' }} color='inherit' target={"_blank"} href="https://www.github.com/Raziur306"><GitHubIcon /></IconButton>
                            <IconButton disableRipple style={{ background: 'none' }} color='inherit' target={"_blank"} href="https://www.linkedin.com/in/raziur-rahaman"><LinkedInIcon /></IconButton>
                            <IconButton disableRipple style={{ background: 'none' }} color='inherit' href="https://twitter.com/Raziur306"><TwitterIcon /></IconButton>
                            <IconButton disableRipple style={{ background: 'none' }} color='inherit' href="https://www.facebook.com/raziur.rahman01"><FacebookIcon /></IconButton>
                        </Stack>
                    </Box>

                </Grid>
            </Grid>
            <h5 className='footer_copyright'>© Copyright 2023. Develop by Raziur</h5>
        </div>
    )
}

export default Footer