import React from 'react'
import axios from '../../helpers/axiosInstance'
import { connect } from 'react-redux'
import classes from './resourceNew.module.css'
import Table from '../Elements/Table/Table'
import Search from '../Elements/Search/Search'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ResourceNew extends React.Component {

    state = {
        CurrentProjectId: 1,
        PrevProectId: 1,
        Resource: null,
        savedResource: null,
        errorInfo: null,
        showOption: false,
        loading: false,
    }

    componentDidMount() {
        axios.get('/getData/' + this.state.CurrentProjectId)
            .then(response => {
                this.setState({ Resource: response, savedResource: response })
            })
            .catch(error => {
                console.log(error);
                this.setState({ errorInfo: 'Not found Reource' })
            })
    }

    updateResourceHandler = (projectId, resourceId, newVal, featureName, featureCode, isFeatureName) => {
        console.log(projectId + " " + resourceId + " " + newVal + " " + featureName + " " + featureCode + " " + isFeatureName)
        const feature = {};
        feature['id'] = resourceId
        feature['projectId'] = projectId
        if (isFeatureName) {
            feature['name'] = newVal
            feature['code'] = featureCode
        } else {
            feature['name'] = featureName
            feature['code'] = newVal
        }
        axios.put('/updateResource', feature)
            .then(res => {
                console.log(res)
                console.log("successfully update Resource")
            })
    }

    updateFeatureValueHandler = (projectId, resourceId, featureId, newVal) => {
        // console.log(projectId + " " + resourceId + " " + featureId + " " + newVal)
        const featureValue = {};
        featureValue['value'] = newVal;
        featureValue['projectId'] = projectId;
        featureValue['resourceId'] = resourceId;
        featureValue['featureId'] = featureId;
        axios.put('/updateFeatureValue', featureValue)
            .then(res => {
                console.log(res);
                console.log("successfully update value");
            })
    }

    searchInputChangeHandler = (event) => {
        const filterData = this.state.savedResource.data.filter(checkName)
        const resource = { ...this.state.Resource }
        resource.data = filterData
        this.setState({ Resource: resource })
        function checkName(data) {
            return data.resource.name.includes(event.target.value)
        }
    }

    optionHandler = (event) => {
        this.setState({ showOption: !this.state.showOption })
    }

    addRowHandler = () => {
        this.optionHandler()
        console.log("Add row")
    }

    addColHandler = () => {
        const feature = {};
        console.log(this.state.Resource)
        const len = this.state.Resource.data[0].features.length;
        feature['name'] = 'Untitle' + len;
        feature['projectId'] = this.state.CurrentProjectId;
        axios.post('/project/saveFeature', feature)
            .then(response => {
                window.location.reload(true)
            })
            .catch(error => {
                console.log(error)
            })
        this.optionHandler()
    }

    importCSVHandler = () => {
        this.optionHandler()
        console.log("Import csv")
    }

    render() {
        const datas = []
        const titles = ['Resource Name', 'Resource Code']
        if (this.state.Resource !== null) {
            for (let key in this.state.Resource.data) {
                datas.push(this.state.Resource.data[key])
            }
            for (let key in this.state.savedResource.data[0].features) {
                titles.push(this.state.savedResource.data[0].features[key].name);
            }
        }

        const colsNum = titles.length;
        const colWidth = String(100 / colsNum) + "%";
        var tableWith = '';
        var tabaleContainerStyle = {}
        if (colsNum < 5) {
            tableWith = '100%';
        } else {
            tableWith = String(170 * colsNum) + 'px';
            tabaleContainerStyle = {
                overflow: 'scroll',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderColor: 'rgb(138, 138, 137)',
                paddingBottom: '12px'
            }
        }
        const style = {
            width: tableWith
        }

        const table = (
            <div style={tabaleContainerStyle}>
                <Table style={style} colWidth={colWidth} titles={titles} datas={datas} isEditable={false} />
            </div>
        );

        return (
            <div className={classes.Container}>
                <div className={classes.TopBar}>
                    <div>
                        <Search clicked={this.searchHandler} placeholder={"Keyword"} changed={this.searchInputChangeHandler} />
                    </div>
                    <div>
                        <span className={classes.Title}>Resource Catalog</span>
                    </div>
                    <div className={classes.dropdown}>
                        <button onClick={(e) => this.optionHandler(e)} className={classes.Button}>
                            <FontAwesomeIcon color="rgb(255, 255, 255)" icon="plus" />
                        </button>
                        {this.state.showOption && <div id="myDropdown" className={classes.dropdownContent}>
                            <div onClick={this.addRowHandler}><a href="#row">Add row</a></div>
                            <div onClick={this.addColHandler}><a href="#col">Add column</a></div>
                            <div onClick={this.importCSVHandler}><a href="#csv">Import CSV</a></div>
                        </div>}
                    </div>
                </div>
                {table}
            </div>
        );
    }
}

function mapStateToProps(state) {
    //project is in reducer, get state from redux
    const { getProjectInfo, featureIdList, projectId } = state.project  
    const test = state.project.getProjectInfo
    console.log(test)
    return {
        getProjectInfo, featureIdList, projectId
    }
}
const connectedResource = connect(mapStateToProps)(ResourceNew)
export default connectedResource;
// export {connectedResource as ResourceNew};
