import React from 'react';

// import classes from './Header.css';
import './Header.css';

import user from '../../assets/images/user.png';
import question from '../../assets/images/question.png';

class Header extends React.Component {

    render() {
        return (
            <div className='Header'>
                <p id='header'>Header here</p>
                <img id='user' src={user} height="50" width="50"/>
                <img id='question' src={question} height="50" width="50"/>
                <p id='cm'>Cost Manager </p>
            </div>
        );
    }
}


export default Header;
