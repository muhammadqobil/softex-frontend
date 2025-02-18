import React, {FC} from "react";
import {IconType} from "react-icons";
import {Link, useLocation} from "react-router-dom";

interface SidebarLinkProps {
    href: string,
    icon: IconType,
    label: string;
}

export const SidebarLink:FC<SidebarLinkProps> = ({href, icon: Icon, label}):React.JSX.Element => {
    const location: any = useLocation();

    const isActive = location?.pathname === href || (location?.pathname === "/" && href === "/main");

    return (
        <Link to={href} style={{textDecoration: 'none'}}>
            <div className={`sidebar-container__item ${isActive ? 'active' : ''}`}>
                <Icon className={"sidebar-container__icon"}/>
                <span className={"sidebar-container__span"}>{label}</span>
            </div>
        </Link>
    )
}