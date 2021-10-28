import React from 'react'

const Button = (props) => {

    let { text } = props;

    return (
        <div className="btn button-primary">
            {text}
        </div>
    )
}

export default Button
