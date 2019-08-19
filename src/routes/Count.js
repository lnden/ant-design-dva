import React from 'react'
import {connect} from 'dva'
import { Button } from 'antd'
import Count from '../components/Count'

function Viewshow({dispatch,count}) {
    return (
        <div className="button">

            <Button onClick={() => {
                dispatch({type: 'count/add'})
            }}>+
            </Button>
            <Button style={{margin:'0 20px'}}  onClick={() => {
                dispatch({type: 'count/minus'})
            }}>-
            </Button>
            <Count count={count.count}/>
        </div>
    )
}

export default connect(({count}) => ({count}))(Viewshow)
