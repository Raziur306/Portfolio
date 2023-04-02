import { Box, Grid } from '@mui/material'
import { Helmet } from 'react-helmet'
import './about.css'

import { AnimatedTitle } from '../../utils/AnimatedTitle'
import image from '../../assets/profile_img.png'
import SkillCard from '../../components/SkillCard'
import { frameworks, languages, technologies, database, other, funFacts, aboutMe } from '../../utils/constans'
import FunFactCard from '../../components/FunFactCard'

function About() {
  const symbol = AnimatedTitle()


  return (
    <div className='about'>
      <Helmet><title>{symbol} RAZIUR | about</title></Helmet>
      <Box sx={{ mt: '45px' }} xs={5} className="projects_header">
        <h2 className='h2'>about</h2>
        <p className='who'>Who am I?</p>
      </Box>
      <Grid className='about_bref_container' gap={3} container justifyContent='center'>
        <Grid item xs={'auto'} >
          <img className='profile' src={image} alt="profile" />
        </Grid>

        <Grid item className='about_bref' xs={6} justifyContent='bottom' sx={{ margin: 'auto' }}>
          {aboutMe}
        </Grid>
      </Grid>

      <Box sx={{ mt: '45px' }} xs={5} className="projects_header">
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



      <Box sx={{ mt: '45px' }} xs={5} className="projects_header">
        <h2 className='h2'>fun-fact</h2>
      </Box>
      <Grid sx={{ mt: '30px' }} container gap={3} justifyContent={'center'}>
        {
          funFacts.map((funFact, index) => {
            return <Grid item ><FunFactCard key={index} data={funFact} /></Grid>
          })
        }

      </Grid>

    </div>
  )
}

export default About