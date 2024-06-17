import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://back.almaray.kz/api/products') //Loader !!! Слишком большая загрузка
            .then((response) => {
                console.log('API Response:', response.data); // Log API response
                if (response.data && Array.isArray(response.data.products)) {
                    setProducts(response.data.products);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            })
            .catch((error) => {
                console.error('There was an error fetching the products', error);
            });
    }, []);

    return (
        <div className="grid grid-cols-3 gap-4">
            {products.length > 0 ? (
                products.map(product => (
                    <Product key={product.id} product={product} />
                ))
            ) : (
                <p>Нету продуктов повтарите запрос еще раз !!!</p>
            )}
        </div>
    );
};

export default Products;
