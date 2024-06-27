import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CatalogContext } from '../../contexts/CatalogContext';
import { SearchContext } from '../../contexts/SearchContext';
import Product from '../Products/components/Product';
import Loader from "../../components/Loader";

const Basket = () => {
    const [products, setProducts] = useState([]);
    const { searchValue } = useContext(SearchContext);
    const { isOpenCatalog, setIsOpenCatalog } = useContext(CatalogContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://127.0.0.1:8000/api/basket')
            .then((response) => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching basket:', error);
                setLoading(false);
            });
    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className="w-full">
            {loading ? (
                <Loader />
            ) : (
                filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-3 gap-4">
                        {filteredProducts.map(product => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="w-full h-[500px] flex items-center justify-center">
                        <div className="w-2/3 flex flex-col items-center">
                            <div className="mb-3">
                                <span className="text-gray-500 text-2xl">В вашей корзине пусто</span>
                            </div>
                            <div className="mb-3">
                                <span className="text-gray-500 text-md">Добавьте украшение мечты</span>
                            </div>
                            <div>
                                <button
                                    onClick={() => setIsOpenCatalog(!isOpenCatalog)}
                                    className="px-3 py-1 border-2 border-black text-gray-600 font-bold text-xl rounded-xl"
                                >
                                    Перейти в каталог
                                </button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Basket;
