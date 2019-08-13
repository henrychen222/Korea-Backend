import React from 'react';
import './App.css';

import { Router, Route } from 'react-router-dom';
import { PrivateRoute } from './route/privateRoute';
import { history } from './helpers';

import { Login } from './components/LoginPage/login';
import { Register } from './components/RegisterPage/';
import ResourceNew from './components/ResourcePage/resourceNew';  //use export default no {}
import ProjectNew from './components/ProjectPage/projectNew';
import FormulaNew from './components/FormulaPage/formulaNew';
import Edit from './components/FormulaPage/Edit/Edit'; 

import { NavigationHome } from './components/HomePage/navigationHome';
import { Home } from './components/HomePage/home';
import { Formula } from './components/FormulaPage/formula';
import { Resource } from './components/ResourcePage/resource';
import { Project } from './components/ProjectPage/project';
import Header from "./components/Header/Header";
import Sidebar from "./components/Navigation/sidebar";



function App() {
    return (
        <div className="App">
            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <Router history={history}>
                <Header />
                <Sidebar />
                <div>
                    <PrivateRoute exact path="/" component={Home} />
                    {/* use Redux */}
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/resourceNew" component={ResourceNew} />
                    <Route path="/projectNew" component={ProjectNew} />
                    <Route path="/FormulaNew" component={FormulaNew} />
                    <Route path="/FormulaNewEdit" component={Edit} />

                    {/* no Redux */}
                    <Route path="/home" component={NavigationHome} />
                    <Route path="/formula" component={Formula} />
                    <Route path="/resource" component={Resource} />
                    <Route path="/project" component={Project} />



                    {/* <Route path="/projectNew" component={ProjectNew} /> */}

                    {/*<Route render = {() => <h2> Wei Chen's Page</h2>}/>  */}
                </div>
            </Router>
        </div>
    );
}

export default App;
