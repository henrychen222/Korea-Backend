import React from 'react';

// import classes from './Header.css';
import './Header.css';

class Header extends React.Component {

    render() {
        return (
            <div className='Header'>
                <p id='header'>Header here</p>
                <img id='user' src="../../assets/images/user.png" height="50" width="50"/>
                <img id='question' src="../../assets/images/quesion.png" height="50" width="50"/>

            </div>
        );
    }
}


export default Header;
