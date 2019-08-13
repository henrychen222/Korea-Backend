import React from 'react'
import classes from './Cell.module.css'

const cell = (props) => {

    const style = {
        width: props.width
    };

    const inputClasses = [classes.Cell]
    if (props.isHeader) {
        inputClasses.push(classes.Header)
    }
    if (props.hasCheckbox) {
        inputClasses.push(classes.CheckBox)
    }

    if (props.hasCheckbox ) {
        inputClasses.push(classes.Box)
    }

    return (
        <div style={style} className={inputClasses.join(' ')} onDoubleClick={props.editable}>
            {props.value}
            {props.hasCheckbox && 
                <div>
                    <input type="checkbox" value={props.checkBoxValue} onClick={(e) => props.checkboxClick(e, props.value, props.id)}></input>
                </div>
            }
        </div>
    );
}

export default cell;