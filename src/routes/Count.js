import React from 'react'
import {connect} from 'dva'
import { Button } from 'antd'
import Count from '../components/Count'

function Viewshow(props) {
    return (
        <div className="button">

            <Button onClick={() => {
                props.dispatch({type: 'count/add'})
            }}>+
            </Button>
            <Button style={{margin:'0 20px'}}  onClick={() => {
                props.dispatch({type: 'count/minus'})
            }}>-
            </Button>
            <Count count={props.count}/>
        </div>
    )
}

export default connect(({count}) => ({count}))(Viewshow)
