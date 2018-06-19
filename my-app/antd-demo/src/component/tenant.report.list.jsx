import React, { Component } from 'react';
import { Table } from 'antd';

// const HOST_URL = 'http://clickplus-crmtest.clickplus.cn';
const column = [{
    title: '公司ID',
    dataIndex: 'tenant_id',
}, {
    title: '公司名',
    dataIndex: 'tenant_name',
}, {
    title: 'pv',
    dataIndex: '',
}, {
    title: 'uv',
    dataIndex: '',
}, {
    title: 'clk_uv',
    dataIndex: '',
}, {
    title: 'clk',
    dataIndex: '',
}, {
    title: 'ypv',
    dataIndex: '',
}, {
    title: 'yuv',
    dataIndex: '',
}, {
    title: 'session_count',
    dataIndex: '',
}, {
    title: 'dpv',
    dataIndex: '',
}, {
    title: 'visit_time',
    dataIndex: '',
}];

const data = [];
class TenantReportList extends Component {
    state = {
        selectedRowKeys: [],
        loading: false,
    };

    render () {
        return (
            <Table columns={column} dataSource={data}/>
        ); 
    }
}

export default TenantReportList