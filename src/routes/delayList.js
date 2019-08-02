import React from 'react'
import { connect } from 'dva'
import Delaylist from '../components/Delaylist'

const DelayList = ({dispatch,delaylist}) => {
    function handleDelete(id){
        dispatch({
            type: 'delaylist/delete',
            payload: id
        })
    }
    return (
        <div>
            <h2>List of Delay list</h2>
            <Delaylist onDelete={handleDelete} delaylist={delaylist}/>
        </div>
    )
}

export default connect((store)=>{
    return {
        delaylist:store.delaylist
    }
})(DelayList)
