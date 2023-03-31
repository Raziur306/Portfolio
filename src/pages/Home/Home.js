import { Box, Grid } from '@mui/material'
import React from 'react'

import './home.css'
import image from '../../assets/Image.png'
import image_outline from '../../assets/outline.svg'
import dots from '../../assets/dots.svg'
import { projectList } from '../../utils/constans'
import ProjectsCard from '../../components/ProjectsCard'
import Footer from '../../components/Footer'

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
        <Grid sx={{ mt: '100px' }} container spacing={3} justifyContent="center">
            <Grid item xs="8">
                <figure class='qoute'>
                    <blockquote class='qoute_text'>Experience is the name everyone gives to their mistakes.</blockquote>
                    <figcaption class='quote_author'>Oscar Wilde</figcaption>

                </figure>

            </Grid>

        </Grid>

        {/* projcts */}
        <Grid sx={{ mt: '150px' }} className='projects' container justifyContent="center">
            <Grid xs={6} className="projects_header">
                <h2 className='h2'>projects</h2>
            </Grid>
            <Grid xs={6} sx={{ display: 'flex', alignItems: 'center' }} justifyContent="center" >
                <a className='projects_link' href="/projects">View all ~~{'>'}</a>

            </Grid>
        </Grid>

        {/* project cards */}
        <Grid sx={{ mt: '40px', justifyContent: 'center' }} container gap={3} spacing={8}>
            {projectList.slice(0, 3).map((project, index) => {
                return <Grid xs={3}>
                    <ProjectsCard data={project} />
                </Grid>
            })}
        </Grid>

        {/* skills */}
        <Grid sx={{ mt: '70px' }} className='projects' container justifyContent="center">
            <Grid xs={5} className="projects_header">
                <h2 className='h2'>skills</h2>
            </Grid>

        </Grid>
      

    </>
}
export default Home