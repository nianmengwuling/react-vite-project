import React, { useState } from 'react';
import MainMenu from '@/components/MainMenu';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    //const NavigateTo = useNavigate();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                {/* 菜单组件 */}
                <MainMenu />
            </Sider>
            {/* 右边栏 */}
            <Layout>
                {/* 头部 */}
                <Header style={{ paddingLeft: "16px", background: colorBgContainer, margin: "16px 16px" }} >
                    {/* 面包屑 */}
                    <Breadcrumb style={{ lineHeight: "64px" }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/* 内容 */}
                <Content style={{ margin: '16px 16px 0', padding: 24, minHeight: 360, background: colorBgContainer }}>
                    {/* 窗口 */}
                    <Outlet />
                </Content>
                {/* 尾部 */}
                <Footer style={{ textAlign: 'center', padding: "0", lineHeight: "48px" }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default View;