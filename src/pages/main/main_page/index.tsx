import React, {FC} from "react";
import {Posts} from "../../../components/post";

export const MainPage: FC = (): React.JSX.Element => {

    return (
        <div className="main-container">
            <Posts/>
        </div>
    )
}