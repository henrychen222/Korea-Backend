import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../../actions';

import './register.css'

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                email: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({submitted: true});
        const {user} = this.state;
        const {dispatch} = this.props;
        if (user.firstName && user.lastName && user.username && user.password && user.email) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const {registering} = this.props;
        const {user, submitted} = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2 id='register'>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label id='fn' htmlFor="firstName">First Name</label>
                        <input id='fn_input' type="text" className="form-control" name="firstName" value={user.firstName}
                               onChange={this.handleChange}/>
                        {submitted && !user.firstName &&
                        <div className="help-block-fn">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label id='ln' htmlFor="lastName">Last Name</label>
                        <input id='ln_input' type="text" className="form-control" name="lastName" value={user.lastName}
                               onChange={this.handleChange}/>
                        {submitted && !user.lastName &&
                        <div className="help-block-ln">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                        <label id='un' htmlFor="username">Username</label>
                        <input id='un_input' type="text" className="form-control" name="username" value={user.username}
                               onChange={this.handleChange}/>
                        {submitted && !user.username &&
                        <div className="help-block-un">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label id='password' htmlFor="password">Password</label>
                        <input id='password_input' type="password" className="form-control" name="password" value={user.password}
                               onChange={this.handleChange}/>
                        {submitted && !user.password &&
                        <div className="help-block-password">Password is required</div>
                        }
                    </div>
                    {/*added*/}
                    <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
                        <label id='em' htmlFor="email">Email</label>
                        <input id='em_input' type="email" className="form-control" name="email" value={user.email}
                               onChange={this.handleChange}/>
                        {submitted && !user.email &&
                        <div className="help-block-em">Email is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button id='sign_up' className="btn btn-primary">Register</button>
                        {registering &&
                        <img
                            src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="/>
                        }
                        <button id='cancel_btn'><Link to="/login" className="btn btn-link">Cancel</Link></button>

                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {registering} = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(Register);
export {connectedRegisterPage as Register};
