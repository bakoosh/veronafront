import React from 'react';

const Footer = () => {
    return (
        <footer className={"w-full h-auto flex justify-around"}>
            <div className={"w-1/5"}>
                <ul>
                    <li className={"text-black text font-bold mb-2"}>Каталог</li>
                    <li className={"text-black text font-bold mt-2"}>Магазины</li>
                    <li className={"text-black text font-bold mt-2"}>Бренды</li>
                    <li className={"text-black text font-bold mt-2"}>Личный кабинет</li>
                    <li className={"text-black text font-bold mt-2"}>Доставка и оплата </li>
                </ul>
            </div>

            <div className={"w-1/5"}>
                <ul>
                    <li className={"text-gray-500 text-sm mb-2"}>Помощь</li>
                    <li className={"text-black text-md mt-1"}>8-800-80-80</li>
                    <li className={"text-black text-md mt-1"}>Вопросы и ответы</li>
                    <li className={"text-black text-md mt-1"}>Доставка</li>
                    <li className={"text-black text-md mt-1"}>Обмен и возврат</li>
                    <li className={"text-black text-md mt-1"}>Обратная связь</li>
                </ul>
            </div>

            <div className={"w-1/5"}>
                <ul>
                    <li className={"text-gray-500 text-sm mb-2"}>Наша компания</li>
                    <li className={"text-black text-md mt-1"}>О бренде</li>
                    <li className={"text-black text-md mt-1"}>Новости</li>
                    <li className={"text-black text-md mt-1"}>Сотрудничество</li>
                    <li className={"text-black text-md mt-1"}>Бонусная программа</li>

                </ul>
            </div>

            <div className={"w-1/5"}>
                <ul>
                    <li className={"text-gray-500 text-sm mb-2"}>Рекамендуем</li>
                    <li className={"text-black text-md mt-1"}>О ювелироном деле</li>
                    <li className={"text-black text-md mt-1"}>Энциклопедия</li>

                </ul>
            </div>
        </footer>
    );
};

export default Footer;