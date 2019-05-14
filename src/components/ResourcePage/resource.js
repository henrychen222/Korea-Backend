import React from 'react';

import ReactTableComponent from './ReactTableComponent.js';

import './resource.css';

import CsvData from './CsvData';

export class Resource extends React.Component {
    render() {
        return (
            <div className="Resource">
                <p>Resource Come LOL</p>
                <img id='add' src="../../assets/images/add.jpg" height="50" width="50"/>
                <div id='table1'>
                    {/*<ReactTableComponent/>*/}
                    <CsvData/>
                </div>
                <div id='table2'>
                    <p>here is table 2</p>
                </div>

            </div>
        );
    }
}
