import React from 'react'
import './MainContent.css'
import KNFphoto from './images/placeholder.png'

const MainContent = () => {
    return(
        <main className="section-content section-main__main">
            <p>
                Jako Koło Naukowe Fizyków działające na Wydziale Fizyki Politechniki Warszawskiej
                mamy przyjemność zaprosić Doktorantów i&nbsp;Studentów na XIX edycję Ogólnopolskiej 
                Sesji Kół Naukowych Fizyków, która odbędzie się na jesieni 2020&nbsp;r. w&nbsp;Warszawie.
            </p>
            <img src={KNFphoto} alt="KNF PW"/>
        </main>
    )
}

export default MainContent;