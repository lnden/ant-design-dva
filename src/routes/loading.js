import React from 'react'
import { connect } from 'dva';
import Loadings from '../components/Loading'

function Loading({ dispatch, loading }) {
    function handleClick(){
        dispatch({
            type:'load/change'
        })
    }
    return (
        <section>
            <Loadings onRequest={handleClick} loading={loading}/>
        </section>
    )
}

export default connect(({ loading }) => ({ loading }))(Loading)
