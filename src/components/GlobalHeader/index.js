import React, {PureComponent} from 'react'
import {Menu, Icon, Spin, Dropdown, Avatar} from 'antd'
import {Link} from 'react-router-dom';
import NoticeIcon from '../NoticeIcon';
import styles from './index.module.less'

export default class GlobalHeader extends PureComponent {


    toggle = () => {
        const {collapsed, onCollapse} = this.props;
        onCollapse(!collapsed);
    };

    renderAvatar = () => {
        const {profile} = this.props;
        if (!profile || !profile.avatar) {
            return <Avatar size="small" className={styles.avatar} icon="user"/>
        }
        return <Avatar size="small" className={styles.avatar} src={profile.avatar}/>
    };

    renderMenu = () => {
        const { onMenuClick } = this.props;
        return (
            <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
                <Menu.Item key="accountSetting">
                    <Icon type="setting" />
                    账号设置
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="logout">
                    <Icon type="logout" />
                    退出登录
                </Menu.Item>
            </Menu>
        );
    };

    renderDropDown = () => {
        const {profileLoading, profile} = this.props;
        if (profileLoading) {
            return <Spin size="small" style={{marginLeft: 8}}/>;
        }
        return (
            <Dropdown overlay={this.renderMenu()}>
                <span className={`${styles.action} ${styles.account}`}>
                    {this.renderAvatar()}
                    <span className={styles.name}>{profile?.name || "暂无"}</span>
                </span>
            </Dropdown>
        )
    };

    render() {
        const {collapsed, notifyCount} = this.props;

        return (
            <div>
                <Icon
                    className={styles.trigger}
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
                <span>name</span>
                <div>
                    <Link to="/sysMsg">
                        ceshi
                    </Link>
                    <Link to="/sysMsg">
                        <NoticeIcon className={styles.action} count={notifyCount}/>
                    </Link>
                    {this.renderDropDown()}
                </div>
            </div>
        )
    }
}
