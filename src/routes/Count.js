import React from 'react'
import {connect} from 'dva'
import Count from '../components/Count'

function Viewshow(props) {
    return (
        <div className="button">

            <button onClick={() => {
                props.dispatch({type: 'count/add'})
            }}>+
            </button>
            <button style={{margin:'0 20px'}}  onClick={() => {
                props.dispatch({type: 'count/minus'})
            }}>-
            </button>
            <Count count={props.count}/>
        </div>
    )
}

export default connect(({count}) => ({count}))(Viewshow)
