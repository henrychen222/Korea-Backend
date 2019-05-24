
import React from 'react';
export class Child extends React.Component {

    getInitialState = () => {
        return{
            selectedCode: '',
            selectedLanguage: '',
        };
    }

    handleLangChange = () => {
        var lang = this.dropdown.value;
        this.props.onSelectLanguage(lang);
    }

    render() {
        var json = require("json!../languages.json");
        var jsonArray = json.languages;
        return (
            <div>
                <DropdownList ref='dropdown'
                              data={jsonArray}
                              value={this.state.selectedLanguage}
                              caseSensitive={false}
                              minLength={3}
                              filter='contains'
                              onChange={this.handleLangChange} />
            </div>
        );
    }

}
