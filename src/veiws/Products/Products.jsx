import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Product from "../../components/Product";
import { SearchContext } from '../../contexts/SearchContext';
import Loader from '../../components/Loader';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [catalogs, setCatalogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage]);

    const fetchProducts = (page) => {
        setLoading(true);
        axios.get(`https://back.almaray.kz/api/products?page=${page}`)
            .then((response) => {
                if (response.data && response.data.data) {
                    setProducts(response.data.data);
                    setTotalPages(response.data.last_page);
                    setLoading(false);
                } else {
                    console.error('Unexpected response format:', response.data);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error('There was an error fetching the products', error);
                setLoading(false);
            });
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        loading ? <Loader /> : (
            <div className="w-full flex items-center justify-center">
                <div className="w-4/5 grid grid-cols-3 gap-4">
                    {filteredProducts.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            </div>
        )
    );
};

export default Products;