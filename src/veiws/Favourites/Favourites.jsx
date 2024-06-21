import React, { useContext, useEffect } from 'react';
import axios from "axios";
import Product from "../Products/components/Product";
import { SearchContext } from "../../contexts/SearchContext";

const Favourites = () => {
    const [products, setProducts] = React.useState([]);
    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/favourites').then((response) => {
            setProducts(response.data);
        });
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <div className={"w-full grid grid-cols-3 border-gray-400 h-screen"}>
            {filteredProducts.map(product => (
                <Product product={product} key={product.id} />
            ))}
        </div>
    );
};

export default Favourites;
