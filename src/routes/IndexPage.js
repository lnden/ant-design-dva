import React, {Fragment} from 'react';
import {connect} from 'dva';
import {Link} from 'dva/router'
import {Button} from 'antd'
import styles from './IndexPage.less';
import {ContainerQuery} from 'react-container-query';
import classNames from 'classnames'
import GlobalFooter from '../components/GlobalFooter'

const query = {
    'screen-xs': {
        maxWidth: 575,
    },
    'screen-sm': {
        minWidth: 576,
        maxWidth: 767,
    },
    'screen-md': {
        minWidth: 768,
        maxWidth: 991,
    },
    'screen-lg': {
        minWidth: 992,
        maxWidth: 1199,
    },
    'screen-xl': {
        minWidth: 1200,
        maxWidth: 1599,
    },
    'screen-xxl': {
        minWidth: 1600,
    },
};

const links = [
    {key: 1, blankTarget: true, title: '百度', href: 'https://www.baidu.com/'},
    {key: 2, blankTarget: false, title: '淘宝', href: 'https://www.taobao.com/'},
    {key: 3, blankTarget: true, title: '新浪', href: 'https://www.sina.com.cn/'},
    {key: 4, blankTarget: true, title: '腾讯', href: 'https://www.qq.com/'},
]
const copyright = <Fragment>© 2019 北京xxx科技有限公司</Fragment>;

function IndexPage() {
    function renderLayout(params) {
        const layout = (
            <div className={styles.normal}>
                <ul className={styles.list}>
                    <li><Button><Link to="/products">跳转</Link></Button>dva官方示例/products</li>
                    <li><Button><Link to="/delaylist">跳转</Link></Button>Delay示例/delaylist</li>
                    <li><Button><Link to="/loading">跳转</Link></Button>Loading示例/loading</li>
                    <li><Button><Link to="/count">跳转</Link></Button>Count示例/count</li>
                </ul>
                <h1 className={styles.title}>Yay! Welcome to dva!</h1>
                <div className={styles.welcome}/>
                <GlobalFooter className={styles.custom} links={links} copyright={copyright}/>
            </div>
        );
        return <div className={classNames(params)}>{layout}</div>
    }

    return (
        <main className={styles.main}>
            <ContainerQuery query={query}>
                {renderLayout}
            </ContainerQuery>
        </main>
    );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
