import React from 'react';
import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import {Link} from "react-router-dom";

class sidebar extends React.Component {

    render() {
        return (

            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                }}
            >
                <SideNav.Toggle/>
                <SideNav.Nav defaultSelected="resource">
                    <NavItem eventKey="resource">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            <Link to="/resource">
                                Resource
                            </Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="project">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            <Link to="/project">
                                Project
                            </Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="formula">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{fontSize: '1.75em'}}/>
                        </NavIcon>
                        <NavText>
                            <Link to="/formula">
                                Formula
                            </Link>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>


        );
    }
}


export default sidebar;
