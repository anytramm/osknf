import React from 'react';
import './style/Section.css'

const Section = props =>{

    return(
        <section id={props.id}>
            {props.name ? <h4>{props.name.toUpperCase()}</h4> : null}
            {props.content ? props.content : null}
        </section>
    )
}

export default Section;