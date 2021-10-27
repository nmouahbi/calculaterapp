import React from 'react'

export default function dipslay(props) {
    return (
        
        <div className="display">
          { props.result ?  <span> ({props.result})</span> : ''}&nbsp;
          {props.calc || "0"}

        </div>
    )
}
