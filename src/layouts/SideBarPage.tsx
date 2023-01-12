import { siderBar_menu_title } from '@mockdata/hashdata';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React from 'react';
import { ShowSiderContext } from '../contexts/ShowSiderContextProvider';
import { images } from '../assets/img';
const { Header, Content, Sider } = Layout;

const items2: MenuProps['items'] = siderBar_menu_title


const SideBarPage: React.FC = () => {
    const { isShowSider, showSiderBar } = React.useContext(ShowSiderContext)
    const handleShowSider = () => {
        showSiderBar()
    }
    return (
        <>
            {isShowSider &&

                <Sider width={336} style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'sticky',
                    top: 0,
                }} className="site-layout-background ">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                        items={items2}
                    />
                    <img src={images.close_icon} alt="" className='w-[25px] h-[25px] absolute top-[5px] right-[5px] cursor-pointer' onClick={() => handleShowSider()} />
                </Sider>

            }

        </>
    )
}



export default SideBarPage;



