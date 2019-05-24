// 5.15 5.16

import React from 'react';

import './project.css'
import CsvData from '../Utils/csv';
import NewCsvData from '../Utils/csvjson';

import right_arrow from '../../assets/images/right_arrow.png';
import menu from '../../assets/images/menu.png';
import trash from '../../assets/images/trash.png';

export class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

        //data binding
        this.selectAll = this.selectAll.bind(this);
        this.clearSelection = this.clearSelection.bind(this);
    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({displayMenu: true}, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({displayMenu: false}, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }

    selectAll(){
        this.setState()
    }

    clearSelection = () => {

    };


    render() {
        return (
            <div className="Project">
                <p>Project come in Hi</p>

                <button id='re'>Resource Catalog</button>
                <button id='pn'>PROJECT NAME</button>
                <button id='pc'>PROJECT CODE</button>
                <button id='pro_name'>PROJECT NAME</button>
                <button id='pro_code'>PROJECT CODE</button>


                <img id='trash' src={trash} height="30" width="30"/>

                <div>
                    <img id='menu' src={menu} height="30" width="30" onClick={this.showDropdownMenu}/>
                    <img id='right_arrow' src={right_arrow} height="30" width="30"/>
                    {this.state.displayMenu ? (
                            <ul id= 'dropdown'>
                                <li onClick={this.selectAll}>Select All</li>
                                <li onClick={this.clearSelection}>Clear Selection</li>
                            </ul>
                        ) :
                        (
                            null
                        )
                    }
                </div>

                <div id='project_selection'>
                    <select>
                        <option name='project1'>Project 1</option>
                        <option name='project1'>Project 2</option>
                        <option name='project1'>Project 3</option>
                        <option name='project1'>Project 4</option>
                    </select>
                </div>

                <div id='table1'>
                    {/*<p>here is table 1</p>*/}
                    <div id='csvdata'>
                        {/*<CsvData/>*/}
                        <NewCsvData para1 = {1} para2 = "1"/>
                    </div>
                </div>

                <button id='project'>Project</button>
                <div id='table2'>
                    <p>here is table 2</p>
                </div>


                <p id='edit_resource'>Edit resource</p>
            </div>
        );
    }
}
