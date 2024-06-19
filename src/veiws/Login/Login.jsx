import React from 'react';

const Login = () => {

    const [number, setNumber] = React.useState('+7');
    return (
        <div className={"w-full h-96 flex items-center justify-center"}>
            <div className={"w-4/5 flex"}>
                <div className={"w-1/3 flex flex-col"}>
                    <div className={"flex"}>
                        <p className={"text-gray-600 text-2xl font-bold ml-6"}>Войти</p>
                    </div>


                    <input type="text"
                           className={"border-black px-8 py-3 rounded-lg border-2 text-black focus:outline-none text-lg mt-2"}
                           value={number}
                           onChange={(e) => setNumber(e.target.value)}

                    />

                    <button className={"px-10 py-3 text-lg text-gray-600 font-bold bg-gray-300 rounded-lg mt-2 "}>Получить код </button>

                    <span className={"text-gray-400 text-sm mt-2"}>Нажимая «Получить код», я соглашаюсь с условиями участия
                        в ALMARAY, политикой конфиденциальности и подтверждаю
                        согласие на получение сообщений рекламного характера.
                        Отказаться от рассылки можно в личном кабинете.
                    </span>
                </div>
                <div className={"w-2/3 flex items-center justify-center ml-16"}>
                    <img src={`${process.env.PUBLIC_URL}/ALMARAY.png`} alt="Описание изображения"
                         className="mx-auto my-4"/>
                </div>
            </div>
        </div>
    );
};

export default Login;