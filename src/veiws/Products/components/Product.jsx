import React, {memo} from 'react';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Product = ({ product }) => {


    const handleClick = async (product_id) => {
        console.log(product_id)
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/favourites', {
                product_id: product_id
            });
            toast.success('Добавлено в избранное')
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
            toast.error("Чтобы добавлять товар в избранное надо авторизоваться!!")
        }
    };

    const handleBasketClick = async(product_id) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/basket', {
                product_id: product_id,
                quantity: 1 ,
            });
            toast.success('Добавлено в корзину')
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
            toast.error("Чтобы добавлять товар в корзину надо авторизоваться!!")
        }
    }


    return (

        <div className="pl-3 pt-3 mt-4 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 transform hover:scale-95">
            <div className={"w-full h-[50%] flex items-center justify-center"}>
                <a href="#" className={"w-4/5 h-5/6"}>
                    <img className="rounded-t-lg" src="/catalogImages/браслеты.png" alt={product.name}/>
                </a>
            </div>

            <div className="pt-5 mt-5   ">
                <div className={"flex items-center justify-between px-3"}>
                    <span className={"font-bold text-2xl"}>{product.price} тг</span>
                    <div className={"flex"}>
                        <svg onClick={() => handleClick(product.id)} xmlns="http://www.w3.org/2000/svg" width="32.6266mm" height="26.2717mm"
                             viewBox="0 0 150.93 121.54" className="fill-gray-600 w-6 h-6 hover:cursor-pointer
                             ">
                            <path
                                d="M75.47 121.54c-3.94,0 -7.89,-1.52 -10.9,-4.52l-53.71 -53.71c-14.49,-14.48 -14.49,-37.96 0,-52.44 7.22,-7.27 16.75,-10.88 26.23,-10.88 9.48,0 19.01,3.6 26.23,10.88l12.14 12.11 11.48 -11.48c7.44,-7.45 17.37,-11.26 27.21,-11.26 9.35,0 18.65,3.43 25.79,10.45 7.36,7.27 10.99,16.81 10.99,26.41 0,9.46 -3.59,18.96 -10.86,26.2l-53.71 53.71c-3.01,3 -6.96,4.52 -10.9,4.52z"/>
                        </svg>

                        <svg onClick={() => handleBasketClick(product.id)} className="w-6 h-6 text-gray-600 ml-1 hover:cursor-pointer" viewBox="0 0 77.18 72.55">
                            <g>
                                <path className="fill-current"
                                      d="M0 2.58c0 4.84 5.11 2.68 8.03 3.37 0.83 0.2 1.1 0.47 1.58 0.99 0.48 0.52 0.61 1.1 0.85 1.88 2.86 9.45 5.45 19.66 8.26 28.95 0.85 2.8 1.51 5.49 2.37 8.34 0.73 2.42 1.52 6.09 2.69 7.84 1.21 1.82 3.98 3.82 7.02 3.82h33.21c1.68 0 3.3-0.82 4.38-1.51 3.15-2.04 3.52-4.69 4.17-7.85l3.77-20.14c0.64-3.3 1.82-6.26-0.63-7.66-1.19-0.68-9.04-0.35-10.77-0.35-14.9 0-29.81 0-44.71 0-1.04-2.1-3.57-13.87-5.46-16.52-0.83-1.16-1.94-2.14-3.25-2.79-2.6-1.29-5.58-0.9-8.91-0.9-1.16 0-2.6 1.4-2.6 2.53zm50.46 63.82c0 6.29 6.84 7.7 10.16 4.47 3.32-3.23 1.87-9.88-4.6-9.88-2.86 0-5.57 2.63-5.57 5.41zm-17.81 0c0 6.29 6.84 7.7 10.16 4.47 3.32-3.23 1.87-9.88-4.6-9.88-2.86 0-5.57 2.63-5.57 5.41z"/>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className={"w-full"}>
                    <h1 className={"ml-3 text-xl flex items-start"}>{product.insert}</h1>
                    <h1 className={"ml-3 text-xl flex items-start"}>585 пробы</h1>
                    <span className={"flex items-start ml-3 text-sm text-gray-400 mb-8"}>Арт. {product.vendor}</span>
                </div>

            </div>

            <ToastContainer className="reset"/>

        </div>

    );
};

export default Product;
