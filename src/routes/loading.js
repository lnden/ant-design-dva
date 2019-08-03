import React from 'react'
import { connect } from 'dva';
import Loadings from '../components/Loading'

function Loading({ dispatch, loading }) {
    console.log(loading, 111)
    return (
        <section>
            <Loadings />

        </section>
    )
}

export default connect(({ loading }) => ({ loading }))(Loading)
