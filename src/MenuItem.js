import React from 'react';

const MenuItem = props =>{
    const {id, name, active} = props;
    return(
        <a key={id} href={`#${id}`} className={active ? "menu__item--active" : null}>{name.toUpperCase()}</a>
    )
}

export default MenuItem;