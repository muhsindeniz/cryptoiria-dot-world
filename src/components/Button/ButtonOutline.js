import React from 'react'

const ButtonOutline = (props) => {
    let { text } = props;

    return (
        <div className="btn button-primary-outline">
            {text}
        </div>
    )
}

export default ButtonOutline
