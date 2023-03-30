import { Grid } from '@mui/material'
import React from 'react'

import './home.css'
import image from '../../assets/Image.png'
import image_outline from '../../assets/outline.svg'
import dots from '../../assets/dots.svg'

function Home() {
    return <>
        <Grid container gap={20} justifyContent='center'>
            <Grid item xs="5">
                <div className='first-grid'>
                    <div className='personal-desc'>
                        <h1>Raziur Rahaman is a <span>Full Stack Developer</span></h1>
                        <p>Blending technology and creativity, he specializes in developing innovative Mobile Applications and Websites.</p>
                        <button alt="Contact" className='contact-me-btn'>Contact Me !!</button>
                    </div>
                </div>
            </Grid>
            <Grid item xs="5">
                <div className='top_image_div'>
                    <img class='profile_logo' src={image_outline} alt="Outline Logo" />
                    <img className='profile_image' src={image} alt="Profile" />
                    <div className='current-work'>
                        <p>Currently Doing Research in <a href='https://ethereum.org/en/'>Blockchain</a></p>
                    </div>
                    <img className='dots' alt='profile dots' src={dots} />
                </div>
            </Grid>

        </Grid>

        {/* qoute figure */}
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs="8">
                <figure class='qoute'>
                    <blockquote class='qoute_text'>Experience is the name everyone gives to their mistakes.</blockquote>
                    <figcaption class='quote_author'>Oscar Wilde</figcaption>

                </figure>

            </Grid>

        </Grid>

    </>
}
export default Home