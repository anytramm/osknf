import React from 'react'
import './style/MainContent.css'

const MainContent = (props) => {
    return(
        <main className="section-content section-main__main">
            <p>{props.text}</p>
            <img src={props.img} alt="KNF PW"/>
        </main>
    )
}

export default MainContent;