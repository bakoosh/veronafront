import React, {useContext} from 'react';
import {SearchContext} from "../contexts/SearchContext";
//                    <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                         <path fill-rule="evenodd"
//                               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                               clip-rule="evenodd"></path>
//                     </svg>
const Header = () => {
    const {setSearchValue} = useContext(SearchContext);
    return (
        <header
            className='w-full items-center flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>

            <div className={"w-1/6 flex"}>
                {/*<div className={"bg-black w-10"}>А</div>*/}
                <div className={"bg-gray-500 px-5 py-2 rounded-xl text-amber-50 font-bold :hover:cursor-pointer"}>Каталог</div>
            </div>

            <div className={"w-1/2 flex"}>
                <input type="text"
                       placeholder={"Поиск по ассортименту"}
                       onChange={(e) => setSearchValue(e.target.value)}
                       className={"w-full border-black border-2 rounded-lg text-sm px-8 py-2"}/>
            </div>

            <div className={"w-1/3 ml-4"}>
                <ul className={"list-none flex items-center justify-around"}>
                    <li className={"text-black "}>
                        Войти
                    </li>
                    <li className={"text-black "}>
                        Избранное
                    </li>
                    <li className={"text-black "}>
                        Корзина
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;