// 5.14  works

// import {csv} from 'd3-request';
// import csv from '../../../src/assets/data';

import React, {Component} from 'react';
import ReactFileReader from 'react-file-reader';
import {CsvToHtmlTable} from 'react-csv-to-table';

import './csv.css'
import {data} from "../ResourcePage/data";
import ReactTable from "react-table";

export default class csv extends Component {

    constructor(props) {
        super(props);
        this.state = {
            csvData: ''
        };
    }

    handleFiles = files => {
        let reader = new FileReader();
        reader.onload = () => {
            // Use reader.result
            this.setState({
                csvData: reader.result
            })

            let data = reader.result.split(',');
            console.log(data);
            console.log(reader.result);
            console.log(reader.result[1]);
            console.log(typeof (reader.result));
            console.log(reader.result.length);
        }
        reader.readAsText(files[0]);
    }

    render() {
        return (
            <div className='csv'>
                <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
                    <button className='btn'>Import CSV Data</button>
                </ReactFileReader>

                <div id='table'>
                    <CsvToHtmlTable
                        data={this.state.csvData}
                        csvDelimiter=","
                        tableClassName="table table-striped table-hover"
                    />

                </div>
            </div>
        );
    }
}

