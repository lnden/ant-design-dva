import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import { Button } from 'antd'
import styles from './IndexPage.css';

function IndexPage() {
    return (
        <div className={styles.normal}>
            <ul className={styles.list}>
                <li><Button><Link to="/products">跳转</Link></Button>dva官方示例/products</li>
                <li><Button><Link to="/delaylist">跳转</Link></Button>test示例/delaylist</li>
            </ul>
            <h1 className={styles.title}>Yay! Welcome to dva!</h1>
            <div className={styles.welcome}/>
        </div>
    );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
