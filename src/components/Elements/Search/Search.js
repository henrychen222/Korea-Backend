import React from 'react'
import Aux from '../../../hoc/Aux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './Search.module.css'

const search = (props) => {

    return (
        <Aux>
            <input className={classes.Input} type="text" placeholder={props.placeholder} onChange={props.changed}/>
            <button className={classes.Button} type="submit" onClick={props.clicked} disabled>
                <FontAwesomeIcon color="rgb(255, 255, 255)" icon="search" />
            </button>
        </Aux>
    );
}

export default search;