import { projectConstants } from '../constants/project.constants'

export function project(state = {}, action) {
    switch (action.type) {
        case projectConstants.SELETED_PROJECT:
            return { getProjectInfo: true, project: action.selectedProject };
        case projectConstants.SELETED_LIST:
            return { getSelectedProjectList: true, projectList: action.selectedProjectList, featureIdList: action.seletedFeatureId, projectId: action.projectId };
        case projectConstants.FEATURES_COLS:
            return { getSelectedFeatureIdList: true, featureIdList: action.seletedFeatureId, projectList: action.selectedProjectList, projectId: action.projectId };
        default:
            return state
    }
}