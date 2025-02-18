import React, {FC} from "react";
import {Dropdown, Space} from "antd";
import {AiOutlineLogout} from "react-icons/ai";
import {useNavigate} from "react-router-dom";
import {User} from "../../../components/user";


type Props = {};

export const Header:FC<Props> = ({}):React.JSX.Element => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("USER_DATA")
        localStorage.removeItem("isAuth");
        navigate("/")
    }

    return (
        <div className="header-container">
            <div></div>
            <Dropdown trigger={["click"]} menu={{
                items: [{ label: "logout",  key: "logout",  icon: <AiOutlineLogout/>,  onClick: () => logout() }]
            }}>
                <Space>
                    <User/>
                </Space>
            </Dropdown>
        </div>
    );
};