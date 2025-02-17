import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import {Sidebar} from "../../layouts/main_page/sidebar";
import {Header} from "../../layouts/main_page/header";

export const Main:FC = ():React.JSX.Element => {
    return(
        <>
            <Sidebar/>
            <Header/>
            <Outlet/>
        </>
    )
}