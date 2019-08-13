import { projectConstants } from '../constants/project.constants'

export const projectAction = {
    selectedProjectInfo,
    selectedProjectList,
    showSelectedFeatures
}

function selectedProjectInfo(projectName, projectId) {
    return { type: projectConstants.SELETED_PROJECT, selectedProject: { name: projectName, id: projectId } };
}

function selectedProjectList(projectList, listOfFeatureId, projectId) {
    return {
        type: projectConstants.SELETED_LIST,
        selectedProjectList: projectList,
        seletedFeatureId: listOfFeatureId,
        projectId: projectId
    };
}

function showSelectedFeatures(listOfFeatureId, projectList, projectId) {
    return {
        type: projectConstants.FEATURES_COLS,
        seletedFeatureId: listOfFeatureId,
        selectedProjectList: projectList,
        projectId: projectId
    }
}