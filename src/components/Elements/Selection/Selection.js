import React from 'react'
import classes from './Selection.module.css'

import Option from './Option/Option'

const select = (props) => {

    var list = null;
    if (props.list) {
        list = props.list;
    }
    
    return (
        <div className={classes.Container}>
            <select onChange={props.changed} className={classes.Select}>
                { list && 
                    list.map((project, index) => (
                        <Option key={index} value={project.id}>{project.name}</Option>
                    ))
                }
            </select>
        </div>
    );
}

export default select;