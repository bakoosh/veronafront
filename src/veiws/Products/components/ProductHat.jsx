import React from 'react';

const ProductHat = ({ isOpen, toggleDropdown, products, sort, setSort }) => {
    const catalogName = products && products.length > 1 ? products[0].catalog_name : '';

    return (
        <div className="w-full h-[100px] mt-5">
            <div className="w-full h-1/2 flex justify-between">
                <div className="text-5xl mb-5 font-bold">{catalogName ? catalogName: 'Все'}</div>
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            type="button"
                            className="inline-flex justify-between w-full rounded-xl text-xl border-2 border-gray-300 shadow-sm px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                            id="options-menu"
                            aria-haspopup="true"
                            aria-expanded="true"
                            onClick={() => toggleDropdown()}
                        >
                            Сортировать
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                 className={"size-7"}
                                 transform="matrix(1, 0, 0, 1, 0, 0)">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <rect x="0" fill="none" width="24" height="24"></rect>
                                    <g>
                                        <path d="M7 10l5 5 5-5"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>

                    {isOpen && (
                        <div
                            className="origin-top-right absolute right-0 mt-2 border-2 border-gray-400 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-40">
                            <div className="py-1" role="menu" aria-orientation="vertical"
                                 aria-labelledby="options-menu">
                            <button className="block px-4 py-2 text-sm text-gray-700 w-full text-left" role="menuitem" onClick={() => setSort('popularity')}>
                                    По популярности
                                </button>
                                <button className="block px-4 py-2 text-sm text-gray-700 w-full text-left" role="menuitem" onClick={() => setSort('new')}>
                                    Новинки
                                </button>
                                <button className="block px-4 py-2 text-sm text-gray-700 w-full text-left" role="menuitem" onClick={() => setSort('price_asc')}>
                                    По возрастанию цены
                                </button>
                                <button className="block px-4 py-2 text-sm text-gray-700 w-full text-left" role="menuitem" onClick={() => setSort('price_desc')}>
                                    По убыванию цены
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="w-full flex mt-5">
                <div className="w-4/5"></div>
            </div>
        </div>
    );
};

export default ProductHat;
