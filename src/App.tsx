import React, { useState } from "react";
import {
    DesktopOutlined,
    SmileOutlined,
    TrophyOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Flex, Layout, Menu, theme } from "antd";
import Card from "./entities/Card/Card";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[]
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("Фильмы", "1", <DesktopOutlined />),
    getItem("Сериалы", "2", <DesktopOutlined />),
    getItem("Спорт", "sub1", <TrophyOutlined />),
    getItem("Детям", "sub2", <SmileOutlined />),
];

const items2: MenuItem[] = [
    {
        key: 2,
        label: "Сегодня",
    },
    {
        key: 1,
        label: `Завтра`,
    },
    {
        key: 3,
        label: `Послезавтра`,
    },
];

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={{ display: "flex", alignItems: "center" }}>
                    <div className="demo-logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        items={items2}
                    />
                </Header>
                <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
                    <Flex
                        justify={"start"}
                        gap={20}
                        wrap={"wrap"}
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            margin: "0 auto",
                        }}
                    >
                        <Card
                            channel="Первый"
                            img="https://avatars.mds.yandex.net/get-tv-channel-logos/70787/2a000001600801cfa35886a251720c4fbb46/orig"
                        />
                        <Card
                            channel="Россия 1"
                            img="https://avatars.mds.yandex.net/get-tv-channel-logos/51763/2a00000160080238afaf1e36e9d9071a7d88/orig"
                        />
                        <Card
                            channel="Матч!"
                            img="https://avatars.mds.yandex.net/get-tv-channel-logos/70787/2a0000016e2603ad95657bcd08dc16bad081/80x60"
                        />
                        <Card
                            channel="Карусель"
                            img="https://avatars.mds.yandex.net/get-tv-channel-logos/54380/2a0000018920c9a146a5b5cd545de50f1782/80x60"
                        />
                        <Card
                            channel="НТВ"
                            img="https://avatars.mds.yandex.net/get-tv-channel-logos/69315/2a000001600801d526009c768257c5ec1146/orig"
                        />
                        <Card
                            channel="Пятый канал"
                            img="https://avatars.mds.yandex.net/get-tv-channel-logos/55846/2a0000018bd28052308abaa26dd1f1009a02/80x60"
                        />
                        <Card
                            channel="ОТР"
                            img="https://avatars.mds.yandex.net/get-tv-channel-logos/69315/2a0000016008034818a331ff5da33f709787/orig"
                        />
                        <Card
                            channel="РЕН ТВ"
                            img="https://avatars.mds.yandex.net/get-tv-channel-logos/51763/2a0000016e89582701d27363b244bde251e1/80x60"
                        />
                        <Card
                            channel="Спас ТВ"
                            img="https://avatars.mds.yandex.net/get-tv-channel-logos/55846/2a0000018aadc23e9898658e267cb08199bf/80x60"
                        />
                        <Card
                            channel="СТС"
                            img="https://avatars.mds.yandex.net/get-tv-channel-logos/27485/2a00000164d6ea14c751e649443bccb3a479/80x60"
                        />
                        <Card
                            channel="Домашний"
                            img="https://avatars.mds.yandex.net/get-tv-channel-logos/55846/2a00000189d4846d1177f0c71ffb2f88a3ed/80x60"
                        />
                    </Flex>
                </Content>
                <Footer style={{ textAlign: "center" }}>ООО "СВО" ©2023</Footer>
            </Layout>
        </Layout>
    );
};

export default App;
