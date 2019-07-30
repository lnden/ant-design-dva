import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'antd'

const Delaylist = ({onDelete, delaylist}) => {
    return (
        <ul>
            {
                delaylist.map(item => {
                    return <li key={item.id}>{item.name} <Button onClick={() => onDelete(item.id)}>删除</Button></li>
                })
            }

        </ul>
    )
}

Delaylist.propTypes = {
    onDelete: PropTypes.func.isRequired,
    delaylist: PropTypes.array.isRequired,
}

export default Delaylist
