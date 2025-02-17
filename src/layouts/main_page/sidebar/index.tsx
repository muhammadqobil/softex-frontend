import React, {FC} from "react";
import { FaChartLine, FaBookOpen } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { FaAward } from "react-icons/fa6";


type Props = {

};
export const Sidebar:FC<Props> = ({}):React.JSX.Element => {
    return (
        <div className="sidebar-container">
            <h2 className={"sidebar-container__title"}>Pages</h2>
            <div className={"sidebar-container__list"}>
                <div className={"sidebar-container__item active"}>
                    <FaChartLine className={"sidebar-container__icon"}/>
                    <span className={"sidebar-container__span"}>Statistics</span>
                </div>
                <div className={"sidebar-container__item"}>
                    <MdSchool className={"sidebar-container__icon"}/>
                    <span className={"sidebar-container__span"}>Education</span>
                </div>
                <div className={"sidebar-container__item"}>
                    <IoMdSettings className={"sidebar-container__icon"}/>
                    <span className={"sidebar-container__span"}>Settings</span>
                </div>
                <div className={"sidebar-container__item"}>
                    <FaAward className={"sidebar-container__icon"}/>
                    <span className={"sidebar-container__span"}>Hard skill</span>
                </div>
                <div className={"sidebar-container__item"}>
                    <FaBookOpen className={"sidebar-container__icon"}/>
                    <span className={"sidebar-container__span"}>Conditions</span>
                </div>
            </div>
        </div>
    );
};