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
    const { catalogId, setCatalogId, isOpenCatalog, setIsOpenCatalog} = useContext(CatalogContext);

    const golds = [
        'Желтое золото',
        'Красное золото'
    ]

    const imageMap = {
        1: '/catalogImages/браслеты.png',
        2: '/catalogImages/кольца.png',
        3: '/catalogImages/серьги.png',
        4: '/catalogImages/серьги.png',
    };

    const goldMap = {
        1: '/golds/желтое золото_ImgID1.png',
        2: '/golds/красное золото_ImgID1.png',
    };

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

    const handleGoldClick = () => {
        navigate('/products');
        setCatalogId(null)
        setIsOpenCatalog(!isOpenCatalog);

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
                            <div key={catalog.id} className="text-2xl hover:cursor-pointer flex items-center justify-center" onClick={() => handleClick(catalog.id)}>
                                <img src={imageMap[catalog.id]} alt={catalog.name} className="h-16 mr-2 object-cover mb-2 rounded-3xl"/>
                                <h1>{catalog.name}</h1>
                            </div>
                        ))
                    )}
                </div>

                <div className="text-gray-500 mb-2 ">Материал -</div>
                <div className="flex items-center justify-center gap-16 mb-4 text-gray-700">
                    {loading ? (
                        <Loader/>
                    ) : (
                        golds.map((gold, index) => (
                            <div key={index} className="text-2xl mx-10  hover:cursor-pointer" onClick={() => handleGoldClick()}>
                                <img src={goldMap[index + 1]} alt={gold} className="w-full h-36 object-cover mb-2 rounded-3xl"/>
                                <h1>{gold}</h1>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
};

export default Catalog;
