import React, {useState} from 'react';
import axios from "axios";

const Login = () => {

    const [phone, setPhone] = React.useState('');
    const [verifyCode, setVerifyCode] = React.useState();
    const [sended , setSended] = useState(false);
    console.log(phone)
    const handleClick = () => {
        const verify = axios.post('http://127.0.0.1:8000/api/verify', {
            phone: phone
        })
        if (!verify.error) {
            setSended(!sended);
        }

    }
    return (
        <div className={"w-full h-96 flex items-center justify-center"}>
            <div className={"w-4/5 flex"}>
                {sended === false ? (
                    <div className={"w-1/3 flex flex-col"}>
                        <div className={"flex"}>
                            <p className={"text-gray-600 text-2xl font-bold ml-6"}>Войти</p>
                        </div>


                        <input pattern="[0-9]{10}"
                               className={"border-black px-8 py-3 rounded-lg border-2 text-black focus:outline-none text-lg mt-2"}
                               value={phone}
                               onChange={(e) => setPhone(e.target.value)}
                               required
                        />

                        <button
                            onClick={handleClick}
                            className={"px-10 py-3 text-lg text-gray-600 font-bold bg-gray-300 rounded-lg mt-2 "}>Получить
                            код
                        </button>

                        <span className={"text-gray-400 text-sm mt-2"}>Нажимая «Получить код», я соглашаюсь с условиями участия
                            в ALMARAY, политикой конфиденциальности и подтверждаю
                            согласие на получение сообщений рекламного характера.
                            Отказаться от рассылки можно в личном кабинете.
                        </span>
                    </div>
                ) : (
                    <div className={"w-1/3 flex flex-col"}>
                        <div className={"flex"}>
                            <p className={"text-gray-600 text-2xl font-bold ml-6"}>Введите код</p>
                        </div>


                        <input type="password"
                               className={"border-black px-8 py-3 rounded-lg border-2 text-black focus:outline-none text-lg mt-2"}
                               value={verifyCode}
                               onChange={(e) => setVerifyCode(e.target.value)}

                        />

                        <button
                            className={"px-10 py-3 text-lg text-gray-600 font-bold bg-gray-300 rounded-lg mt-2 "}>Отправить
                            код
                        </button>
                    </div>
                )}


                <div className={"w-2/3 flex items-center justify-center ml-16"}>
                    <img src={`${process.env.PUBLIC_URL}/ALMARAY.png`} alt="Описание изображения"
                         className="mx-auto my-4"/>
                </div>
            </div>
        </div>
    );
};

export default Login;