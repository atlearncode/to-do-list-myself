import './App.css';
import {useState} from "react";
import {nanoid} from "nanoid";

function App() {

    const [task, setTask] = useState([{id: nanoid(), value: 'JSS'}])

    const [newTask, setNewTask] = useState('')

    const [updateTask, setUpdateTask]=useState('')

    const addNewTask = () => {
        task.push({id: nanoid(), value: newTask})
        setTask(task)
        setNewTask('')
    }

    const deleteTask = (index) => {
        const newArr = task.filter(el => task.indexOf(el) !== index)
        setTask(newArr)
    }

    const up = (index) => {
        const newArr = task.slice();
        const newObj = task[index]
        newArr.splice(index, 1)
        newArr.splice(index - 1, 0, newObj)
        setTask(newArr)
    }

    const down = (index) => {
        const newArr = task.slice();
        const newObj = task[index]
        newArr.splice(index, 1)
        newArr.splice(index + 1, 0, newObj)
        setTask(newArr)
    }

    const updateTask = () => {

    }

    return (
        <div>
            <h1>Todoist</h1>
            <input type={"text"} value={newTask} onChange={e => setNewTask(e.target.value)}/>
            <button onClick={() => addNewTask()}>Add</button>
            <hr/>
            <ol>
                {task.map((el, index) =>
                    <li key={el.id}>
                        {el.value}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                        <button onClick={()=> updateTask()}>Update</button>
                        <button onClick={() => up(index)} disabled={index === 0}>Up</button>
                        <button onClick={() => down(index)} disabled={index === task.length - 1}>Down</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default App;
