import React from 'react';
import './four.css';
import add from "../../assets/images/add.jpg";


export default class DropDownExampleFour extends React.Component {
    constructor() {
        super();
        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

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

    render() {
        return (
            <div className="dropdown" style={{background: "red", width: "200px"}}>
                <div><img id='add' src={add} height="50" width="50" onClick={this.showDropdownMenu}/></div>
                {this.state.displayMenu ? (
                        <ul>
                            <li><a href="#Add Row">Add Row</a></li>
                            <li><a href="#Add Column">Add Column</a></li>
                            <li><a href="#Import csv">Import csv</a></li>
                        </ul>
                    ) :
                    (
                        null
                    )
                }

            </div>

        );
    }
}
