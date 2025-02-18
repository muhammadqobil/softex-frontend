import React, {FC} from "react";
import { FaChartLine, FaBookOpen } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaAward } from "react-icons/fa6";
import {SidebarLink} from "../../../components/sidebar_link";


type Props = {};

export const Sidebar:FC<Props> = ():React.JSX.Element => {

    return (
        <div className="sidebar-container">
            <h2 className={"sidebar-container__title"}>Pages</h2>
            <div className={"sidebar-container__list"}>
                <SidebarLink href={"/main"} icon={FaChartLine} label={"Statistics"}/>
                <SidebarLink href={"/main/education"} icon={MdSchool} label={"Education"}/>
                <SidebarLink href={"/main/settings"} icon={IoMdSettings} label={"Settings"}/>
                <SidebarLink href={"/main/hard-skill"} icon={FaAward} label={"Hard skill"}/>
                <SidebarLink href={"/main/conditions"} icon={FaBookOpen} label={"Conditions"}/>
            </div>
        </div>
    );
};