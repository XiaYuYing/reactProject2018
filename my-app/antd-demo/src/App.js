import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import SiderBar from './component/sidebar.nav';
import SiderRoute from './component/sidebar.nav.route';
import HeaderBar from './component/header.nav';
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
import TenantListContent from './component/tenant.list.content';
import TenantReportList from './component/tenant.report.list';

const { Header, Content, Footer, Sider } = Layout;

// const linkArr = [
// 	{
// 		url: 'tenant_list',
// 		urlMap: ['客户管理', '客户列表']
// 	},
// 	{
// 		url: 'tenant_report_list',
// 		urlMap: ['客户管理', '客户页面访问列表']
// 	},
//     {
// 		url: 'tenant_page_report_list',
// 		urlMap: ['客户管理', '客户页面制作列表']
// 	},
// 	{
// 		url: 'bulletin_list',
// 		urlMap: ['公告栏管理']
// 	},
//     {
// 		url: 'version_list',
// 		urlMap: ['版本管理']
// 	},
//     {
// 		url: 'account_user_list',
// 		urlMap: ['账号管理']
// 	},
//     {
// 		url: 'template_list',
// 		urlMap: ['模板管理']
// 	},
//     {
// 		url: 'tenant_module_report_list',
// 		urlMap: ['组件管理']
// 	},
//     {
// 		url: 'server_script_list',
// 		urlMap: ['脚本管理', '脚本列表']
// 	},
//     {
// 		url: 'copy_page',
// 		urlMap: ['脚本管理', '复制页面']
// 	},
//     {
// 		url: 'operator_list',
// 		urlMap: ['操作日志']
// 	},
//     {
// 		url: 'page_data_statistics',
// 		urlMap: ['数据统计', '页面统计']
// 	},
//     {
// 		url: 'component_data_statistics',
// 		urlMap: ['数据统计', '组件统计']
// 	}
// ];
class App extends Component {
	constructor (props) {
		super(props);
		this.newTabIndex = 0;
        const panes = [
            { title: '客户列表', content: <TenantListContent />, key: '1.1', link: 'tenant_list'}
        ];
        this.state = {
			collapsed: false,
            activeKey: panes[0].key,
            panes,
		};
		
		this.handleHeadBarChange = this.handleHeadBarChange.bind(this);
	}

  	toggle = () => {
	  	this.setState({ collapsed: !this.state.collapsed });
	}
	
	handleHeadBarChange = (activeKey, activeTitle) => {
		const panes = this.state.panes;
		const paneContentArr = {
			'客户列表': {
				component: <TenantListContent />,
				link: 'tenant_list'
			},
			'客户页面访问列表': {
				component: <TenantReportList />,
				link: 'tenant_report_list'
			},
			'客户页面制作列表': {
				component: '456',
				link: 'tenant_page_report_list'
			},
			'公告栏管理': {
				component: '公告栏管理',
				link: 'bulletin_list'
			},
			'版本管理': {
				component: '版本管理',
				link: 'version_list'
			},
			'账号管理': {
				component: '账号管理',
				link: 'account_user_list'
			},
			'模板管理': {
				component: '模板管理',
				link: 'template_list'
			},
			'组件管理': {
				component: '组件管理',
				link: 'tenant_module_report_list'
			},
			'脚本列表': {
				component: '脚本列表',
				link: 'server_script_list'
			},
			'复制页面': {
				component: '复制页面',
				link: 'copy_page'
			},
			'操作日志': {
				component: '操作日志',
				link: 'operator_list'
			},
			'页面统计': {
				component: '页面统计',
				link: 'page_data_statistics'
			},
			'组件统计': {
				component: '组件统计',
				link: 'component_data_statistics'
			}
		}
		const nowKeyArr = panes.map(item => {return item.key});
		if (nowKeyArr.indexOf(activeKey) < 0) {
			panes.push({
				title: activeTitle,
				content: paneContentArr[activeTitle].component,
				link: paneContentArr[activeTitle].link,
				key: activeKey
			})
		}
		this.setState({ activeKey, panes });
	}

  render() {
    return (
		<Layout style = {{minHeight: '100vh'}}>
			<Header className = "header">
				<div className = "logo" />
				<Menu theme = "dark" mode = "horizontal" defaultSelectedKeys = {['1']} style = {{ lineheight: '64px', float: 'right' }}>
					<Menu.Item className = "header-menu-item" key = "1">test1</Menu.Item>
					<Menu.Item className = "header-menu-item" key = "2">设置</Menu.Item>
					<Menu.Item className = "header-menu-item" key = "3">退出</Menu.Item>
				</Menu>
			</Header>
			<Layout>
				<SiderBar onHeadBarChange={this.handleHeadBarChange} isCollapsed = {this.state.collapsed} />
				<Content className = "content">
					<div className = "content-top">
						<Button className = "trigger" type = "primary" onClick = {this.toggle} style = {{marginTop: '8px', marginLeft: '8px'}} >
							<Icon type = {this.state.collapsed? 'menu-unfold' : 'menu-fold'} />
						</Button>
						<HeaderBar />
					</div>
					<div className = "content-bottom">
						<SiderRoute changeTab={this.handleHeadBarChange} activeKey={this.state.activeKey} panes={this.state.panes}/>
					</div>
					<Footer className = "footer">Copyright © 2016 clickplus 上海数力网络</Footer>
				</Content>
			</Layout>
		</Layout>
    );
  }
}

export default App;
