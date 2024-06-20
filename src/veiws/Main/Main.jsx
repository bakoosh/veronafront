import React from 'react';


const Main = () => {
    return (
        <div className={"w-full h-screen overflow-hidden"}>
            <div className={"w-full h-1/3 flex items-center justify-center"}>
                <div className={"w-2/3"}>
                    <img src={`${process.env.PUBLIC_URL}/ALMARAY.png`} alt="Описание изображения"
                         className="mx-auto my-4"/>
                </div>
            </div>
        </div>
    );
};

export default Main;