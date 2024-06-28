import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const ProductInfo = () => {
    const {id} = useParams();
    const [product, setProduct] = React.useState('');
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/products/${id}`).then(response => {
            setProduct(response.data)
        })
    }, []);
    console.log(product)
    return (
        <div className={"flex items-center justify-between"}>
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

            </div>
        </div>
    );
};

export default ProductInfo;