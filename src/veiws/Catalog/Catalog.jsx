import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../components/Loader';
import { useNavigate } from 'react-router-dom';
import { CatalogContext } from '../../contexts/CatalogContext';

const Catalog = () => {
    const [catalogs, setCatalogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { catalogId, setCatalogId, isOpenCatalog, setIsOpenCatalog } = useContext(CatalogContext);

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

    console.log(catalogId);

    return (
        <div className="w-full h-screen p-4 overflow-hidden flex pt-14">
            <aside className="w-1/5 bg-white p-4">
                <div className="space-y-4">
                    <div className="text-xl font-bold">Все украшения</div>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Акции</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Новинки</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Premium</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Золото</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Цепи</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Свадьба</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Коллекции</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Серьги</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Кольца</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Браслеты</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Подвески</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Булавки</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Мужчинам</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon mr-2"></span>
                            <span className="ml-2 text-lg">Детям</span>
                        </div>
                    </div>
                </div>
            </aside>

            <main className="flex-1 p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-300 flex items-center justify-center h-36 border-2 border-black rounded-3xl text-3xl font-medium">БАННЕР РЕКЛАМЫ</div>
                    <div className="bg-gray-300 flex items-center justify-center h-36 border-2 border-black rounded-3xl text-3xl font-medium">БАННЕР РЕКЛАМЫ</div>
                </div>

                <div className="text-gray-500 mb-2">Тип украшения -</div>
                <div className="grid grid-cols-3 gap-16 mb-4 text-gray-700">
                    {loading ? (
                        <Loader />
                    ) : (
                        catalogs.map(catalog => (
                            <h1
                                key={catalog.id} // Adding key to list items
                                className="text-2xl hover:cursor-pointer"
                                onClick={() => handleClick(catalog.id)}
                            >
                                {catalog.name}
                            </h1>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

export default Catalog;
