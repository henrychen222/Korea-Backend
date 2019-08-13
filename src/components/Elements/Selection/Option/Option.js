import React from 'react'

import classes from './Option.module.css'

const option = (props) => {

    return (
        <option className={classes.Option} value={props.value}>{props.children}</option>
    );
}

export default option;