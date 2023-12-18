import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd'
import type { MenuProps } from 'antd';

import { useNavigate } from "react-router-dom"

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('栏目 1', '/page1', <PieChartOutlined />),
    getItem('栏目 2', '/page2', <DesktopOutlined />),
    getItem('User', 'page3', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];
const Comp: React.FC = () => {

    const NavigateTo = useNavigate();
    /* 左边栏菜单点击事件，跳转选项卡 */
    const menuClick = (e: { key: string }) => {
        NavigateTo(e.key)
    };
    //默认当前展开page3
    const [openKeys, setOpenKeys] = useState(['page3']);
    /* 点击折叠选项时，另一个折叠项自动收起 */
    const handleOpenChange = (keys: string[]) => {
        console.log(keys);
        /* 有3和4两个折叠page，点哪个它就在数组最后一个。比如点3，那就是[4,3]
           根据索引，所以length-1就是3的索引
        */
        setOpenKeys([keys[keys.length - 1]]);
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={['/page1']}
            mode="inline" items={items}
            onClick={menuClick}
            onOpenChange={handleOpenChange}//展开和回收事件
            openKeys={openKeys}//当前展开的数组选项
        />
    )
}

export default Comp;