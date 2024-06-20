import React from 'react';

const Footer = () => {
    return (
        <footer className={"w-full h-auto flex justify-around border-t border-gray-200 mt-10"}>
            <div className={"w-1/5 mt-3.5 mb-3.5"}>
                <ul>
                    <li className={"flex items-start text-black text-lg font-bold mb-1"}>Каталог</li>
                    <li className={"flex items-start text-black text-lg font-bold mt-1"}>Магазины</li>
                    <li className={"flex items-start text-black text-lg font-bold mt-1"}>Бренды</li>
                    <li className={"flex items-start text-black text-lg font-bold mt-1"}>Личный кабинет</li>
                    <li className={"flex items-start text-black text-lg font-bold mt-1"}>Доставка и оплата </li>
                </ul>

            </div>

            <div className={"w-1/5 mt-3.5 mb-3.5"}>
                <ul>
                    <li className={"flex items-start text-gray-500 text-sm mb-2"}>Помощь</li>
                    <li className={"flex items-start text-black text-md mt-0.5"}>8-800-80-80</li>
                    <li className={"flex items-start text-black text-md mt-0.5"}>Вопросы и ответы</li>
                    <li className={"flex items-start text-black text-md mt-0.5"}>Доставка</li>
                    <li className={"flex items-start text-black text-md mt-0.5"}>Обмен и возврат</li>
                    <li className={"flex items-start text-black text-md mt-0.5"}>Обратная связь</li>
                </ul>
            </div>

            <div className={"w-1/5 mt-3.5 mb-3.5"}>
                <ul>
                    <li className={"flex items-start text-gray-500 text-sm mb-2"}>Наша компания</li>
                    <li className={"flex items-start text-black text-md mt-0.5"}>О бренде</li>
                    <li className={"flex items-start text-black text-md mt-0.5"}>Новости</li>
                    <li className={"flex items-start text-black text-md mt-0.5"}>Сотрудничество</li>
                    <li className={"flex items-start text-black text-md mt-0.5"}>Бонусная программа</li>

                </ul>
            </div>

            <div className={"w-1/5 mt-3.5 mb-3.5"}>
                <ul>
                    <li className={"flex items-start text-gray-500 text-sm mb-2"}>Рекамендуем</li>
                    <li className={"flex items-start text-black text-md mt-1"}>О ювелироном деле</li>
                    <li className={"flex items-start text-black text-md mt-1"}>Энциклопедия</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;