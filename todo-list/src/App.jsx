import { useState } from 'react';

function App() {
    const [task, setTask] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleInput = (e) => setTask(e.target.value);

    console.log(todoList);
    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (task.trim() === '') return;
                    setTodoList([...todoList, task]);
                    console.log(todoList);
                }}
            >
                <label htmlFor='task'>Que voulez-vous faire?</label>
                <input type='text' placeholder='Ajouter une tâche' value={task} onChange={handleInput} id='task' />
                <button type='submit'>Ajouter</button>
            </form>

            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
