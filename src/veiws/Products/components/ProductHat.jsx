import React from 'react';

const ProductHat = ({isOpen , toggleDropdown}) => {
    return (
        <div className={"w-full h-[100px] mt-5"}>
            <div className={"w-full h-1/2 flex justify-between"}>
                <div className="text-5xl mb-5 font-bold">Кольца</div>
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
                            <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path fillRule="evenodd"
                                      d="M10 3a1 1 0 01.894.553l5 9a1 1 0 01-.723 1.447H4.829a1 1 0 01-.723-1.447l5-9A1 1 0 0110 3zM10 7.118L6.362 14h7.276L10 7.118z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                    </div>

                    {isOpen && (
                        <div
                            className="origin-top-right absolute right-0 mt-2 border-2  border-gray-400 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-40">
                            <div className="py-1" role="menu" aria-orientation="vertical"
                                 aria-labelledby="options-menu">
                                <button className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
                                        role="menuitem">По популярности
                                </button>
                                <button className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
                                        role="menuitem">Новинки
                                </button>
                                <button className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
                                        role="menuitem">По возрастанию цены
                                </button>
                                <button className="block px-4 py-2 text-sm text-gray-700 w-full text-left"
                                        role="menuitem">По убыванию цены
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className={"w-full flex"}>
                <div className={"w-1/6 bg-black"}></div>
            </div>
        </div>
    );
};

export default ProductHat;