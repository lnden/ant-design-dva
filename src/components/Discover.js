import React from 'react'
import NoticeIcon from './NoticeIcon'
import styles from './discover.module.less'

const notifyCount = 2

export default class Discover extends React.Component {
    render() {
        return (
            <main>
                发现内容
                <NoticeIcon className={styles.action} count={notifyCount}/>
            </main>
        )
    }
}
