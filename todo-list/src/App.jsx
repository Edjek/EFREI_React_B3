import { useEffect, useState } from 'react';

function App() {
    const STORAGE_KEY = 'todoList_v1';
    const [task, setTask] = useState('');
    const [todoList, setTodoList] = useState(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
        } catch {
            console.error('impossible de sauvegarder la todolist');
        }
    }, [todoList]);

    // Je veux sauvegarder cette liste dans le local storage
    // et je vais certainement avoir besoin d'utiliser un hook qui s'appelle useEffect()

    const handleInput = (e) => setTask(e.target.value);

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8'>
            <div className='max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6'>
                <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>Ma Liste de Tâches</h1>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        if (task.trim() === '') return;
                        setTodoList([...todoList, task]);
                        setTask('');
                    }}
                >
                    <div className='mb-6'>
                        <label htmlFor='task' className='block text-gray-700 font-medium mb-2'>
                            Que voulez-vous faire?
                        </label>
                        <div className='flex gap-2'>
                            <input
                                type='text'
                                placeholder='Ajouter une tâche'
                                value={task}
                                onChange={handleInput}
                                id='task'
                                className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                            />
                        </div>
                    </div>
                    <button
                        type='submit'
                        className='px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium'
                    >
                        Ajouter
                    </button>
                </form>

                <ul>
                    {todoList.map((todo, index) => (
                        <li
                            key={index}
                            className='flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'
                            onDoubleClick={(e) => {
                                e.currentTarget.classList.toggle('line-through');
                            }}
                        >
                            {todo}
                            <button
                                className='ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium'
                                onClick={() => {
                                    setTodoList(
                                        todoList.filter((todo, i) => {
                                            return i !== index;
                                        })
                                    );
                                }}
                            >
                                Supprimer
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
