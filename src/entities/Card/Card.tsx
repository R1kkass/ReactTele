import React from "react";
import { Avatar, Flex, Steps } from "antd";

interface CardProps {
    channel: string;
    img: string;
}

const Card: React.FC<CardProps> = ({ channel, img }) => (
    <Flex vertical={true} style={{boxShadow: "0 0 5px 1px lightgray", padding: 10, borderRadius: 20}}>
        <Flex gap={5} align="center">
            <Avatar src={<img style={{ objectFit: "cover" }} src={img} />} />
            <span>{channel}</span>
        </Flex>
        <Steps
            direction="vertical"
            current={1}
            items={[
                {
                    title: "20:23",
                    description: "Вечер с Соловьевым",
                },
                {
                    title: "21:23",
                    description: "Вести. Недели",
                },
                {
                    title: "22:23",
                    description: "",
                },
            ]}
        />
    </Flex>
);

export default Card;
