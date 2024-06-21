import React, {useContext} from 'react';
import {AuthUserContext} from "../../contexts/AuthUserContext";
import {useNavigate} from "react-router-dom";

const Me = () => {
    const {authUser , setAuthUser} = useContext(AuthUserContext)
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("user")
        setAuthUser(null)
        navigate('/')
    }
    return (
        <div className={"w-full h-screen"}>
            {/*<button className={"py-3 px-3 border-black border-2"*/}
            {/*} onClick={handleLogout}>Выйти</button>*/}
            <div className={"w-full h-5/6 flex items-center justify-center"}>
                <p className={"text-black font-bold text-3xl"}>                Добро пожаловать {authUser.phone}
                </p>
            </div>
        </div>
    );
};

export default Me;