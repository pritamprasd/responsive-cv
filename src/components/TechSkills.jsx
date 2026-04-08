import React from 'react'
import './TechSkills.css';

export default function TechSkills({skills}) {
    const midpoint = Math.ceil(skills.length / 2);
    const firstHalf = skills.slice(0, midpoint);
    const secondHalf = skills.slice(midpoint);
  return (
    <div className='tech-skills'>
        <div className="header-text">Tech Stack</div>
        <div className='skillset-div'>
            <div className='skillset'>
               {firstHalf.map(s => <Skillset key={s['type']} skillset={s}/>)}
            </div>
            <div className='skillset'>
               {secondHalf.map(s => <Skillset key={s['type']} skillset={s}/>)}
            </div>
        </div>
    </div>
  )
}

function Skillset({skillset}){
    return(
        <div className='skill'>
            <div className='skill-header'>
                <section style={{fontWeight: 'bolder'}}>{skillset['type']}</section>
                 {skillset['skill']}
            </div>            
        </div>
    );
}
