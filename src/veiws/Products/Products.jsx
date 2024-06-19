import React, {memo, StrictMode, useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Product from "../../components/Product";
import {useChain} from "react-spring";
import {SearchContext} from "../../contexts/SearchContext";
import Loader from "../../components/Loader";



const Products = () => {
    const [products, setProducts] = useState([]);
    const [catalogs, setCatalogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [perPage] = useState(10);

    const {searchValue} = useContext(SearchContext)

    useEffect(() => {
        axios.get(`https://back.almaray.kz/api/products`, {
            params: {
                page: currentPage,
                perPage: perPage
            }
        })
            .then((response) => {
                console.log('API Response:', response.data);
                if (response.data && Array.isArray(response.data.products)) {
                    setProducts(response.data.products);
                    setLoading(false)
                    setTotalPages(response.data.last_page);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            })
            .catch((error) => {
                console.error('There was an error fetching the products', error);
            });
    }, []);

    useEffect(() => {
        axios.get("https://back.almaray.kz/api/catalogs").then((response) => {
            setCatalogs(response.data.catalogs);
        })
    }, []);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        loading ? Loader : <div className={"flex"}>
            <div className={"w-1/3 mt-3.5"}>
                <div className={"flex items-center border-b-4 border-black"}>
                    <p className={"text-black text-lg font-medium"}>Все украшения</p>
                </div>


                <div className={"flex flex-col"}>
                    <div className={"w-full p-4 ml-4"}>
                        {catalogs && (
                            catalogs.map((item, index) => (
                                <li key={index} className="flex items-center mb-4">
                                    <span className="text-black text-lg font-bold ml-5">icon</span>
                                    <span className="text-black text-lg font-bold ml-5">{item.name}</span>
                                </li>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {products.length > 0 ? (
                    filteredProducts.map(product => (
                        <Product key={product.id} product={product}/>
                    ))
                ) : (
                    <p>Loader</p>
                )}
            </div>

            <div>
                {Array.from({length: totalPages}, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        disabled={currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>

    );
};

export default Products;
