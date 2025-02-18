import React, {FC} from "react";
import logo from '../../assets/tsLogo.png';
import user from "../../assets/user-02.svg"
import {Button, Col, Form, Input, Row} from "antd";
import {useNavigate} from "react-router-dom";

type Props = {};

type AuthType = {
    username: string;
    password: string;
}

export const Login:FC<Props> = ():React.JSX.Element => {

    const navigate = useNavigate();

    const onFinish = async (values: AuthType) => {
        try {
            localStorage.setItem("USER_DATA", JSON.stringify(values));
            localStorage.setItem("isAuth", JSON.stringify(true));

            return navigate('/');

        } catch (err:any) {
            console.log(err)
        }
    }


    return (
        <div className="loginPage-container">
            <div className="loginPage-container__left">
                <div className="loginPage-container__imgBox">
                    <img src={logo} alt="logo" className="loginPage-container__img"/>
                </div>
            </div>
            <div className="loginPage-container__right">
                <div className="loginPage-container__formBox">
                    <h2 className="loginPage-container__title">Sign in</h2>
                    <Form onFinish={onFinish} layout="vertical">
                        <Row gutter={24}>
                            <Col span={24}>
                                <Form.Item label="Login" name="username">
                                    <Input placeholder="Pleace write login" suffix={<img src={user} alt="User Icon"  />}/>
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Password" name="password">
                                    <Input.Password autoComplete="new-password" placeholder={"Pleace write password"}/>
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" style={{width: "100%"}} >Вход</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    );
};