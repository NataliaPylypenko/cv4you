import React from 'react'

import './Footer.scss'

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className='cv-container'>
                <a
                    className='cv-link'
                    href='https://github.com/NataliaPylypenko/cv4you'
                    target='_blank'
                >
                    Github
                </a>
            </div>
        </footer>
    )
}

export default Footer