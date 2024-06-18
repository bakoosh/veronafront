import React from 'react';

const ChooseCity = ({ title }) => {
    return (
<>
            <div className={"w-full h-1/6"}>
                <input type="text" id="first_name"
                       className="bg-white border border-black text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       placeholder="John" required/>
            </div>
    <div className={"w-full h-1/2 grid grid-cols-3"}>
        <h1 className={"text-lg mt-3"}>{title}</h1>
    </div>
</>
    );
};

export default ChooseCity;
