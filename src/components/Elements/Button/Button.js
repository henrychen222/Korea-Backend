import React from 'react'

import classes from './Button.module.css'

const button = (props) => {

    const className = [classes[props.btnType]];

    if (props.customized) {
        className.push(classes[props.customized])
    } else {
        className.push(classes.Button)
    }

    return (
        <button
            disabled={props.disabled}
            className={className.join(' ')}
            onClick={props.clicked}>
            {props.children}
        </button>
    )
}

export default button;