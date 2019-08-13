// Template Page  8.9
import React from 'react'
import axios from '../../../helpers/axiosInstance'
import { connect } from 'react-redux'
import { history } from '../../../helpers/history'
import classes from './Edit.module.css'
import Cell from '../../Elements/TableCell/Cell'
import Field from '../Field/Field'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { projectAction } from '../../../actions';

class Edit extends React.Component {

    state = {
        FeaturesList: null,
        CurrentProjectId: 1,
        selectedFeaturesIdList: [],
        loading: false,
        InputFields: []
    }

    componentDidMount() {
        axios.get('/project/' + this.state.CurrentProjectId + '/getAllFeatures')
            .then(response => {
                this.setState({ FeaturesList: response.data });
                // console.log(response)
            })
    }

    resetField(projectId) {
        axios.get('/project/' + projectId + '/getAllFeatures')
            .then(response => {
                this.setState({
                    CurrentProjectId: projectId,
                    FeaturesList: response.data
                })
            })
    }

    backToFormulaHandler = () => {
        this.props.history.push('/formulaNew')
    }

    submitHandler = () => {
        const { projectList, projectId } = this.props
        this.props.dispatch(projectAction.showSelectedFeatures(this.state.selectedFeaturesIdList, projectList, projectId))

        var objs = document.getElementsByClassName('field')
        for (var index = 0; index < objs.length; index++) {
            var inputs = objs[index].getElementsByTagName('input')
            const obj = {
                name: inputs[0].value,
                type: inputs[1].value,
                content: null,
                projectId: this.state.CurrentProjectId
            }
            axios.post('/project/saveFeature', obj)
                .then(response => {
                    console.log(response)
                })
                .catch(error => {
                    console.log(error)
                })
        }
        history.push('/formulaNew')
    }

    checkboxClick = (event, featureValue, featureId) => {
        const selectedFeature = [...this.state.selectedFeaturesIdList]
        if (event.target.checked) {
            selectedFeature.push(Number(featureId));
        } else {
            for (var i = 0; i < selectedFeature.length; i++) {
                if (selectedFeature[i] === featureId) {
                    selectedFeature.splice(i, 1);
                }
            }
        }
        this.setState({ selectedFeaturesIdList: selectedFeature })
    }

    rightTrashHandler = (index) => {
        const fields = [...this.state.InputFields]
        fields[index - 1] = ''
        // console.log(index - 1)
        this.setState({ InputFields: fields })
    }

    optionChangeHandler = (e) => {
        if (e.target.value !== 'Formula') {
            e.target.parentNode.nextSibling.childNodes[0].childNodes[2].disabled = true
        } else {
            e.target.parentNode.nextSibling.childNodes[0].childNodes[2].disabled = false
        }
    }

    addFieldHandler = () => {
        const fields = [...this.state.InputFields]
        fields.push(<div key={fields.length + 1} className={[classes.Field, 'field'].join(' ')}>
            <Field index={fields.length + 1} isFormula={false} rightTrashHandler={this.rightTrashHandler} changed={this.optionChangeHandler} />
        </div>);
        this.setState({ InputFields: fields })
    }

    render() {
        const { projectId } = this.props
        if (projectId !== undefined) {
            if (projectId !== this.state.CurrentProjectId) {
                this.resetField(projectId)
            }
        }
        console.log(projectId)
        var features = [];
        if (this.state.FeaturesList) {
            features = [...this.state.FeaturesList]
        }
        return (
            <>
                <div className={classes.Container}>
                    <div className={classes.TablesContainer}>
                        <div className={classes.Tables}>
                            <div className={classes.LeftTable}>
                                <div className={classes.InnerTable}>
                                    <Cell value={'Project Scope Field'} isHeader={true} />
                                    <div className={classes.HeaderContainer}>
                                        {features.map((feature, index) => (
                                            <Cell className={classes.Cell} key={index} value={feature.name} id={feature.id} isHeader={false} hasCheckbox={true} checkBoxValue={feature.id} checkboxClick={this.checkboxClick} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={classes.RightTable}>
                                <div className={classes.InnerTable}>
                                    <Cell value={'Quantity Survey Field'} isHeader={true} />
                                </div>
                                {this.state.InputFields}
                                <div className={classes.RightTableBtn}>
                                    Add Field&nbsp;
                                <button onClick={(e) => this.addFieldHandler(e)} className={classes.Button}>
                                        <FontAwesomeIcon color="rgb(255, 255, 255)" icon="plus" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={classes.TableBottom}>Bottom</div>
                        <button onClick={this.backToFormulaHandler}>Submit</button>
                    </div>
                    <div className={classes.Bottom}>
                        <button className={classes.SubmitButton} onClick={this.submitHandler}>Submit</button>
                    </div>
                </div>
            </>
        );
    }
}
function mapStateToProps(state) {
    const { projectList, projectId } = state.project
    return {
        projectList, projectId
    }
}
const connectedEdit = connect(mapStateToProps)(Edit)
export default connectedEdit;