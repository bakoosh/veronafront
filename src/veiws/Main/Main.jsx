import React from 'react';
import {useNavigate} from "react-router-dom";


const Main = () => {
    const navigate = useNavigate()
    return (
        <div className={"w-full h-screen overflow-hidden"}>
            <div className={"w-full h-[20%] flex items-center justify-center"}>
                <div className={"w-2/3"}>
                    <img src={`${process.env.PUBLIC_URL}/ALMARAY.png`} alt="Описание изображения"
                         className="mx-auto my-4"/>
                </div>
            </div>

            <div className={"w-full h-[80%]"}>
                <img src={`${process.env.PUBLIC_URL}/сайт.jpg`} alt="Описание изображения"
                     className="mx-auto my-4"/>

                <button className={"bg-gray-500 relative -top-[240px] -left-[500px] px-6 py-2 rounded-2xl text-lg font-bold text-amber-50"}
                onClick={() => navigate('/products')}>Перейти</button>
            </div>
        </div>
    );
};

export default Main;