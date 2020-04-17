import React from 'react';
import PeopleImg from './images/person.jpg'
import './Guests.css'

const Guest = props =>{
    return(
        <div className="guests__item">
            <img src={props.image} alt={props.name}/>
            <p>{props.name}</p>
            <p>{props.subject}</p>
        </div>
    )
}


const Guests = () => {
    const guests = [
        {name: "Jan Kowalski", subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", image: PeopleImg},
        {name: "Jan Kowalski", subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", image: PeopleImg},
        {name: "Jan Kowalski", subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ", image: PeopleImg}
    ]
    const guestsList = guests.map(guest => <Guest name={guest.name} subject={guest.subject} image={guest.image} />);
    return (
        <div className="section-content section-guests__guests"> 
            {guestsList}
        </div>
    )
}

export default Guests;