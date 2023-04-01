import { Box, Grid } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
    return (
        <>
            <Box sx={{ mt: '100px' }
            } xs={5} className="projects_header" >
                <h2 className='h2'>contact</h2>
            </Box >
            <Grid gap='auto' className='contact_container' sx={{ mt: '15px' }} container justifyContent={'space-between'}>
                <Grid xs={7} item >
                    <Box className='contact_desc'>
                        <p>As a full-stack developer, I am always excited to collaborate and bring ideas to life. You can reach me through the portfolio contact section for any inquiries, job opportunities, or project collaborations. Let's create something amazing together!</p>
                    </Box>
                </Grid>
                <Grid item xs={4} className='contact_div' justifyContent={'right'}>
                    <Box sx={{ display: 'flex', margin: 'auto' }} className='contact_option_view'>
                        <Box className='contat_list_container'>
                            <div className='contact_title'>Message me here</div>
                            <ul className='contact_ul'>
                                <li><a rel="noreferrer" target={'_blank'} href="https://linkedin.com/in/raziur-rahaman">{<FacebookIcon />} Linkedin</a></li>
                                <li><a rel="noreferrer" target={'_blank'} href="https://www.facebook.com/raziur.rahman01">{<LinkedInIcon />} Facebook</a></li>
                            </ul>
                        </Box>
                    </Box>

                </Grid>
            </Grid>

        </>

    )
}

export default Contact;