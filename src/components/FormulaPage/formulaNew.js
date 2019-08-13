// Template Page  8.9
import React from 'react'
import axios from '../../helpers/axiosInstance'
import classes from './formulaNew.module.css'
import Table from '../Elements/Table/Table'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { projectAction } from '../../actions';

class FormulaNew extends React.Component {

    state = {
        ProjectResource: { data: [] },
        ProjectList: [],
        seletedProjects: [],
        loading: false
    }

    componentDidMount() {
        axios.get('/getAllProjects')
            .then(response => {
                this.setState({ ProjectList: response.data });
            })
    }

    selectProjectHandlder = (event) => {
        axios.get('/getData/' + Number(event.target.value))
            .then(response => {
                this.setState({ ProjectResource: response })
            })
            .catch(error => {
                console.log(error);
                this.setState({ errorInfo: 'Not found Reource' })
            });
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

    editCellHandler = (event, projectId, resourceId, featureId, featureName, featureCode, isFeatureName) => {
        var element = event.target;
        var curVal = element.innerHTML;
        element.innerHTML = "";
        var newObj = document.createElement("input");
        newObj.className = "editCell";
        newObj.value = curVal;
        element.appendChild(newObj);
        var padding = element.style.padding;
        element.style.padding = '0'
        newObj.focus();
        newObj.onblur = () => {
            element.innerHTML = this.value ? this.value : newObj.value;
            element.style.padding = padding
            if (featureId === '') {
                this.updateResourceHandler(projectId, resourceId, newObj.value, featureName, featureCode, isFeatureName)
            } else {
                this.updateFeatureValueHandler(projectId, resourceId, featureId, newObj.value)
            }
        }
    }

    editBtnHandler = () => {
        this.props.history.push('/FormulaNewEdit')
    }

    render() {
        const { projectList, featureIdList, projectId } = this.props
        this.props.dispatch(projectAction.showSelectedFeatures(featureIdList, projectList, projectId))
        const datas = []
        const selectedColIds = featureIdList !== undefined ? [...featureIdList] : []
        const titles = ['Resource Name', 'Resource Code']
        var Resource = projectList !== undefined ? [...projectList] : [];
        function checkFeatureId(feature) {
            return selectedColIds.includes(feature.id)
        }
        for (let each of Resource) {
            const features = [...each.features]
            const filterFeature = features.filter(checkFeatureId)
            const data = { ...each }
            data.features = filterFeature
            if (featureIdList === undefined) {
                data.feature = []
            }
            datas.push({ ...data })
        }
        if (datas.length > 0) {
            for (let feature of datas[0].features) {
                titles.push(feature.name)
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

        return (
            <div className={classes.Container}>
                <div className={classes.TablePart}>
                    <div className={classes.TopBar}>
                        <div className={classes.Title}>
                            <span>Quantity Survey</span>
                        </div>
                    </div>
                    <div style={tabaleContainerStyle}>
                        <Table style={style} colWidth={colWidth} titles={titles} datas={datas} isEditable={true} editable={this.editCellHandler} />
                    </div>
                </div>
                <div className={classes.Bottom}>
                    <div>
                        <label className={classes.EditLink} onClick={this.editBtnHandler}>
                            Edit Quantity Survey Template
                        </label>
                    </div>
                    <button className={classes.Button}>
                        <FontAwesomeIcon color="rgb(255, 255, 255)" icon="check" /> &nbsp;
                        submit
                    </button>
                </div>
            </div>
        )
    }

}
function mapStateToProps(state) {
    const { projectList, featureIdList, projectId } = state.project
    return {
        projectList, featureIdList, projectId
    }
}
const connectedFormula = connect(mapStateToProps)(FormulaNew)
export default connectedFormula;