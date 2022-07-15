import React from 'react'

import './Header.scss'
import propTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = ({ onClick }) => {
    return (
        <header className='Header'>
            <div className='ui-container'>
                <div className='Header_content'>
                    <span className='Header_logo'>Cv4you</span>
                    <button className='ui-button isLink' onClick={onClick}>
                        <FontAwesomeIcon icon={['fa', 'print']} />
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