import React from 'react';

const MenuItem = props =>{
    const {id, name, active} = props;
    if(active)  return <a key={id} href={`#${id}`} className={"menu__item--active"} >{name.toUpperCase()}</a>
    return(
        <a key={id} href={`#${id}`}>{name.toUpperCase()}</a>
    )
}

export default MenuItem;