import React from 'react'

export default function operators(props) {
    return (
        <div className="operators">
        <button onClick={ () => props.updateCalc('/')}>/</button>
        <button onClick={ () => props.updateCalc('*')}>*</button>
        <button onClick={ () => props.updateCalc('+')}>+</button>
        <button onClick={ () => props.updateCalc('-')}>-</button>
        <button onClick={ () => props.updateCalc('C')}>C</button>
        <button onClick = {props.DeleteLast}>DEL</button>
     </div>
    )
}
