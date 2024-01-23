import React from 'react';
import '../stylesheets/Button.scss';

const Button = ({ className, action, size, type, disabled, children }) => {
    const classNames = size ? `${className} ${size}` : className;

    if (type === "link") {
        return (
            <a className={classNames} href={action} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        )
    }

    return (
        <button type={type} className={classNames} onClick={action} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button
