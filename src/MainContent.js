import React from 'react'
import KNFphoto from './images/placeholder.png'

const MainContent = () => {
    return(
        <main className="section-content section-main__main">
            <p>
                Jako Koło Naukowe Fizyków działające na Wydziale Fizyki Politechniki Warszawskiej
                mamy przyjemność zaprosić Doktorantów i Studentów na XIX edycję Ogólnopolskiej 
                Sesji Kół Naukowych Fizyków, która odbędzie się na jesieni 2020 r. w Warszawie.
            </p>
            <img src={KNFphoto} alt="KNF PW"/>

        </main>
    )
}

export default MainContent;