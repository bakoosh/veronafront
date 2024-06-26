import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Product from "./components/Product";
import { SearchContext } from '../../contexts/SearchContext';
import Loader from '../../components/Loader';
import { CatalogContext } from "../../contexts/CatalogContext";
import SkeletonProduct from '../../components/SkeletonProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { searchValue } = useContext(SearchContext);
    const { catalogId } = useContext(CatalogContext);

    useEffect(() => {
        fetchProducts(currentPage);
    }, [currentPage, catalogId]);

    const fetchProducts = async (page) => {
        setLoading(true);
        try {
            let url = `https://back.almaray.kz/api/products?page=${page}`;
            if (catalogId) {
                url += `&catalog_id=${catalogId}`;
            }

            const response = await axios.get(url);
            if (response.data && response.data.data) {
                setProducts(response.data.data);
                setTotalPages(response.data.last_page);
            } else {
                console.error('Unexpected response format:', response.data);
            }
        } catch (error) {
            console.error('There was an error fetching the products', error);
        } finally {
            setLoading(false);
        }
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const visiblePages = 5;
        const halfVisible = Math.floor(visiblePages / 2);
        const firstVisible = Math.max(1, currentPage - halfVisible);
        const lastVisible = Math.min(totalPages, firstVisible + visiblePages - 1);

        const pageNumbers = [];
        for (let i = firstVisible; i <= lastVisible; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers.map(pageNumber => (
            <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${
                    currentPage === pageNumber ? 'z-10 bg-indigo-500 text-white' : ''
                }`}
            >
                {pageNumber}
            </button>
        ));
    };

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className="w-4/5 grid grid-cols-3 gap-4">
                {loading
                    ? Array.from({ length: 9 }).map((_, index) => <SkeletonProduct key={index} />)
                    : filteredProducts.map(product => (
                        <Product key={product.id} product={product} />
                    ))}
            </div>
            {loading && <Loader />}
            <div className="flex justify-center my-4">
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    {renderPageNumbers()}
                </nav>
            </div>
        </div>
    );
};

export default Products;
