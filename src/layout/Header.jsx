import React, { useState, useContext, useRef, useEffect } from 'react';
import { SearchContext } from "../contexts/SearchContext";
import { useLocation, useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { AuthUserContext } from "../contexts/AuthUserContext";
import { CatalogContext } from "../contexts/CatalogContext";
import { ModalContext } from "../contexts/ModalContext";
import { CityContext } from "../contexts/CityContext";
import axios from "axios";

const Header = () => {

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products').then((response) => {
            setProducts(response.data.data);
        })
    }, []);

    const { searchValue, setSearchValue } = useContext(SearchContext);
    const navigate = useNavigate();
    const { authUser } = useContext(AuthUserContext);
    const { isOpenCatalog, setIsOpenCatalog } = useContext(CatalogContext);
    const { city } = useContext(CityContext);
    const { isOpen, setIsOpen } = useContext(ModalContext);
    const location = useLocation();

    const [products, setProducts] = useState([]);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const inputRef = useRef(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };


    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        if (value.trim() === '') {
            setFilteredSuggestions([]);
        } else {
            setFilteredSuggestions(
                products.filter(product =>
                    product.name.toLowerCase().includes(value.toLowerCase())
                )
            );
        }
    };

    const handleNavigate = (id) => {
        navigate(`/products/${id}`)
        setSearchValue('')
        setFilteredSuggestions('')
    }

    const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

    return (
        <>
            <header className={"w-full flex items-center justify-center flex-col"}>
                <div className={'w-4/5 items-center flex py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[50px] tracking-wide relative z-50'}>
                    <div className={"min-w-1/6 text-gray-700 flex items-center"}>
                        <FaLocationDot className={"-mt-1"}/>
                        {city.length ? (
                            <span className={"text-md ml-1 hover:cursor-pointer"} onClick={() => setIsOpen(!isOpen)}>
                                {city}
                            </span>
                        ) : (
                            <span className={"text-sm ml-1 hover:cursor-pointer"} onClick={() => setIsOpen(!isOpen)}>
                                Выберите
                            </span>
                        )}
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
                <div
                    className={'w-4/5 items-center flex border-b py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'}>
                    <div className={"w-1/6 flex items-center"}>
                        <div
                            className={"size-11 text-amber-50 text-3xl flex items-center justify-center bg-gray-500 rounded-lg mr-4 hover:cursor-pointer"}
                            onClick={() => navigate('/')}
                        >
                            A
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
                    <div className={"w-1/2 flex relative"}>
                        <div className={"relative left-8 top-2.5"}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                            </svg>
                        </div>
                        {
                            location.pathname !== '/products' || '/favourites' || '/basket' ? (<input
                                    type="text"
                                    placeholder={"Поиск по ассортименту"}
                                    value={searchValue}
                                    onChange={handleInputChange}
                                    ref={inputRef}
                                    className={"w-[100%] border-black border-2 rounded-lg text-sm px-10 py-2.5 focus:bg-gray-100"}
                                /> ): (
                                <input
                                    type="text"
                                    placeholder={"Поиск по ассортименту"}
                                    onChange={(e) => location.pathname !== '/' ? setSearchValue(e.target.value) : navigate('/products')}
                                    className={"w-[80%] border-black border-2 rounded-lg text-sm px-10 py-2.5"}
                                />)
                        }

                    </div>


                    {location.pathname !== '/products' && location.pathname     !== '/favourites' && location.pathname !== '/basket' && filteredSuggestions.length > 0 && (
                        <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-40 p-10 ">
                            <div className="flex w-full overflow-x-auto overflow-y-auto">
                                {filteredSuggestions.slice(0, 4).map((product, index) => (

                                        <div
                                            className="w-1/3 min-h-[200px] hover:cursor-pointer transition-transform duration-300 transform hover:scale-95"
                                            key={index}
                                            onClick={() => handleNavigate(product.id)}
                                        >
                                            <div className="w-full h-[70%]">
                                                <img src="/catalogImages/браслеты.png" alt="" className="py-5 px-5"/>
                                            </div>
                                            <div className="w-full h-[30%] flex flex-col mt-10">
                                                <span className="font-bold text-sm">{product.name}</span>
                                                <span className="font-bold text-sm mt-3">{product.price} тг</span>
                                            </div>
                                        </div>


                                ))}
                            </div>
                        </div>
                    )}

                    <div className={"w-1/3 ml-4"}>
                        <ul className={"list-none flex items-center justify-around"}>
                            <div className={"flex flex-col items-center hover:cursor-pointer"}
                                 onClick={() => navigate(`${authUser ? '/me' : '/login'}`)}>
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
                            <div className={"flex flex-col items-center hover:cursor-pointer"}
                                 onClick={() => navigate('/favourites')}>
                                <li className={"flex items-center"}>
                                    <svg className="w-7 h-7 text-gray-600" viewBox="0 0 121.9 107.5">
                                        <path className="fill-current"
                                              d="M88.4 0c-15.7 0-29 8.1-37.4 20.3C42.6 8.1 29.2 0 13.5 0 5.2 0 0 2.4 0 2.4v35.1c0 47.2 51 69.9 51 69.9 5.6 2.8 11.9 0 11.9 0 51-25.2 59.1-65.1 59.1-65.1V2.4s-3.6-2.4-11.9-2.4z"/>
                                    </svg>
                                </li>
                                <p className={"text-sm hover:cursor-pointer text-gray-400"}>Избранное</p>
                            </div>
                            <div className={"flex flex-col items-center hover:cursor-pointer"}
                                 onClick={() => navigate('/basket')}>
                                <li className={"flex items-center"}>
                                    <svg className="w-7 h-7 text-gray-600" viewBox="0 0 122.88 115.51">
                                        <path className="fill-current"
                                              d="M108.26,90.35H34.29L33.36,96.11c-0.86,4.89-5.87,8.73-10.88,8.73H10.88C4.87,104.84,0,100.32,0,94.79 c0-5.45,4.65-9.88,10.38-9.88h6.25L26.95,9.74H7.78c-4.61,0-7.78-3.3-7.78-7.19C0,3.26,3.16,0,7.78,0h21.65 c3.42,0,7.36,3.12,7.36,6.76h69.32c3.7,0,6.34,3.1,5.74,6.76l-10.91,61.48c-0.72,4.04-4.77,7.38-8.86,7.38H37.96L36.97,82.2h66.35 c3.7,0,6.69,3.41,6.09,7.07l-0.06,0.36C108.91,89.1,108.64,90.35,108.26,90.35L108.26,90.35z M38.88,114.36 c-4.61,0-8.36-3.43-8.36-7.66c0-4.23,3.75-7.66,8.36-7.66c4.61,0,8.36,3.43,8.36,7.66C47.24,110.93,43.49,114.36,38.88,114.36 L38.88,114.36z M103.99,114.36c-4.61,0-8.36-3.43-8.36-7.66c0-4.23,3.75-7.66,8.36-7.66c4.61,0,8.36,3.43,8.36,7.66 C112.35,110.93,108.6,114.36,103.99,114.36L103.99,114.36z"/>
                                    </svg>
                                </li>
                                <p className={"text-sm hover:cursor-pointer text-gray-400"}>Корзина</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
