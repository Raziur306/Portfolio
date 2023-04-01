import React from 'react'

function SkillCard({ data }) {
    const { title, list } = data
    return (
        <div className='skill_card'>
            <div className='skill_card_name'>{title}</div>
            <ul className='skill_list_name'>
                {list.map((value, index) => {
                    return <li key={index}>{value}</li>
                })}
            </ul>
        </div>
    )
}

export default SkillCard