import React from 'react'

import './Square.css'

const Square = (props) => {
    let classNameForDiv;
    if (props.value === 'X'){
        classNameForDiv = 'd2'
    }
    else if (props.value === 'O'){
        classNameForDiv = 'd1'
    }
    return (
        <button className="square" onClick={props.onClick}><div className={classNameForDiv}></div></button>
    )
}

export default Square