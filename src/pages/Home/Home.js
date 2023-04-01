import { Box, Grid } from '@mui/material'
import React from 'react'
import { Helmet } from "react-helmet";

import './home.css'
import image from '../../assets/profile_img.png'
import image_outline from '../../assets/outline.svg'
import dots from '../../assets/dots.svg'
import { aboutMe, database, frameworks, languages, other, projectList, technologies } from '../../utils/constans'
import ProjectsCard from '../../components/ProjectsCard'
import { AnimatedTitle } from '../../utils/AnimatedTitle';
import SkillCard from '../../components/SkillCard';
import ContactComponent from '../../components/Component.Contact';
import about_me_anim from '../../assets/about_me_anim.gif'

function Home() {
    const symbol = AnimatedTitle()


    return <>
        <Helmet><title>{symbol} RAZIUR | home</title></Helmet>
        <Grid container gap={5} justifyContent='center'>
            <Grid item xs="6">
                <div className='first-grid'>
                    <div className='personal-desc'>
                        <h1>Raziur Rahaman is a <span>Full Stack Developer</span></h1>
                        <p>Blending technology and creativity, he specializes in developing innovative Mobile Applications and Websites.</p>
                        <a href="/contact" alt="Contact" className='contact-me-btn'>Contact Me !!</a>
                    </div>
                </div>
            </Grid>
            <Grid item xs="auto">
                <div className='top_image_div'>
                    <img class='profile_logo' src={image_outline} alt="Outline Logo" />
                    <img className='profile_image' src={image} alt="Profile" />
                    <div className='current-work'>
                        <p>Currently Doing Research in <a rel="noreferrer" target='_blank' href='https://ethereum.org/en/'>Blockchain</a></p>
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
            <Grid item xs={6} className="projects_header">
                <h2 className='h2'>projects</h2>
            </Grid>
            <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }} justifyContent="center" >
                <a className='projects_link' href="/projects">View all ~~{'>'}</a>

            </Grid>
        </Grid>

        {/* project cards */}
        <Grid sx={{ mt: '40px', justifyContent: 'center' }} container gap={2} spacing={8}>
            {projectList.slice(0, 3).map((project, index) => {
                return <Grid item>
                    <ProjectsCard data={project} />
                </Grid>
            })}
        </Grid>

        {/* skills */}
        <Box sx={{ mt: '100px' }} xs={5} className="projects_header">
            <h2 className='h2'>skills</h2>
        </Box>
        <Grid sx={{ mt: '40px' }} gap={3} container justifyContent={'center'}>
            <Grid item>
                <SkillCard data={technologies} />
            </Grid>
            <Grid item>
                <SkillCard data={languages} />
            </Grid>
            <Grid item >
                <SkillCard data={frameworks} />
            </Grid>
            <Grid item>
                <SkillCard data={database} />
            </Grid>
            <Grid item>
                <SkillCard data={other} />
            </Grid>
        </Grid>


        <Box sx={{ mt: '100px' }} xs={5} className="projects_header">
            <h2 className='h2'>about-me</h2>
        </Box>

        <Grid sx={{ mt: '15px' }} container justifyContent={'space-between'}>
            <Grid item xs={8}>
                <Box >
                    {aboutMe}
                    <a className='learn_more_about_btn' href="/about" alt="About Me">Learn More ~~{'>'}</a>
                </Box>

            </Grid>
            <Grid item xs={3}>
                <Box>
                    <img src={about_me_anim} alt="" />
                </Box>

            </Grid>
        </Grid>

        {/* contact */}

        <ContactComponent />

    </>
}
export default Home