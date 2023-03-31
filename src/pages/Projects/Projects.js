import React from 'react'
import { Grid } from '@mui/material'

import { projectList } from '../../utils/constans'
import ProjectsCard from '../../components/ProjectsCard'
import './projects.css'

function Projects() {
  return <>
    <Grid className='projects' container justifyContent="Start">
      <Grid xs={6} className="projects_header">
        <h2 className='h2'>projects</h2>
      </Grid>
    </Grid>
    <Grid sx={{ mt: '40px', justifyContent: 'center' }} container gap={3} spacing={8}>
      {projectList.map((project, index) => {
        return <Grid key={project.id} xs={3}>
          <ProjectsCard data={project} />
        </Grid>
      })}
    </Grid>
  </>
}

export default Projects