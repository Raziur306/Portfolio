import React, { useState } from 'react'
import { Button, Grid, Stack, Box } from '@mui/material'
import { Helmet } from 'react-helmet'

import { projectList } from '../../utils/constans'
import ProjectsCard from '../../components/ProjectsCard'
import './projects.css'
import { AnimatedTitle } from '../../utils/AnimatedTitle'

function Projects() {
  const [projectsState, setProjectState] = useState(projectList)
  const [active, setActive] = useState("all")
  const handleClick = (e) => {
    const { id } = e.target
    if (id === 'all') {
      setProjectState(projectList)
    } else if (id === 'web') {
      setProjectState(projectList.filter(project => {
        return project.type === id || project.type === 'blockchain'
      }))
    } else {
      setProjectState(projectList.filter(project => {
        return project.type === id
      }))
    }
    setActive(id)
  }



  const symbol = AnimatedTitle()
  return <>
    <Helmet><title>{symbol} RAZIUR | projects</title></Helmet>
    <Grid className='projects' container justifyContent="Start">
      <Grid item xs={6} className="projects_header">
        <h2 className='h2'>projects</h2>
      </Grid>
    </Grid>

    <Box className='filter_option' sx={{ mt: '30px', display: 'flex', justifyContent: 'center' }}>
      <Stack className='filtered_btns' direction={'row'} gap={3}>
        <Button id={'all'} className={active === 'all' ? "active" : undefined} onClick={handleClick}>All</Button>
        <Button id={'app'} className={active === 'app' ? "active" : undefined} name onClick={handleClick}>App</Button>
        <Button id={'web'} className={active === 'web' ? "active" : undefined} onClick={handleClick}>Website</Button>
        <Button id={'blockchain'} className={active === 'blockchain' ? "active" : undefined} onClick={handleClick}>Blockchain</Button>
      </Stack>
    </Box>


    <Grid sx={{ mt: '40px', justifyContent: 'center' }} container gap={2} spacing={8}>
      {projectsState.map((project, index) => {
        return <Grid item key={project.id}>
          <ProjectsCard data={project} />
        </Grid>
      })}
    </Grid>
  </>
}

export default Projects