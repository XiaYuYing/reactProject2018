import React, { Component } from 'react';
import { Tabs } from 'antd';
import { Link } from 'react-router-dom';
const TabPane = Tabs.TabPane;

const tenantList = {
    marginTop: '8px'
}

class SiderRoute extends Component {
    constructor (props) {
        super(props);
    }
    
    onChange = (activeKey) => {
        // this.setState({ activeKey });
        let keyName = null;
        this.props.panes.map(item => {
            if( this.props.activeKey === item.key ) {
                keyName = item.title;
                return 
            }
        });

        if (keyName !== null) {
            this.props.changeTab(activeKey, keyName);
        } else {
            alert('err: tabName is null')
        }
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey)
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;
        this.props.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.props.panes.filter( pane => pane.key !== targetKey);
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
                activeKey = {this.props.activeKey}
                type = "editable-card"
                onEdit={this.onEdit}
                style = {tenantList}
            >
                {this.props.panes.map(pane => 
                    <TabPane tab={<Link style={{display: 'inline-block', height: '100%'}} to={pane.link}>{pane.title}</Link>} key={pane.key}>
                        {pane.content}
                    </TabPane>
                )}
            </Tabs>
        );
    }
}

export default SiderRoute;