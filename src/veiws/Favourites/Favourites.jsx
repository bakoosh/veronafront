import React, { useContext, useEffect } from 'react';
import axios from "axios";
import Product from "../Products/components/Product";
import { SearchContext } from "../../contexts/SearchContext";
import {CatalogContext} from "../../contexts/CatalogContext";

const Favourites = () => {
    const [products, setProducts] = React.useState([]);
    const { searchValue } = useContext(SearchContext);
    const {isOpenCatalog, setIsOpenCatalog} = useContext(CatalogContext);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/favourites').then((response) => {
            setProducts(response.data);
        });
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
<>
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <div className="w-full grid grid-cols-3 border-gray-400 h-screen">
                        <Product product={product} key={product.id} />
                    </div>
                ))
            ) : (
                <div className={"w-full z h-[500px] flex items-center justify-center"}>
                    <div className={"w-2/3 flex items-center h-2/3"}>
                        <div className={"w-1/2 h-2/3 mt-3.5 flex items-center justify-center"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-64 h-64 text-gray-800"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                        </div>

                        <div className={"w-1/2 h-full flex items-center justify-center"}>
                            <div>
                                <div className={"w-full flex items-center justify-center mt-3"}>
                                    <span className={"text-gray-500 text-md"}>Добавьте украшение в избранное -</span>
                                </div>

                                <div className={"w-full flex items-center justify-center mt-3"}>
                                    <button
                                        onClick={() => setIsOpenCatalog(!isOpenCatalog)}
                                        className={"px-3 py-1 border-2 border-black text-gray-600 font-bold text-xl rounded-xl"}>Перейти
                                        в каталог
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
</>
    );
};

export default Favourites;
