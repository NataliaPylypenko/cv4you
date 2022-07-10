import React from 'react'

import './Header.scss'
import propTypes from "prop-types";
import Avatar from "../content/avatar/Avatar";

const Header = ({ onClick }) => {
    return (
        <header className='Header'>
            <div className='ui-container'>
                <div className='Header_content'>
                    <span className='Header_logo'>Cv builder</span>
                    <button className='ui-button isLink' onClick={onClick}>
                        Print
                    </button>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    onClick: propTypes.func,
}

Header.defaultProps = {
    onClick: () => {},
}

export default Header