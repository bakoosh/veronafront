import React, {useContext} from 'react';
import {SearchContext} from "../contexts/SearchContext";
import {useNavigate} from "react-router-dom";
import { TbLetterA } from "react-icons/tb";


const Header = () => {
    const {setSearchValue} = useContext(SearchContext);
    const navigate = useNavigate()
    return (
        <header
            className={"w-full flex items-center justify-center"}>
            <div className={'w-4/5 items-center flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'}>

            <div className={"w-1/6 flex"}>
                <div className={"w-10 h-10 flex items-center justify-center bg-gray-500 rounded-lg mr-4 hover:cursor-pointer"}>
                    <TbLetterA className={"text-lg text-amber-50"} />
                </div>
                <div className={"flex bg-gray-500 px-5 py-2 rounded-xl text-amber-50 font-bold hover:cursor-pointer"}
                     onClick={() => navigate('/products')}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                    <span className={"ml-2"}>Каталог</span>
                </div>
            </div>

            <div className={"w-1/2 flex"}>
                <div className={"relative left-8 top-1.5"}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                    </svg>
                </div>

                <input type="text"
                       placeholder={"Поиск по ассортименту"}
                       onChange={(e) => setSearchValue(e.target.value)}
                       className={"w-full border-black border-2 rounded-lg text-sm px-10 py-2"}/>
            </div>

            <div className={"w-1/3 ml-4"}>
                {/*<ul className={"list-none flex items-center justify-around"}>*/}
                {/*    <li className={"flex items-center"}>*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"*/}
                {/*             className="size-6">*/}
                {/*            <path fill-rule="evenodd"*/}
                {/*                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"*/}
                {/*                  clip-rule="evenodd"/>*/}
                {/*        </svg>*/}


                {/*    </li>*/}
                {/*    <li className={"flex items-center"}>*/}
                {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"*/}
                {/*             className="size-6">*/}
                {/*            <path*/}
                {/*                d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"/>*/}
                {/*        </svg>*/}

                {/*    </li>*/}
                {/*    <li className={"flex items-center w"}>*/}
                {/*        <RiShoppingCart2Fill />*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
            </div>
        </header>
    );
};

export default Header;