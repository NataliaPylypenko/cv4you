import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

const Description = ({ isPrimary, isSecondary, className, children, ...attr }) => {

    const classes = classNames('cv-description', className, {
        isPrimary,
        isSecondary
    })

    return (
        <p
            className={classes}
            contentEditable
            suppressContentEditableWarning
            spellCheck={false}
            {...attr}
        >
            {children}
        </p>
    )
}

Description.propTypes = {
    isPrimary: propTypes.bool,
    isSecondary: propTypes.bool,
    className: propTypes.string,
    children: propTypes.node.isRequired,
}

Description.defaultProps = {
    isPrimary: false,
    isSecondary: false,
    className: '',
}

export default Description