import React, {useEffect, useState} from "react";
import {Flex, message, Table} from "antd";
import type {TableColumnsType, TableProps} from "antd";
import axios from "axios";
import {GrFormNextLink, GrFormPreviousLink} from "react-icons/gr";
import {PostDataType} from "../../models/api_models";

type TableRowSelection<T extends object = object> = TableProps<T>["rowSelection"];



const columns: TableColumnsType<PostDataType> = [
    {title: "Id", dataIndex: "id"},
    {title: "Title", dataIndex: "title"},
    {title: "Body", dataIndex: "body"},
];


export const Posts: React.FC = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<PostDataType[]>([]);

    const getData = async () => {
        setLoading(true);
        try {
            let resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
            if (resp?.data) {
                setData(resp.data.map((item?: PostDataType) => {
                    return {key: item?.id, id: item?.id, title: item?.title, body: item?.body};
                }));
            } else {
                message.error("No data");
            }
        } catch (err: any) {
            message.error("Failed to fetch data");
        } finally {
            setLoading(false);
        }
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<PostDataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    useEffect(() => {
        getData().then(r => r)
    }, []);

    return (
        <Flex gap="middle" vertical className={"post-container"}>
            <Table<PostDataType>
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                loading={loading}
                pagination={{
                    position: ["bottomCenter"],
                    pageSize: 10,
                    itemRender: (page, type, originalElement) => {
                        if (type === "prev") {
                            return (
                                <span className="pagination-btn">
                                  <GrFormPreviousLink style={{fontSize: 16, marginRight: 5}}/> Oldingi
                                </span>
                            );
                        }
                        if (type === "next") {
                            return (
                                <span className="pagination-btn">
                                  Keyingi <GrFormNextLink  style={{fontSize: 16, marginLeft: 5}}/>
                                </span>
                            );
                        }
                        return originalElement;
                    },
                }}
                className={"post-container__table"}
            />
        </Flex>
    );
};


