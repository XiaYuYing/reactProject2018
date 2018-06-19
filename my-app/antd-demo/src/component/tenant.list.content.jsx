import React, { Component } from 'react';
import { Table } from 'antd';
import { post } from '../service/post';
import axios from 'axios';

// const HOST_URL = 'http://clickplus-crmtest.clickplus.cn';
const column = [{
    title: '公司ID',
    dataIndex: 'tenant_id',
}, {
    title: '公司名',
    dataIndex: 'tenant_name',
}, {
    title: '联系人',
    dataIndex: 'contact',
}, {
    title: '联系电话',
    dataIndex: 'contact_number',
}, {
    title: '销售人员',
    dataIndex: 'contact_names',
}, {
    title: '站点状态',
    dataIndex: 'site',
}, {
    title: '公司状态',
    dataIndex: 'company',
}, {
    title: '账户类型',
    dataIndex: 'account',
}, {
    title: '合同有效期',
    dataIndex: 'deadline',
}, {
    title: '创建时间',
    dataIndex: 'create_time',
}, {
    title: '操作',
    dataIndex: 'operate',
}];

const data = [];

class TenantListContent extends Component {
    state = {
        selectedRowKeys: [],
        loading: false,
    };

    componentWillMount () {
        const param = {
            page_num: 1,
            page_size: 20,
            is_overdue: 0
        };
        // fetch('/tenant/list', {
        //     method: 'POST',
        //     body: new URLSearchParams(param.toString())
        // })
        // .then(response => {
        //     console.log(response)
        // })
        axios({
            method: 'post',
            url: '/tenant/list',
            headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(param)
        }).then(function (res) {
            console.log(res);
        })
        // const result = post('/tenant/list', param);
        // console.log(result)
    }

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    }

    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed：', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }

    render () {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hashSelected = selectedRowKeys.length > 0;
        return (
            <Table rowSelection={rowSelection} columns={column} dataSource={data}/>
        ); 
    }
}

export default TenantListContent