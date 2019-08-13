import React from 'react'
import classes from './LeftTable.module.css'
import Table from '../../Elements/Table/Table'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const table = (props) => {
    return (
        <div id="left-table" className={classes.Table}>
            <div className={classes.TopBar}>
                <div className={classes.Title}>
                    <span>{props.header}</span>
                </div>
                <div className={classes.dropdown}>
                    <button onClick={(e) => props.optionHandler(e)} className={classes.Button}>
                        <FontAwesomeIcon color="rgb(255, 255, 255)" icon="list" />
                    </button>
                    {props.showOption && <div id="myDropdown" className={classes.dropdownContent}>
                        <div onClick={props.selectLeftAllHandler}><a href="#row">Select all</a></div>
                        <div onClick={props.cancelLeftAllHandler}><a href="#col">Clear selection</a></div>
                    </div>}
                </div>
                <div className={classes.dropdown}>
                    <button onClick={(e) => props.addToRightBtnHandler(e)} className={classes.Button}>
                        <FontAwesomeIcon color="rgb(255, 255, 255)" icon="arrow-alt-circle-right" />
                    </button>
                </div>
            </div>
            <Table hasCheckBox={props.hasCheckBox} style={props.style} colWidth={props.colWidth} titles={props.titles} datas={props.datas} checkboxClick={props.checkBoxAddHandler} isEditable={props.isEditable} editable={props.editCellHandler} />
        </div>
    );
}

export default table;