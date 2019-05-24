import React from 'react';


const projectinfo = (props) => {
    return (
        <div className="projectinfo">
            <p>{props.code}</p>
            <p>{props.name} </p>
            <input type="checkbox"/>
        </div>
    )
}


export default projectinfo;
