import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';
import { useNavigate } from 'react-router-dom';
import { CatalogContext } from '../../contexts/CatalogContext';
import Sidebar from "../../layout/Sidebar";

const Catalog = () => {
    const [catalogs, setCatalogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { catalogId, setCatalogId, isOpenCatalog, setIsOpenCatalog } = useContext(CatalogContext);

    const golds = [
        'Желтое золото',
        'Красное золото'
    ]

    useEffect(() => {
        setLoading(true);
        axios.get('http://127.0.0.1:8000/api/catalogs').then(response => {
            setCatalogs(response.data.catalogs);
            setLoading(false);
        });
    }, []);

    const handleClick = (id) => {
        setCatalogId(id);
        setIsOpenCatalog(!isOpenCatalog);
        navigate('/products');
    }

    return (
        <div className="w-full h-screen p-4 overflow-hidden flex pt-14">
            <Sidebar/>

            <main className="flex-1 p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div
                        className="bg-gray-300 flex items-center justify-center h-36 border-2 border-black rounded-3xl text-3xl font-medium">БАННЕР
                        РЕКЛАМЫ
                    </div>
                    <div
                        className="bg-gray-300 flex items-center justify-center h-36 border-2 border-black rounded-3xl text-3xl font-medium">БАННЕР
                        РЕКЛАМЫ
                    </div>
                </div>

                <div className="text-gray-500 mb-2">Тип украшения -</div>
                <div className="grid grid-cols-3 gap-16 mb-4 text-gray-700">
                    {loading ? (
                        <Loader/>
                    ) : (
                        catalogs.map(catalog => (
                            <h1
                                key={catalog.id}
                                className="text-2xl hover:cursor-pointer"
                                onClick={() => handleClick(catalog.id)}
                            >
                                {catalog.name}
                            </h1>
                        ))
                    )}
                </div>

                <div className="text-gray-500 mb-2 mt-20">Материал -</div>
                <div className="grid grid-cols-3 gap-16 mb-4 text-gray-700">
                    {loading ? (
                        <Loader/>
                    ) : (
                        golds.map(gold => (
                            <h1
                                className="text-2xl hover:cursor-pointer"
                                key={gold}
                                //onClick
                            >
                                {gold}
                            </h1>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

export default Catalog;
