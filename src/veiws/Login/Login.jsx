import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthUserContext } from '../../contexts/AuthUserContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { authUser, setAuthUser } = useContext(AuthUserContext);
    const [phone, setPhone] = useState('');
    const [verifyCode, setVerifyCode] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [sended, setSended] = useState(false);

    const navigate = useNavigate();

    const handleClick = async () => {
        if (phone.length <= 0) {
            return false;
        }
        setDisabled(true);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/verify', { phone: phone });
            if (response) {
                setSended(true);
                setVerifyCode('');
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error('Ошибка при отправке кода');
        } finally {
            setDisabled(false);
        }
    };

    const handleCodeVerifyClick = async () => {
        setDisabled(true);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', { phone: phone, code: verifyCode });
            if (response.data) {
                localStorage.setItem('user', JSON.stringify(response.data));
                setAuthUser(JSON.parse(localStorage.getItem('user')));
                navigate('/');
            } else {
                throw new Error();
            }
        } catch (error) {
            toast.error('Ошибка при проверке кода');
        } finally {
            setDisabled(false);
        }
    };

    return (
        <div className="w-full h-96 flex items-center justify-center">

            <div className="w-4/5 flex">
                {sended === false ? (
                    <div className="w-1/3 flex flex-col">
                        <div className="flex">
                            <p className="text-gray-600 text-2xl font-bold ml-6">Войти</p>
                        </div>

                        <input
                            className="border-black px-8 py-3 rounded-lg border-2 text-black focus:outline-none text-lg mt-2"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />

                        <button
                            disabled={disabled}
                            onClick={handleClick}
                            className={`px-10 py-3 text-lg text-gray-600 font-bold rounded-lg mt-2 ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-300'}`}
                        >
                            Получить код
                        </button>

                        <span className="text-gray-400 text-sm mt-2">
                            Нажимая «Получить код», я соглашаюсь с условиями участия
                            в ALMARAY, политикой конфиденциальности и подтверждаю
                            согласие на получение сообщений рекламного характера.
                            Отказаться от рассылки можно в личном кабинете.
                        </span>
                    </div>
                ) : (
                    <div className="w-1/3 flex flex-col">
                        <div className="flex">
                            <p className="text-gray-600 text-2xl font-bold ml-6">Введите код</p>
                        </div>

                        <input
                            type="password"
                            className="border-black px-8 py-3 rounded-lg border-2 text-black focus:outline-none text-lg mt-2"
                            value={verifyCode}
                            onChange={(e) => setVerifyCode(e.target.value)}
                        />

                        <button
                            disabled={disabled}
                            onClick={handleCodeVerifyClick}
                            className={`px-10 py-3 text-lg text-gray-600 font-bold rounded-lg mt-2 ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-300'}`}
                        >
                            Отправить код
                        </button>
                    </div>
                )}

                <div className="w-2/3 flex items-center justify-center ml-16">
                    <img src={`${process.env.PUBLIC_URL}/ALMARAY.png`} alt="Описание изображения" className="mx-auto my-4" />
                </div>
            </div>
        </div>
    );
};

export default Login;
