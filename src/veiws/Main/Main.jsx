import React from 'react';


const Main = () => {
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
            </div>
        </div>
    );
};

export default Main;