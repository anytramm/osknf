import React from 'react';
import './Section.css'

const Section = props =>{

    return(
        <section id={props.id}>
            {props.name ? <h3>{props.name.toUpperCase()}</h3> : null}
            {props.content ? props.content : null}
        </section>
    )
}

export default Section;