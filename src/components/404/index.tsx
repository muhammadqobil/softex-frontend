import {useNavigate} from "react-router-dom";
import {Button, Result} from "antd";

export const PageNotFound = () => {

    const navigate = useNavigate();

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw"}}>
            <Result
                status="404" title={<span style={{color: "white"}}>404</span>}
                subTitle={<span>Unfortunately, the page you visited does not exist.</span>}
                extra={<Button onClick={() => { navigate("/") }} type="primary">Home</Button>}
            />
        </div>
    )
}