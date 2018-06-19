import React, { Component } from 'react';
import { Tabs } from 'antd';
import TenantListContent from './tenant.list.content'
const TabPane = Tabs.TabPane;

const tenantList = {
    marginTop: '8px'
}

class SiderRoute extends Component {
    constructor (props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: '客户列表', key: '1' }
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }
    
    onChange = (activeKey) => {
        this.setState({ activeKey });
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey)
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter( pane => pane.key !== targetKey);
        if (lastIndex >= 0 && activeKey === targetKey) {
            activeKey = panes[lastIndex].key;
        }
        this.setState({ panes, activeKey });
    }

    render () {
        return (
            <Tabs 
                hideAdd
                onChange = {this.onChange}
                activeKey = {this.state.activeKey}
                type = "editable-card"
                onEdit={this.onEdit}
                style = {tenantList}
            >
                {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} ><TenantListContent /></TabPane>)}
            </Tabs>
        );
    }
}

export default SiderRoute;