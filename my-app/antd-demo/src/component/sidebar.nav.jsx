import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderBar extends Component {
    constructor (props) {
        super(props);
    }

    changeNavBar = (name, event) => {
        this.props.onHeadBarChange(event.key, name);
    }

    render () {
        return (
            <Sider collapsible collapsed={this.props.isCollapsed} trigger={null} style={{background: '#fff'}}>
                <Menu defaultSelectedKeys={['1.1']} defaultOpenKeys = {['menu1']} mode = "inline" style = {{height: '100%', paddingBottom: '32px'}} >
                    <SubMenu key = "menu1" title = {<span><Icon type="user"/><span>客户管理</span></span>} >
                        <Menu.Item onClick={this.changeNavBar.bind(this, '客户列表')} key="1.1"><Link to="tenant_list">客户列表</Link></Menu.Item>
                        <Menu.Item onClick={this.changeNavBar.bind(this, '客户页面访问列表')} key="1.2"><Link to="tenant_report_list">客户页面访问列表</Link></Menu.Item>
                        <Menu.Item onClick={this.changeNavBar.bind(this, '客户页面制作列表')} key="1.3"><Link to="tenant_page_report_list">客户页面制作列表</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item onClick={this.changeNavBar.bind(this, '公告栏管理')} key = "menu2">
                        <Link to="bulletin_list">
                            <Icon type = "notification" />
                            <span>公告栏管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item onClick={this.changeNavBar.bind(this, '版本管理')} key = "menu3">
                        <Link to="version_list">
                            <Icon type = "setting" />
                            <span>版本管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item onClick={this.changeNavBar.bind(this, '账号管理')} key = "menu4">
                        <Link to="account_user_list">
                            <Icon type = "solution" />
                            <span>账号管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item onClick={this.changeNavBar.bind(this, '模板管理')} key = "menu5">
                        <Link to="template_list">
                            <Icon type = "skin" />
                            <span>模板管理</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item onClick={this.changeNavBar.bind(this, '组件管理')} key = "menu6">
                        <Link to="tenant_module_report_list">
                            <Icon type = "select" />
                            <span>组件管理</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key = "menu7" title = {<span><Icon type="code-o"/><span>脚本管理</span></span>} >
                        <Menu.Item onClick={this.changeNavBar.bind(this, '脚本列表')} key="7.1"><Link to="server_script_list">脚本列表</Link></Menu.Item>
                        <Menu.Item onClick={this.changeNavBar.bind(this, '复制页面')} key="7.2"><Link to="copy_page">复制页面</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item onClick={this.changeNavBar.bind(this, '操作日志')} key = "menu8">
                        <Link to="operator_list">
                            <Icon type = "tool" />
                            <span>操作日志</span>
                        </Link>
                    </Menu.Item>
                    <SubMenu key = "menu9" title = {<span><Icon type="database"/><span>数据统计</span></span>} >
                        <Menu.Item onClick={this.changeNavBar.bind(this, '页面统计')} key="9.1"><Link to="page_data_statistics">页面统计</Link></Menu.Item>
                        <Menu.Item onClick={this.changeNavBar.bind(this, '组件统计')} key="9.2"><Link to="component_data_statistics">组件统计</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default SiderBar;