import { Card, CardMedia, Button } from '@mui/material'
import React from 'react'

function ProjectsCard(param) {
    const
        { title,
            technology,
            project_location,
            is_live,
            live_link,
            is_github,
            github_link,
            img } = param.data

    return <>
        <div className='project_card'>
            <div className='project_image_container'>
                <div className='overlay'></div>
                <img className='project_image' src={img} alt={title} />
            </div>

            <p className='project_technology'>{technology}</p>
            <h3 className='project_title'>{title}</h3>
            <p className='project_location'>{project_location}</p>
            <div className='project_card_btn'>
                {(is_live && <a href={live_link}>Live ~~{'>'}</a>)}
                {(is_github && <a href={github_link}>Github {'<'}-{'>'}</a>)}
            </div>


        </div>
    </>
}

export default ProjectsCard