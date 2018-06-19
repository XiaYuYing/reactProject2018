import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const navList = {
    '/tenant_list': ['客户管理', '客户列表'],
    '/tenant_report_list': ['客户管理', '客户页面访问列表'],
    '/tenant_page_report_list': ['客户管理', '客户页面制作列表'],
    '/bulletin_list': ['公告栏管理'],
    '/version_list': ['版本管理'],
    '/account_user_list': ['账号管理'],
    '/template_list': ['模板管理'],
    '/tenant_module_report_list': ['组件管理'],
    '/server_script_list': ['脚本管理', '脚本列表'],
    '/copy_page': ['脚本管理', '复制页面'],
    '/operator_list': ['操作日志'],
    '/page_data_statistics': ['数据统计', '页面统计'],
    '/component_data_statistics': ['数据统计', '组件统计'],
};

const getNavList = (type) => {
    return (
        navList[type].map( (item, index) => (
            <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
        ))
        
    )
}

class tenantArr extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <Breadcrumb style={{display: 'inline-block', marginLeft: '24px'}}>
                {getNavList(this.props.match.path)}
            </Breadcrumb>
        );
    }
}

class HeaderBar extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Switch>
                <Route exact path="/tenant_list" component={tenantArr}/>
                <Route path="/tenant_report_list" component={tenantArr}/>
                <Route path="/tenant_page_report_list" component={tenantArr}/>
                <Route path="/bulletin_list" component={tenantArr}/>
                <Route path="/version_list" component={tenantArr}/>
                <Route path="/account_user_list" component={tenantArr}/>
                <Route path="/template_list" component={tenantArr}/>
                <Route path="/tenant_module_report_list" component={tenantArr}/>
                <Route path="/server_script_list" component={tenantArr}/>
                <Route path="/copy_page" component={tenantArr}/>
                <Route path="/operator_list" component={tenantArr}/>
                <Route path="/page_data_statistics" component={tenantArr}/>
                <Route path="/component_data_statistics" component={tenantArr}/>
            </Switch>
        );
    }
}

export default HeaderBar;