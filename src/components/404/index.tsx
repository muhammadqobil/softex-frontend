import {useNavigate} from "react-router-dom";
import {Button, Result} from "antd";

export const PageNotFound = () => {

    const navigate = useNavigate();

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw"}}>
            <Result
                status="404" title={<span style={{color: "white"}}>404</span>}
                subTitle={<span>К сожалению, страница, которую вы посетили, не существует.</span>}
                extra={<Button onClick={() => { navigate("/") }} type="primary">Домой</Button>}
            />
        </div>
    )
}