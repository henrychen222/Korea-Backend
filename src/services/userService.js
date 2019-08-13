import {authHeader} from '../helpers';

import axios from 'axios';
import {Register} from "../components/RegisterPage";

export const userService = {
    login,
    login_springboot,
    logout,
    register,
    register_springBoot,
    getAll,
    getById,
    update,
    delete: _delete
};

// function login(username, password) {
//     const requestOptions = {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({username, password})
//     };
//
//     return fetch(`/users/authenticate`, requestOptions)
//         .then(handleResponse)
//         .then(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('user', JSON.stringify(user));
//
//             return user;
//         });
// }

/* Use backend API: Login  5.14 */
function login(username, password) {
    console.log(username);
    console.log(password);

    return axios.post('http://localhost:8080/newIndividual/login', {
        username: username,
        password: password,
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

/* Use SpringBoot backend API: Login  6.27 */
function login_springboot(username, password) {
    console.log(username);
    console.log(password);

    return axios.post('http://localhost:8080/login', {
        username: username,
        password: password,
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users`, requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

// function register(user) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };
//
//     return fetch(`/users/register`, requestOptions).then(handleResponse);
// }

/* Use backend API: Register  5.14 */
function register(user) {
    console.log(user.username);  //can get
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.password);
    console.log(user.email);

    return axios.post('http://localhost:8080/newIndividual/register', {
        //firstname, lastname, username, password, email should be the same as the postman test example
        firstname: user.firstName,
        lastname: user.lastName,
        username: user.username,
        password: user.password,
        email: user.email
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

/* Use SpringBoot backend API: Register  6.27 */
function register_springBoot(user) {
    console.log(user.username);
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.password);
    console.log(user.email);

    return axios.post('http://localhost:8080/register', {
        firstname: user.firstName,
        lastname: user.lastName,
        username: user.username,
        password: user.password,
        email: user.email
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: {...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`/users/${user.id}`, requestOptions).then(handleResponse);
    ;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // location.reload(true);  not working
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
