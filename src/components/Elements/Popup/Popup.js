import React, { Component } from 'react'
import Buttom from '../Button/Button'
import classes from './Popup.module.css'
// import PropTypes from 'prop-types';

class popup extends Component {

    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            // alert('You clicked outside of me!');
            this.props.closePopup();
        }
    }

    render() {
        const style = {
            width: '30%',
            backgroundColor: 'rgb(235, 67, 37)',
        }
        console.log(this.props.children)
        return (
            <div className={classes.popuptext} ref={this.setWrapperRef}>
                <div className={classes.Content}>
                    <div className={[classes.Title, classes.Text].join(' ')}>{this.props.children}</div>
                    <div className={classes.Text}>Member since November-2015</div>
                </div>
                <div className={classes.Botton}>
                    <div className={classes.ButtonContent}>
                        <div style={style}>
                            <Buttom type="button" clicked={this.props.clickedProfile} customized={"Popbtn"}>Profile</Buttom>
                        </div>
                        { this.props.isLogin === true &&
                            <div style={style}>
                                <Buttom type="button" clicked={this.props.clickedLogout} customized={"Popbtn"}>Log out</Buttom>
                            </div>
                        }
                        { this.props.isLogin !== true &&
                            <div style={style}>
                                <Buttom type="button" clicked={this.props.clickedLogin} customized={"Popbtn"}>Log in</Buttom>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     const { loggedIn } = state.authentication;
//     return {
//         loggedIn
//     };
// }
// const connectedLoginPage = connect(mapStateToProps)(popup)
// export default connectedLoginPage
// popup.propTypes = {
//     children: PropTypes.element.isRequired,
//   };
export default popup;