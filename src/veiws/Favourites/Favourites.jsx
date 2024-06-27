import React, {memo, useContext, useEffect, useState} from 'react';
import axios from "axios";
import Product from "../Products/components/Product";
import { SearchContext } from "../../contexts/SearchContext";
import {CatalogContext} from "../../contexts/CatalogContext";
import Loader from "../../components/Loader";

const Favourites = () => {
    const [products, setProducts] = useState([]);
    const { searchValue } = useContext(SearchContext);
    const {isOpenCatalog, setIsOpenCatalog} = useContext(CatalogContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/favourites')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("There was an error fetching the favourites!", error);
                setLoading(false);
            });
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                filteredProducts.length > 0 ? (
                    <div className="w-full grid grid-cols-3 border-gray-400 h-screen">
                        {filteredProducts.map(product => (
                            <Product product={product} key={product.id} />
                        ))}
                    </div>
                ) : (
                    <div className="w-full h-[500px] flex items-center justify-center">
                        <div className="w-2/3 flex items-center h-2/3 justify-center">
                            <div className="w-1/2 h-full flex items-center justify-center">
                                <div>
                                    <div className="w-full flex items-center justify-center mt-3">
                                        <span className="text-gray-500 text-md">
                                            Добавьте украшение в избранное -
                                        </span>
                                    </div>
                                    <div className="w-full flex items-center justify-center mt-3">
                                        <button
                                            onClick={() => setIsOpenCatalog(!isOpenCatalog)}
                                            className="px-3 py-1 border-2 border-black text-gray-600 font-bold text-xl rounded-xl">
                                            Перейти в каталог
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </>
    );
};

export default memo(Favourites);
