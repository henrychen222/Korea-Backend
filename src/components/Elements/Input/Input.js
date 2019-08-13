import React from 'react'

import classes from './Input.module.css'

const input = (props) => {
    
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.touched && props.shouldValidate) {
        inputClasses.push(classes.Invalid)
    }

    if (props.touched && props.errorInfo !== null) {
        inputClasses.push(classes.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                            className={inputClasses.join(' ')}
                            {...props.elementConfig}
                            value={props.value} 
                            onChange={props.changed}
                            />
            break;
        case ('checkbox'):
            inputElement = <input
                            type="checkbox"
                            value={props.value}
                            onClick={(e) => props.checkboxClick(e, props.value, props.index)}
                            />
            break;
        default:
            inputElement = <input
                            className={inputClasses.join(' ')}
                            {...props.elementConfig}
                            value={props.value}
                            />
    }

    const style = []
    if (props.hasCheckBox !== false) {
        style.push(classes.CheckBoxContainer)
    } else {
        style.push(classes.Input)
    }
    return (
        <div className={style.join(' ')}>
            <label className={classes.Label}>{props.label}
                {inputElement}
                {props.hasCheckBox === true &&
                <span className={classes.checkmark}></span>
                }
            </label>
                {/* {props.touched && 
                    <div>{props.label} is invalid</div>
                } */}
        </div>
    );
}

export default input