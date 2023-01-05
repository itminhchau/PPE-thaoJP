import { siderBar_menu_title } from '@mockdata/hashdata';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React from 'react';
const { Header, Content, Sider } = Layout;

const items2: MenuProps['items'] = siderBar_menu_title
const SideBarPage: React.FC = () => (
    <>
        <Sider width={336} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
                items={items2}
            />
        </Sider>
    </>

);

export default SideBarPage;



