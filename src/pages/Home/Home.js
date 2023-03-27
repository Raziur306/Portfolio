import { Grid } from '@mui/material'
import React from 'react'
import './home.css'
import image from '../../assets/Image.png'

function Home() {
    return <>
        <div>
            <Grid container spacing={3}>
                <Grid item xs="6">
                    <div>
                        <div>
                            <h1>Raziur Rahaman is a <span className='coloredText'>Full Stack Developer</span></h1>
                        </div>
                        <div>
                            <p>Blending technology and creativity, he specializes in developing innovative Mobile Applications and Websites.</p>
                        </div>
                        <div>
                            <button alt="Contact" className='contactMeBtn'>Contact Me !!</button>
                        </div>
                    </div>

                </Grid>
                <Grid item xs="6">
                    <div>
                        <div className='profileImage'>
                            <img src={image} alt="Profile" />
                        </div>
                        <div className='currentWork'>
                            <p>Currently Doing Research in Blockchain</p>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </div>

        <div>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs="6">
                    <div>
                        <div className='qoute'>
                            <p className='paragraph'>With great power comes great electricity bill</p>
                            <p className='quotemaster'>- Dr. Who</p>
                        </div>
                    </div>

                </Grid>

            </Grid>
        </div>
    </>
}

export default Home