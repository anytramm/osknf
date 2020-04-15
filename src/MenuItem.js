import React from 'react';

const MenuItem = props =>{
    const {id, name, active, click} = props;
    if(active)  return <a key={id} href={`#${id}`} className={"menu__item--active"}>{name.toUpperCase()}</a>
    return(
        <a key={id} href={`#${id}`} onClick={click}>{name.toUpperCase()}</a>
    )
}

export default MenuItem;