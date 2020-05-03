import React from 'react';
import './style/Menu.css'

const MenuItem = props =>{
    const {id, name, active, click} = props;
    if(active)  return <li key={id} className="menu-items__item menu-items__item--active"><a href={`#${id}`}>{name.toUpperCase()}</a></li>
    return(
        <li key={id} className="menu-items__item"><a href={`#${id}`} onClick={click}>{name.toUpperCase()}</a></li>
    )
}

const Menu = props => {
    const menuElements = props.sections.map(section => section.name==="" ? null : <MenuItem key={section.id} id={section.id} name={section.name} click={props.click} active={section.active}/>)
    return(
        <nav className="menu--active">
            <ul className="menu-items">
                {menuElements}
            </ul>
        </nav>
    )
}

export default Menu;