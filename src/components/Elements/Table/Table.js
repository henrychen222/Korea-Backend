import React from 'react'
import Aux from '../../../hoc/Aux'

import classes from './Table.module.css'
import Cell from '../TableCell/Cell'
import Input from '../../Elements/Input/Input'

const table = (props) => {

    const colWidth = props.colWidth;
    const style = props.style;
    const titles = props.titles;
    const datas = props.datas;

    return (
        <Aux>
            <div className={classes.Table} style={style}>
                {/* Generate title */}
                <div className={classes.Columns}>
                    {titles.map((title, index) => (
                        <Cell key={index} width={colWidth} value={title} isHeader={true} />
                    ))}
                </div>

                {datas.map((data, index) => (
                    <div key={index} className={classes.Columns}>
                        {/* Generate first two columns */}
                        { props.hasCheckBox &&
                            <div>
                                <Input elementType={'checkbox'} value={data.resource.id} index={index} hasCheckBox={props.hasCheckBox} checkboxClick={props.checkboxClick}/>
                            </div>
                        }
                        { props.isEditable === true && 
                            <Cell editable={(e) => props.editable(e, data.projectId, data.resource.id, '', data.resource.name, data.resource.code, true)} width={colWidth} value={data.resource.name} />
                        }
                        { props.isEditable === false && 
                            <Cell width={colWidth} value={data.resource.name} />
                        }
                        { props.isEditable === true && 
                            <Cell editable={(e) => props.editable(e, data.projectId, data.resource.id, '', data.resource.name, data.resource.code, false)} width={colWidth} value={data.resource.code} />
                        }
                        { props.isEditable === false && 
                            <Cell width={colWidth} value={data.resource.code} />
                        }
                        {/* Generate features */}
                        { props.isEditable === true && data.features.map((feature, indexF) => (
                            <Cell editable={(e) => props.editable(e, data.projectId, data.resource.id, feature.id)} key={indexF} width={colWidth} value={feature.content} />
                        ))}
                        { props.isEditable === false && data.features.map((feature, indexF) => (
                            <Cell key={indexF} width={colWidth} value={feature.content} />
                        ))}
                    </div>
                )
                )}
            </div>
        </Aux>
    );

}

export default table;