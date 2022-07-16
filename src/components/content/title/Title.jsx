import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'

const Title = ({ size, isUppercase, isLine, className, onClick, children, ...attr }) => {

    const classes = classNames(`cv-title-${size}`, className, {
        isUppercase,
        isLine
    })

    return (
        <div
            className={classes}
            contentEditable
            suppressContentEditableWarning
            spellCheck={false}
            {...attr}
        >
            <h2 className="h2">{children}</h2>
        </div>
    )
}

Title.propTypes = {
    size: propTypes.oneOf(['1', '2', '3']),
    isUppercase: propTypes.bool,
    className: propTypes.string,
    onClick: propTypes.func,
    children: propTypes.node.isRequired,
}

Title.defaultProps = {
    size: '1',
    isUppercase: false,
    onClick: () => {},
    className: '',
}

export default Title