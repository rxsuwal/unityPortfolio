import React from 'react'
import './BtnOrange.module.scss'

const BtnOrange = (props) => {
    return (
        <button>
            {props.children}
        </button>
    )
}

export default BtnOrange
