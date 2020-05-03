import React from 'react';
import './style/Guests.css'

const Guest = props =>{
    return(
        <div className="guests__item">
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.subject}</p>
        </div>
    )
}


const Guests = (props) => {
    const guestsList = props.guests.map(guest => <Guest key={guest.id} name={guest.name} subject={guest.subject} image={guest.image} />);
    return (
        <div className="section-content section-guests__guests"> 
            {guestsList}
        </div>
    )
}

export default Guests;