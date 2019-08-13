// created 8.3 night
import React from 'react'
import classes from './projectNew.module.css'
import axios from '../../helpers/axiosInstance'
import Select from '../Elements/Selection/Selection'
import Table from '../Elements/Table/Table'
import ProjectPart from './LeftTable/LeftTable'
import { connect } from 'react-redux'
import { history } from '../../helpers/history'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { projectAction } from '../../actions';

class ProjectNew extends React.Component {

    state = {
        Resource: null,
        ProjectList: [],
        initProjectId: 1,
        leftResourceIdList: [],
        rightResourceIdList: [],
        RightResource: [],
        loading: false,
    }

    componentDidMount() {
        axios.get('/getData/' + this.state.initProjectId)
            .then(response => {
                this.setState({ Resource: response })
            })
            .catch(error => {
                console.log(error);
                this.setState({ errorInfo: 'Not found Reource' })
            });
        axios.get('/getAllProjects')
            .then(response => {
                this.setState({ ProjectList: response.data });
            })
    }

    selectProjectHandlder = (event) => {
        this.setState({ RightResource: [] });
        const val = Number(event.target.value)
        axios.get('/getData/' + val)
            .then(response => {
                this.setState({ Resource: response, initProjectId: val })
            })
            .catch(error => {
                console.log(error);
                this.setState({ errorInfo: 'Not found Reource' })
            });
        this.cancelLeftAllHandler()
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

    optionHandler = (event) => {
        this.setState({ showOption: !this.state.showOption })
    }

    checkBoxAddHandler = (event, resourceId) => {
        // console.log(event.target.checked)
        // console.log(resourceId)
        // console.log(checkBoxIndex)
        // const leftRemoveIndexList = [...this.state.leftRemoveIndexList]
        const leftResourceIdList = [...this.state.leftResourceIdList]
        if (event.target.checked) {
            leftResourceIdList.push(Number(resourceId))
            // leftRemoveIndexList.push(Number(checkBoxIndex))
        } else {
            for (var i = 0; i < leftResourceIdList.length; i++) {
                if (leftResourceIdList[i] === resourceId) {
                    leftResourceIdList.splice(i, 1);
                }
            }
        }
        this.setState({ leftResourceIdList: leftResourceIdList })
    }

    checkBoxDeleteHandler = (event, resourceId) => {
        const rightResourceIdList = [...this.state.rightResourceIdList]
        if (event.target.checked) {
            rightResourceIdList.push(Number(resourceId))
        } else {
            for (var i = 0; i < rightResourceIdList.length; i++) {
                if (rightResourceIdList[i] === resourceId) {
                    rightResourceIdList.splice(i, 1);
                }
            }
        }
        this.setState({ rightResourceIdList: rightResourceIdList })
    }

    addToRightBtnHandler = (event) => {
        const list = [...this.state.RightResource]
        if (this.state.Resource) {
            for (let key in this.state.Resource.data) {
                if (this.state.leftResourceIdList.includes(this.state.Resource.data[key].resource.id)
                    && !list.includes(this.state.Resource.data[key])) {
                    list.push(this.state.Resource.data[key])
                }
            }
        }
        this.setState({ RightResource: list })
        this.cancelLeftAllHandler()
        this.cancelRightAllHandler()
    }

    rightTrashHandler = (event) => {
        const list = []

        for (let key in this.state.RightResource) {
            if (!this.state.rightResourceIdList.includes(this.state.RightResource[key].resource.id)) {
                list.push(this.state.RightResource[key])
            }
        }

        this.setState({ RightResource: list })
        this.cancelRightAllHandler()
    }

    selectLeftAllHandler = (event) => {
        var objs = document.getElementById('left-table').getElementsByTagName('input')
        for (var i = 0; i < objs.length; i++) {
            objs[i].checked = true
        }
        const leftResourceIdList = [];
        for (let key in this.state.Resource.data) {
            leftResourceIdList.push(this.state.Resource.data[key].resource.id)
        }
        this.setState({ leftResourceIdList: leftResourceIdList, showOption: false })
    }

    cancelLeftAllHandler = (event) => {
        var objs = document.getElementById('left-table').getElementsByTagName('input')
        for (var i = 0; i < objs.length; i++) {
            objs[i].checked = false
        }
        this.setState({ showOption: false })
    }

    cancelRightAllHandler = (event) => {
        var objs = document.getElementById('right-table').getElementsByTagName('input')
        for (var i = 0; i < objs.length; i++) {
            objs[i].checked = false
        }
    }

    submitHandler = () => {
        history.push('/formulaNew')  //change
    }

    render() {
        // console.log(this.state.initProjectId)
        // deep copy left table data
        const datas = []
        var Resource = { ...this.state.Resource }
        // console.log(this.state.Resource)
        if (Resource) {
            for (let key in Resource.data) {
                datas.push({ ...Resource.data[key] })
                datas[key].features = []
            }
        }
        const colWidth = '50%';
        const titles = ['Project Name', 'Project Code']
        const style = {
            width: '100%'
        }
        // deep copy right table data
        var rightDatas = []
        Resource = [...this.state.RightResource]
        if (Resource) {
            for (let key in Resource) {
                rightDatas.push({ ...Resource[key] })
                rightDatas[key].features = []
            }
        }
        // Redux for seletedList
        const { featureIdList } = this.props
        this.props.dispatch(projectAction.selectedProjectList(this.state.RightResource, featureIdList, this.state.initProjectId))

        return (
            <div className={classes.Container}>
                <div className="project-page">
                    <Select list={this.state.ProjectList} changed={this.selectProjectHandlder} />
                </div>
                <div className={classes.Tables}>
                    <ProjectPart header={"Resource Catalog"} optionHandler={this.optionHandler} selectLeftAllHandler={this.selectLeftAllHandler} cancelLeftAllHandler={this.cancelLeftAllHandler}
                        addToRightBtnHandler={this.addToRightBtnHandler}
                        hasCheckBox={true} style={style} colWidth={colWidth} titles={titles} datas={datas}
                        checkBoxAddHandler={this.checkBoxAddHandler} showOption={this.state.showOption} isEditable={true} />
                    <div id="right-table" className={classes.Table}>
                        <div className={classes.TopBar}>
                            <div className={classes.Title}>
                                <span>Project</span>
                            </div>
                            <div className={classes.dropdown}>
                                <button onClick={(e) => this.rightTrashHandler(e)} className={classes.Button}>
                                    <FontAwesomeIcon color="rgb(255, 255, 255)" icon="trash" />
                                </button>
                            </div>
                        </div>
                        <Table hasCheckBox={true} style={style} colWidth={colWidth} titles={titles} datas={rightDatas} checkboxClick={this.checkBoxDeleteHandler} isEditable={false} editable={this.editCellHandler} />
                    </div>
                </div>
                <div className={classes.Bottom}>
                    <button className={classes.SubmitButton} onClick={this.submitHandler}>
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
const connectedProjectPage = connect(mapStateToProps)(ProjectNew)
export default connectedProjectPage;
// export {connectedProjectPage as ProjectNew};