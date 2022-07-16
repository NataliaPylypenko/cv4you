import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

const Description = ({ className, children, ...attr }) => {

    const classes = classNames('cv-description', className)

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
    className: propTypes.string,
    children: propTypes.node.isRequired,
}

Description.defaultProps = {
    className: '',
}

export default Description