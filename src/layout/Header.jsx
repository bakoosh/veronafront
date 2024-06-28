import React, { useContext } from 'react';
import { SearchContext } from "../contexts/SearchContext";
import {useLocation, useNavigate} from "react-router-dom";
import { TbLetterA } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { AuthUserContext } from "../contexts/AuthUserContext";
import { CatalogContext } from "../contexts/CatalogContext";
import { ModalContext } from "../contexts/ModalContext";
import { CityContext } from "../contexts/CityContext";

const Header = () => {
    const { setSearchValue } = useContext(SearchContext);
    const navigate = useNavigate();
    const { authUser } = useContext(AuthUserContext);
    const { isOpenCatalog, setIsOpenCatalog } = useContext(CatalogContext);
    const { city } = useContext(CityContext);
    const { isOpen, setIsOpen } = useContext(ModalContext);
    const location = useLocation();


    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

    return (
        <>
            <header className={"w-full flex items-center justify-center flex-col"}>
                <div className={'w-4/5 items-center flex py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[50px] tracking-wide relative z-50'}>
                    <div className={"min-w-1/6 text-gray-700 flex items-center"}>
                        <FaLocationDot />
                        {
                            city.length ? (
                                <span className={"text-md ml-1 hover:cursor-pointer"} onClick={() => setIsOpen(!isOpen)}>
                                    {city}
                                </span>
                            ) : (
                                <span className={"text-sm ml-1 hover:cursor-pointer"} onClick={() => setIsOpen(!isOpen)}>
                                    Выберите
                                </span>
                            )
                        }
                        <div className={"flex justify-center"}>
                            <span className={"ml-4 text-sm"}>{user ? user.phone : ''}</span>
                        </div>
                    </div>
                    <div className={"w-4/5 flex items-center justify-between ml-4"}>
                        <a href="#" className="text-gray-500 text-md font-bold">Обмен и возврат</a>
                        <a href="#" className="text-gray-500 text-md font-bold">Статус заказа</a>
                        <a href="#" className="text-gray-500 text-md font-bold">Магазины</a>
                        <a href="#" className="text-gray-500 text-md font-bold">Доставка и оплата</a>
                    </div>
                </div>
                <div className={'w-4/5 items-center flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'}>
                    <div className={"w-1/6 flex items-center justify-around"}>
                        <div
                            className={"size-11 flex items-center justify-center bg-gray-500 rounded-lg mr-4 hover:cursor-pointer"}
                            onClick={() => navigate('/')}
                        >
                            <svg
                                width="27.3756mm"
                                className={"size-6"}
                                height="25.137mm"
                                viewBox="0 0 74.99 68.86"
                                style={{
                                    shapeRendering: 'geometricPrecision',
                                    textRendering: 'geometricPrecision',
                                    imageRendering: 'optimizeQuality',
                                    fillRule: 'evenodd',
                                    clipRule: 'evenodd'
                                }}
                                version="1.1"
                            >
                                <defs>
                                    <font id="FontID0" horizAdvX="587" fontVariant="normal"
                                          style={{fillRule: 'nonzero'}} fontStyle="normal" fontWeight="400">
                                        <font-face fontFamily="EngraversGothic BT">
                                            <font-face-src>
                                                <font-face-name name="EngraversGothic BT"/>
                                            </font-face-src>
                                        </font-face>
                                        <missing-glyph>
                                            <path d="M0 0z"/>
                                        </missing-glyph>
                                        <glyph unicode="A" horizAdvX="587"
                                               d="M173.834 208.001l237.332 0 -119.167 238.666 -118.165 -238.666zm-173.834 -208.001l264.167 539 55.6668 0 267.167 -539 -72.8337 0 -73.166 145 -297.834 0 -71.3348 -145 -71.8323 0z"/>
                                    </font>
                                    <style type="text/css">
                                        {`
          @font-face { 
            font-family: "EngraversGothic BT";
            font-variant: normal;
            font-style: normal;
            font-weight: normal;
            src: url("#FontID0") format(svg);
          }
          .fil0 { fill: white; }
          .fnt0 { font-weight: normal; font-size: 127.75px; font-family: 'EngraversGothic BT'; }
        `}
                                    </style>
                                </defs>
                                <g id="Layer_1">
                                    <metadata id="CorelCorpID_0Corel-Layer"/>
                                    <text x="0" y="68.86" className="fil0 fnt0">A</text>
                                </g>
                            </svg>
                        </div>
                        <div
                            className={`flex px-5 py-2 border-2 border-gray-500 rounded-xl font-bold hover:cursor-pointer ${
                                isOpenCatalog ? 'bg-white text-black' : 'bg-gray-500 text-amber-50'
                            }`}
                            onClick={() => setIsOpenCatalog(!isOpenCatalog)}
                        >
                            {isOpenCatalog ? (
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                    <span className="ml-2 text-black">Каталог</span>
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                    </svg>
                                    <span className="ml-2 text-lg">Каталог</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={"w-1/2 flex"}>
                        <div className={"relative left-8 top-2.5"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder={"Поиск по ассортименту"}
                            onChange={(e) => location.pathname !== '/' ? setSearchValue(e.target.value) : navigate('/products')}
                            className={"w-[80%] border-black border-2 rounded-lg text-sm px-10 py-2.5"}
                        />
                    </div>
                    <div className={"w-1/3 ml-4"}>
                        <ul className={"list-none flex items-center justify-around"}>
                            <div className={"flex flex-col items-center hover:cursor-pointer"} onClick={() => navigate(`${authUser ? '/me' : '/login'}`)}>
                                <li className={"flex items-center"}>
                                    <svg className="w-8 h-8 text-gray-600" viewBox="0 0 87.92 112.76">
                                        <g>
                                            <path className="fill-current"
                                                  d="M67.66 23.7c0,13.08 -10.61,23.69 -23.7,23.69 -13.09,0 -23.69,-10.61 -23.69,-23.69 0,-13.09 10.61,-23.7 23.69,-23.7 13.09,0 23.7,10.61 23.7,23.7z"/>
                                            <path className="fill-current"
                                                  d="M43.96 57.26c-24.28,0 -43.96,19.68 -43.96,43.96 0,6.37 5.16,11.54 11.54,11.54h64.85c6.37,0 11.54,-5.16 11.54,-11.54 0,-24.28 -19.68,-43.96 -43.96,-43.96z"/>
                                        </g>
                                    </svg>

                                </li>
                                {authUser ? (
                                    <p className={"text-sm hover:cursor-pointer text-gray-400"}
                                       onClick={() => navigate('/me')}>
                                        Кабинет
                                    </p>
                                ) : (
                                    <p className={"text-sm hover:cursor-pointer text-gray-400"}
                                       onClick={() => navigate('/login')}>
                                    Войти
                                    </p>
                                )}
                            </div>
                            <div className={"flex flex-col items-center hover:cursor-pointer"} onClick={() => navigate('/favourites')}>
                                <li className={"flex items-center"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32.6266mm" height="26.2717mm"
                                         viewBox="0 0 150.93 121.54" className="fill-gray-600 w-8 h-8">
                                        <path
                                            d="M75.47 121.54c-3.94,0 -7.89,-1.52 -10.9,-4.52l-53.71 -53.71c-14.49,-14.48 -14.49,-37.96 0,-52.44 7.22,-7.27 16.75,-10.88 26.23,-10.88 9.48,0 19.01,3.6 26.23,10.88l12.14 12.11 11.48 -11.48c7.44,-7.45 17.37,-11.26 27.21,-11.26 9.35,0 18.65,3.43 25.79,10.45 7.36,7.27 10.99,16.81 10.99,26.41 0,9.46 -3.59,18.96 -10.86,26.2l-53.71 53.71c-3.01,3 -6.96,4.52 -10.9,4.52z"/>
                                    </svg>
                                </li>
                                <p className={"text-sm hover:cursor-pointer text-gray-400"}
                                   onClick={() => navigate('/favourites')}>
                                    Избранное
                                </p>
                            </div>
                            <div className={"flex flex-col items-center hover:cursor-pointer"} onClick={() => navigate('/basket')}>
                                <li className={"flex items-center"}>
                                    <svg className="w-8 h-8 text-gray-600" viewBox="0 0 77.18 72.55">
                                    <g>
                                            <path className="fill-current"
                                                  d="M0 2.58c0 4.84 5.11 2.68 8.03 3.37 0.83 0.2 1.1 0.47 1.58 0.99 0.48 0.52 0.61 1.1 0.85 1.88 2.86 9.45 5.45 19.66 8.26 28.95 0.85 2.8 1.51 5.49 2.37 8.34 0.73 2.42 1.52 6.09 2.69 7.84 1.21 1.82 3.98 3.82 7.02 3.82h33.21c1.68 0 3.3-0.82 4.38-1.51 3.15-2.04 3.52-4.69 4.17-7.85l3.77-20.14c0.64-3.3 1.82-6.26-0.63-7.66-1.19-0.68-9.04-0.35-10.77-0.35-14.9 0-29.81 0-44.71 0-1.04-2.1-3.57-13.87-5.46-16.52-0.83-1.16-1.94-2.14-3.25-2.79-2.6-1.29-5.58-0.9-8.91-0.9-1.16 0-2.6 1.4-2.6 2.53zm50.46 63.82c0 6.29 6.84 7.7 10.16 4.47 3.32-3.23 1.87-9.88-4.6-9.88-2.86 0-5.57 2.63-5.57 5.41zm-17.81 0c0 6.29 6.84 7.7 10.16 4.47 3.32-3.23 1.87-9.88-4.6-9.88-2.86 0-5.57 2.63-5.57 5.41z"/>
                                        </g>
                                    </svg>

                                </li>
                                <p className={"text-sm text-gray-400"}>
                                    Корзина
                                </p>
                            </div>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;