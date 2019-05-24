//Example   Data Binding  Parent Child   use props

import React from 'react';
import {Child} from "./Child";

export class Parent extends React.Component {
    getInitialState() {
        return {
            language: '',
        };
    }

    handleLanguageCode = (langValue) => {
        this.setState({language: langValue});
    }

    render() {
        return (
            <div className="col-sm-9">
                <Child onSelectLanguage={this.handleLanguage}/>
            </div>
        );
    }

}
