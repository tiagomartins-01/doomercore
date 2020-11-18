import React from 'react';

function ButtonMenu(props) {
    
    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    );
}

export default ButtonMenu;