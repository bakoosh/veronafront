import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

const ProductInfo = () => {
    const {id} = useParams();
    const [product, setProduct] = React.useState('');
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/${id}`).then(response => {
            setProduct(response.data)
        })
    }, []);


    const handleClick = async (product_id) => {
        console.log(product_id)
        try {
            toast.success('Добавлено в избранное');
            const response = await axios.post('http://127.0.0.1:8000/api/favourites', {
                product_id: product_id
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
            toast.error("Чтобы добавлять товар в избранное нужно вторизоваться!!");
        }
    };

    const handleBasketClick = async (product_id) => {
        try {
            toast.success('Добавлено в корзину');
            const response = await axios.post('http://127.0.0.1:8000/api/basket', {
                product_id: product_id,
                quantity: 1 ,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
            toast.error("Чтобы добавлять товар в корзину нужно авторизоваться!!");
        }
    }


    return (
        <div className={"flex items-center justify-between m-10"}>
            <div className={"w-1/2"}>
                <div className={"w-2/3 flex items-center justify-center mx-10 my-10"}>
                    <img src="/catalogImages/браслеты.png" alt=""/>
                </div>
            </div>
            <div className={"w-[40%]"}>
                <h1 className={"text-4xl font-bold text-gray-500 flex items-start"}>{product.name}</h1>
                <span className={"font-bold text-gray-500 text-3xl flex items-start"}>{product.sample} проба</span>

                <div className={"mt-5"}>
                    <h1 className={"text-2xl font-bold text-gray-500 flex items-start"}>Артикул</h1>
                    <div className={"w-full bg-blue-50 text-3xl text-gray-500 flex items-start py-1 px-2 mt-1"}>
                        {product.vendor}
                    </div>


                    <h1 className={"text-2xl font-bold text-gray-500 flex items-start mt-5"}>Вес</h1>
                    <div className={"w-full bg-blue-50 text-3xl text-gray-500 flex items-start py-1 px-2 mt-1"}>
                        {product.average_weight} гр
                    </div>
                </div>

                <div className={"flex items-center mt-5"}>
                    <h1 className={"text-2xl font-bold text-gray-500 flex items-start"}>Вставки</h1>
                    <span className={"ml-7 text-gray-500 text-2xl"}>( {product.insert} )</span>
                </div>


                <div className={"flex items-center mt-5"}>
                    <h1 className={"text-2xl font-bold text-gray-500 flex items-start"}>Размер</h1>
                    <span className={"ml-7 text-gray-500 text-2xl"}>{product.size ? product.size : 'Размер не указан'}</span>
                </div>

                <div className={"flex items-center mt-5"}>
                    <button onClick={() => handleBasketClick(product.id)} className={"hover:cursor-pointer bg-gray-500 text-amber-50 font-bold text-md py-6 px-5 rounded-xl hover:text-gray-400 hover:transition  "}>Добавить в корзину
                    </button>
                    <div onClick={() => handleClick(product.id)} className={"bg-gray-500 ml-4 py-5 px-5 rounded-xl"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32.6266mm"
                             height="26.2717mm"
                             viewBox="0 0 150.93 121.54"
                             className="fill-amber-50 w-8 h-8 hover:cursor-pointer  transition-transform duration-300 transform hover:scale-125 ">
                            <path
                                d="M75.47 121.54c-3.94,0 -7.89,-1.52 -10.9,-4.52l-53.71 -53.71c-14.49,-14.48 -14.49,-37.96 0,-52.44 7.22,-7.27 16.75,-10.88 26.23,-10.88 9.48,0 19.01,3.6 26.23,10.88l12.14 12.11 11.48 -11.48c7.44,-7.45 17.37,-11.26 27.21,-11.26 9.35,0 18.65,3.43 25.79,10.45 7.36,7.27 10.99,16.81 10.99,26.41 0,9.46 -3.59,18.96 -10.86,26.2l-53.71 53.71c-3.01,3 -6.96,4.52 -10.9,4.52z"/>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProductInfo;