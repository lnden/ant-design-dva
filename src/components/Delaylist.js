import React from 'react'
import PropTypes from 'prop-types'
import {Button} from 'antd'
import styles from './delaylist.less'

const Delaylist = ({onDelete, delaylist}) => {
    return (
        <ul>
            {
                delaylist.map(item => {
                    return <li className={styles.list} key={item.id}>{item.name} <Button onClick={() => onDelete(item.id)}>删除</Button></li>
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
