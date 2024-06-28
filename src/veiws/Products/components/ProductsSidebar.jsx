import React, {useState} from 'react';


const ProductsSidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const [value, setValue] = useState([0, 1000]);

    const handleSliderChange = (index) => (event) => {
        const newValue = [...value];
        newValue[index] = Number(event.target.value);
        setValue(newValue);
    };

    const handleInputChange = (index) => (event) => {
        const newValue = [...value];
        newValue[index] = event.target.value === '' ? '' : Number(event.target.value);
        setValue(newValue);
    };

    return (
        <aside className="w-1/6 bg-white p-4">
            <div className="space-y-4">


                <div className="relative inline-block text-left">
                    <div>
                        <button
                            type="button"
                            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                            id="options-menu"
                            aria-haspopup="true"
                            aria-expanded="true"
                            onClick={toggleDropdown}
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
                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
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
                <div className="p-4 border border-gray-300 rounded-md max-w-md mx-auto">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold">Цена</h2>
                        <svg
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                    <div className="relative mt-4">
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={value[0]}
                            onChange={handleSliderChange(0)}
                            className="absolute w-full h-1 bg-gray-300 rounded-full appearance-none cursor-pointer"
                        />
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={value[1]}
                            onChange={handleSliderChange(1)}
                            className="absolute w-full h-1 bg-gray-300 rounded-full appearance-none cursor-pointer"
                        />
                        <div className="absolute inset-0 flex justify-between items-center">
                            <div className="w-4 h-4 bg-black rounded-full"></div>
                            <div className="w-4 h-4 bg-black rounded-full"></div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4">
                        <input
                            type="number"
                            value={value[0]}
                            onChange={handleInputChange(0)}
                            className="w-1/2 p-2 border border-gray-300 rounded-md mr-2"
                            placeholder="от 000"
                        />
                        <input
                            type="number"
                            value={value[1]}
                            onChange={handleInputChange(1)}
                            className="w-1/2 p-2 border border-gray-300 rounded-md ml-2"
                            placeholder="до 000"
                        />
                    </div>
                </div>
            </div>
        </aside>


    )
        ;
};

export default ProductsSidebar;