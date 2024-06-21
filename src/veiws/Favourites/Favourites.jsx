import React, {useEffect} from 'react';
import axios from "axios";
import Product from "../../components/Product";

const Favourites = () => {
    const [products, setProducts] = React.useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/favourites').then((response) => {
            setProducts(response.data);
        })
    }, []);

    return (
        <div className={"w-full grid grid-cols-3 border-gray-400 h-screen"}>
            {
                products.map(product => {
                    <Product product={product} key={product.id} />
                })
            }
        </div>
    );
};

export default Favourites;