// 5.15 most update     5.13 5.14

import React from 'react';

import ReactTableComponent from './ReactTableComponent.js';

import './resource.css';
import add from '../../assets/images/add.jpg';

import CsvData from '../Utils/csv';
import DropDownExample from './DropDownExample';
import DropDownExampleThree from './DropDownExampleThree';
import DropDownExampleTwo from "./DropDownExampleTwo";
import DropDownExampleFour from "./DropDownExampleFour";


import {Modal, Button} from 'react-bootstrap'


export class Resource extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayMenu: false,
            show: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

        // this.handleShow = this.handleShow.bind(this);
        // this.handleClose = this.handleClose.bind(this);

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


    addRow() {

    }

    addColumn() {

    }

    // handleClose() {
    //     this.setState({show: false});
    // }
    //
    // handleShow() {
    //     this.setState({show: true});
    // }

    importcsv() {
        return (<CsvData/>);

        // React Modal here:
        // return (
        //     <>
        //         <Button variant="primary" onClick={this.handleShow}>
        //             Launch demo modal
        //         </Button>
        //
        //         <Modal show={this.state.show} onHide={this.handleClose}>
        //             <Modal.Header closeButton>
        //                 <Modal.Title>Modal heading</Modal.Title>
        //             </Modal.Header>
        //             <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        //             <Modal.Footer>
        //                 <Button variant="secondary" onClick={this.handleClose}>
        //                     Close
        //                 </Button>
        //                 <Button variant="primary" onClick={this.handleClose}>
        //                     Save Changes
        //                 </Button>
        //             </Modal.Footer>
        //         </Modal>
        //     </>
        // );
    }

    render() {
        return (
            <div className="Resource">
                <p>Resource Catalog</p>
                <div>
                    <img id='add' src={add} height="50" width="50" onClick={this.showDropdownMenu}/>
                    {this.state.displayMenu ? (
                            <ul>
                                <li><a href="#Add Row" onClick={this.addRow}>Add Row</a></li>
                                <li><a href="#Add Column" onClick={this.addColumn}>Add Column</a></li>
                                <li><a href="#Import csv" onClick={this.importcsv}>Import csv</a></li>
                                {/*<li onClick={this.importcsv}>Import csv</li>*/}
                            </ul>
                        ) :
                        (
                            null
                        )
                    }
                </div>

                <div id='csvdata'>
                    {/*<ReactTableComponent/>*/}
                    <CsvData/>
                </div>


                {/*<DropDownExample/>*/}
                {/*<DropDownExampleTwo/>*/}
                {/*<DropDownExampleThree/>*/}
                {/*<DropDownExampleFour/>*/}
            </div>
        );
    }
}
