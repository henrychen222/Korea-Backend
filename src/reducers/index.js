import { combineReducers } from 'redux';

import { authentication } from './authenticationReducer';
import { registration } from './registrationReducer';
import { users } from './usersReducer';
import { alert } from './alertReducer';
import { project } from './project.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    project
});

export default rootReducer;
