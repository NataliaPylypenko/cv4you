import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

const Period = ({ className, children, ...attr }) => {

    const classes = classNames('cv-description cv-period', className)

    return (
        <div
            className={classes}
            contentEditable
            suppressContentEditableWarning
            spellCheck={false}
            {...attr}
        >
            <span>{children}</span>
        </div>
    )
}

Period.propTypes = {
    className: propTypes.string,
    children: propTypes.node.isRequired,
}

Period.defaultProps = {
    className: '',
}

export default Period