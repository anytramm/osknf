import React from 'react';
import './Section.css'

const Section = props =>{

    return(
        <section id={props.id}>
            {props.name ? <h3>{props.name.toUpperCase()}</h3> : null}
            {props.content ? <div>{props.content}</div> : null}
        </section>
    )
}

export default Section;