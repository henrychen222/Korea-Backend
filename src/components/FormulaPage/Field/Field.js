// Template Page  8.9
import React from 'react'
import classes from './Field.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const field = (props) => {
    return (
        <div className={classes.Parts}>
            <div className={classes.Part}>
                <label>Field</label><br></br>
                <input type='text'></input>
            </div>
            <div className={classes.Part}>
                <label>Type</label><br></br>
                <select onChange={props.changed}>
                    <option value="Number">Number</option>
                    <option value="Text">Text</option>
                    <option value="Formula">Formula</option>
                </select>
            </div>
            <div className={classes.Part}>
                <div>
                    <label>Formular</label><br></br>
                    <input type='text' disabled={true}></input>
                </div>
            </div>
            <div className={classes.Part}>
                <button onClick={(e) => props.rightTrashHandler(e, props.index)} className={classes.Button}>
                    <FontAwesomeIcon color="rgb(255, 255, 255)" icon="trash" />
                </button>
            </div>
        </div>
    );
}

export default field;