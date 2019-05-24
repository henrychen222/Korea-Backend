// 5.17
import React, {Component} from 'react';

// import {jsondata} from './jsondata';
import {jsondata} from './nameCodeJSON';

import {ProjectInfo} from '../../containers/ProjectInfo'

export default class csvjson extends Component {

    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            code: [],
            name: [],
            codeName: [],
            //checkbox
            complete: (!!this.props.complete) || false
        }
    }

    getColumnData = () => {
        let code = [];
        let name = [];
        for (let i = 0; i < jsondata.length; i++) {
            // console.log(jsondata[i]);
            // console.log(Object.values(jsondata[i]));

            // /* get the code and name */
            // console.log([Object.values(jsondata[i])[0]]);  //code
            // console.log([Object.values(jsondata[i])[1]]);  //name
            // console.log(typeof ([Object.values(jsondata[i])[0]]));

            code.push(Object.values(jsondata[i])[0]);
            name.push(Object.values(jsondata[i])[1]);
            // code = [...code, Object.values(jsondata[i])[0]];
            // name = [...name, Object.values(jsondata[i])[1]];
        }
        console.log(code);
        console.log(name);
        console.log(code[0]);
        console.log(name[0]);

        let codeName = [];

        this.setState(
            {
                code: code,
                name: name,
            }
        );

    }

    //5.20 afternoon
    getRowData = () => {
        let codeName = [];
        for (let i = 0; i < jsondata.length; i++) {
            codeName.push(Object.values(jsondata[i]));
        }
        console.log(codeName);

        this.setState(
            {
                codeName: codeName
            }
        );

    }


    handleChange = () => {
        this.setState({
            complete: !this.state.complete
        });

        //
    }

    render() {
        return (
            <div>
                <button onClick={this.getRowData}>Import CSV Data</button>
                <table>
                    <thead>
                    <th/>
                    <th>Project NAME</th>
                    <th>Project CODE</th>
                    </thead>

                    {/*getRowData Test*/}
                    <tbody>
                    {
                        this.state.codeName.map(row => <tr>
                            <td>
                                <input
                                    type="checkbox"
                                    defaultChecked={this.state.complete} //unchecked
                                    ref="complete"
                                    onChange={this.handleChange}
                                />
                                {row[0]}
                            </td>
                            <td>{row[1]}</td>
                        </tr>)
                    }
                    </tbody>




                    {/*/!*getColumnData Test*!/*/}
                    {/*<tbody>*/}
                    {/*<tr>*/}
                    {/*    <input type="checkbox"/>*/}
                    {/*    <td>{this.state.name[0]}</td>*/}
                    {/*    <td>{this.state.code[0]}</td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}
                    {/*    <input type="checkbox"/>*/}
                    {/*    <td>{this.state.name[2]}</td>*/}
                    {/*    <td>{this.state.code[2]}</td>*/}
                    {/*</tr>*/}
                    {/*</tbody>*/}

                    {/*<tbody>*/}
                    {/*{*/}
                    {/*    jsondata.map((data) => {*/}
                    {/*        return (*/}
                    {/*            <TableRow*/}
                    {/*                key={data.id}*/}
                    {/*                name={data.name}*/}
                    {/*                code={data.code}*/}
                    {/*                selected={this.state.selected[data.id]}*/}
                    {/*                handleSelect={this.handleSelect}*/}
                    {/*            />*/}
                    {/*    );*/}
                    {/*    })*/}
                    {/*}*/}
                    {/*</tbody>*/}
                </table>
            </div>
        );
    }


    // render() {
    //     return (
    //         <div className="csvjson">
    //             <button onClick={this.getdata}>Import CSV Data</button>
    //
    //             {/*<div id = 'code'>*/}
    //             {/*    <ul>*/}
    //             {/*        {this.state.code.map(item => (*/}
    //             {/*            <li key={item}>{item}</li>*/}
    //             {/*        ))}*/}
    //             {/*    </ul>*/}
    //             {/*</div>*/}
    //             {/*<div id = 'name'>*/}
    //             {/*    <ul>*/}
    //             {/*        {this.state.name.map(item => (*/}
    //             {/*            <li key={item}>{item}</li>*/}
    //             {/*        ))}*/}
    //             {/*    </ul>*/}
    //             {/*</div>*/}
    //
    //             {/*<div>*/}
    //             {/*<ul>*/}
    //             {/*    {this.state.name.map(function(name, index){*/}
    //             {/*        return <li key={ index }>{name}</li>;*/}
    //             {/*    })}*/}
    //             {/*    {this.state.code.map(function(code, index){*/}
    //             {/*        return <li key={ index }>{code}</li>;*/}
    //             {/*    })}*/}
    //             {/*</ul>*/}
    //             {/*<div/>*/}
    //
    //
    //             <div>
    //                 <p>{this.state.code[0]} {this.state.name[0]}</p>
    //                 <input type="checkbox"/>
    //             </div>
    //         </div>
    //
    //
    //     );
    // }
}
