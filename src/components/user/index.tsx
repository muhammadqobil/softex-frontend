import {FC} from "react";
import {BiUser} from "react-icons/bi";

export const User: FC = (): JSX.Element => {
    return (
        <div className="user-container">
            <BiUser size={20} color="black"/>
        </div>
    )
}