import React, { useContext } from 'react';
import { ModalContext } from "../contexts/ModalContext";
import { CityContext } from "../contexts/CityContext";
import { FaLocationDot } from "react-icons/fa6";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const ChooseCity = () => {
    const { isOpen, setIsOpen } = React.useContext(ModalContext);
    const [search, setSearch] = React.useState('');
    const { setCity } = useContext(CityContext);

    const handleClick = (city) => {
        localStorage.setItem('city', city);
        setCity(city);
        setIsOpen(!isOpen);
        toast.success(`Выбранный город: ${city}`, {
            closeButton: true
        });
    };

    const cities = [
        'Алматы',
        'Астана',
        'Караганда',
        'Шымкент',
        'Актобе',
        'Тараз',
        'Усть-Каменгорск',
        'Павлодар',
        'Атырау',
        'Семей',
        'Кызылорда'
    ];

    const filteredCities = cities.filter(city =>
        city.toLowerCase().includes(search.toLowerCase())
    );

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchCityFromCoordinates(latitude, longitude);
                },
                (error) => {
                    console.error('Error getting location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }

    async function fetchCityFromCoordinates(latitude, longitude) {
        await axios.post('http://127.0.0.1:8000/api/getCityFromCoordinates', { latitude, longitude })
            .then(response => {
                toast.success('Ваш город:', response.data.city);
            })
            .catch(error => {
                toast.error('Не получилось определить ваш город');
            });
    }

    return (
        <>
            <div className={"w-full h-1/6"}>
                <div className={"relative left-[95%] -top-2 hover:cursor-pointer"} onClick={() => setIsOpen(!isOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round"
                         strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                <input type="text" id="first_name"
                       onChange={(e) => setSearch(e.target.value)}
                       className="bg-white border-2 border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="Найдите свой город" required/>
            </div>
            <div className={"w-full h-1/2 grid grid-cols-3 ml-8 mt-8"}>
                {
                    filteredCities.map(city => (
                        <h1 className={"text-sm text-gray-500 mt-3 hover:cursor-pointer hover:text-gray-600"}
                            onClick={() => handleClick(city)}>{city}</h1>
                    ))
                }
            </div>
            <div className={"w-full mt-20 h-10 flex items-center justify-center text-gray-600"} onClick={() => getLocation()}>
                <FaLocationDot/>
                <span className={"ml-2 mt-1 hover:cursor-pointer"}>Определить город автоматический</span>
            </div>

        </>
    );
};

export default ChooseCity;
