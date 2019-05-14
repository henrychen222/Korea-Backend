// 5.14  works

// import {csv} from 'd3-request';
// import csvData from '../../../src/assets/data';

import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader';
import { CsvToHtmlTable } from 'react-csv-to-table';

import './csv.css'

export default class csvData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: csvData
        };
    }

    handleFiles = files => {
        let reader = new FileReader();
        reader.onload = () => {
            // Use reader.result
            this.setState({
                csvData: reader.result
            })
            // console.log(csvData[0]);
            console.log(typeof (csvData));
        }
        reader.readAsText(files[0]);
    }

    render() {
        return (
            <div id='table'>
                <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                    <button className='btn'>Upload</button>
                </ReactFileReader>
                <CsvToHtmlTable
                    data={this.state.csvData}
                    csvDelimiter=","
                    tableClassName="table table-striped table-hover"
                />
            </div>

        );
    }
}

