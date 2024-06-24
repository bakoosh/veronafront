import React from 'react';

const Sidebar = () => {
    return (
        <div className={}>
            <aside className="w-1/5 bg-white p-4">
                <div className="space-y-4">
                    <div className="text-xl font-bold">Все украшения</div>
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <span className="icon">🏷️</span>
                            <span className="ml-2">Акции</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon">🆕</span>
                            <span className="ml-2">Новинки</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon">💎</span>
                            <span className="ml-2">Premium</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon">🔆</span>
                            <span className="ml-2">Золото</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon">🔗</span>
                            <span className="ml-2">Цепи</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon">💍</span>
                            <span className="ml-2">Свадьба</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon">🌸</span>
                            <span className="ml-2">Коллекции</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon">🍂</span>
                            <span className="ml-2">Серьги</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon">💍</span>
                            <span className="ml-2">Кольца</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon">🧿</span>
                            <span className="ml-2">Браслеты</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon">📿</span>
                            <span className="ml-2">Подвески</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon">📌</span>
                            <span className="ml-2">Булавки</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon">👨‍🦱</span>
                            <span className="ml-2">Мужчинам</span>
                        </div>
                        <div className="flex items-center">
                            <span className="icon">👶</span>
                            <span className="ml-2">Детям</span>
                        </div>
                    </div>
                </div>
            </aside>

            <!-- Main Content -->
            <main className="flex-1 p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-300 flex items-center justify-center h-24">БАННЕР РЕКЛАМЫ</div>
                    <div className="bg-gray-300 flex items-center justify-center h-24">БАННЕР РЕКЛАМЫ</div>
                </div>

                <div className="text-gray-500 mb-2">Тип украшения -</div>
                <div className="grid grid-cols-3 gap-4 mb-4 text-gray-700">
                    <div>Кольца</div>
                    <div>Подвески</div>
                    <div>Мужчинам</div>
                    <div>Серьги</div>
                    <div>Броши</div>
                    <div>Детям</div>
                    <div>Браслеты</div>
                </div>

                <div className="text-gray-500 mb-2">Материал -</div>
                <!-- Add more content as needed -->
            </main>
        </div>
    );
};

export default Sidebar;