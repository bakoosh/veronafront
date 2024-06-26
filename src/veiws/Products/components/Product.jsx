import React, {memo} from 'react';
import axios from "axios";

const Product = ({ product }) => {


    const handleClick = async (product_id) => {
        console.log(product_id)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/favourites', {
                product_id: product_id
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleBasketClick = async(product_id) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/basket', {
                product_id: product_id,

            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={product.image} alt={product.name} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                <a href="#"

                   className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <button
                    onClick={() => handleClick(product.id)}
                    className={"bg-black py-3 px-3 text-amber-50"}>click
                </button>

                <button
                    onClick={() => handleBasketClick(product.id)}
                    className={"bg-black py-3 px-3 text-amber-50 ml-3"}>click to basket
                </button>
            </div>
        </div>
    );
};

export default Product;
