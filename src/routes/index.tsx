import {Navigate, Route, Routes} from "react-router-dom";
import {PageNotFound} from "../components/404";
import {Main} from "../pages/main";
import {MainPage} from "../pages/main/main_page";
import {Education} from "../pages/main/education";
import {Settings} from "../pages/main/setting";
import {HardSkill} from "../pages/main/hard_skill";
import React, {FC} from "react";

export const RoutesComponent: FC = (): React.JSX.Element => {

    return (
        <div className={"app"}>
            <div className="mainPage-container">
                <Routes>
                    <Route path="/" element={<Navigate to={"/main"}/>}/>
                    <Route path="main">
                        <Route path="" element={<Main/>}>
                            <Route path="" element={<MainPage/>}/>
                            <Route path="education" element={<Education/>}/>
                            <Route path="settings" element={<Settings/>}/>
                            <Route path="hard-skill" element={<HardSkill/>}/>
                        </Route>
                    </Route>
                    <Route path="*" element={<PageNotFound/>}/>
                </Routes>
            </div>
        </div>
    )
}