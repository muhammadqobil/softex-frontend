import React, {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {PageNotFound} from "../components/404";
import {Main} from "../pages/main";
import {MainPage} from "../pages/main/main_page";

export const RoutesComponent: FC = (): React.JSX.Element => {
    return (
        <div className={"app"}>
            <div className="mainPage-container">
                <Routes>
                    <Route path="/" element={<Navigate to={"/main"}/>}/>
                    <Route path="main">
                        <Route path="" element={<Main/>}>
                            <Route path="" element={<MainPage/>}/>
                        </Route>
                    </Route>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </div>
        </div>
    )
}