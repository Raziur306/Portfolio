import React from 'react'
import { Grid } from '@mui/material'
import { Helmet } from 'react-helmet'

import { projectList } from '../../utils/constans'
import ProjectsCard from '../../components/ProjectsCard'
import './projects.css'
import { AnimatedTitle } from '../../utils/AnimatedTitle'

function Projects() {
  const symbol = AnimatedTitle()
  return <>
    <Helmet><title>{symbol} RAZIUR | projects</title></Helmet>
    <Grid className='projects' container justifyContent="Start">
      <Grid item xs={6} className="projects_header">
        <h2 className='h2'>projects</h2>
      </Grid>
    </Grid>
    <Grid sx={{ mt: '40px', justifyContent: 'center' }} container gap={2} spacing={8}>
      {projectList.map((project, index) => {
        return <Grid item key={project.id}>
          <ProjectsCard data={project} />
        </Grid>
      })}
    </Grid>
  </>
}

export default Projects