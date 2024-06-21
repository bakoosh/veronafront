import React from 'react';

const ErrorPage = () => {
    return (
        <div className={"w-full h-screen overflow-hidden flex items-center justify-center"}>
            <div className={"w-2/3 h-1/2"}>
                <img src={`${process.env.PUBLIC_URL}/ALMARAY.png`} alt="Описание изображения"
                     className="mx-auto my-4"/>
            </div>
            <div className={"w-2/3 h-1/2 flex items-center justify-center"}>
                <p className={"text-black text-2xl font-bold"}>Произошла ошибка , повторите попытку еще раз через минуту</p>
            </div>
        </div>
    );
};

export default ErrorPage;