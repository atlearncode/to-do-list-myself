import './App.css';
import {useState} from "react";
import {nanoid} from "nanoid";
import UpdateTask from "./UpdateTask";

function App() {

    const [task, setTask] = useState([{id: nanoid(), value: 'JSS'}])

    const [newTask, setNewTask] = useState('')



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

    const updatingTask = (id, updateTask) => {
        const newArr = task.map(el=> el.id===id ? {...el, value: updateTask} : el)
        setTask(newArr)
    }



    return (
        <div>
            <h1>Todoist</h1>
            <input type={"text"} value={newTask} onChange={e => setNewTask(e.target.value)}/>
            <button onClick={() => addNewTask()}>Add</button>
            <hr/>
            <ol>
                {task.map((el, index) => <UpdateTask el={el} index={index} up={up} down={down} deleteTask={deleteTask} task={task} updatingTask={updatingTask}/>

                )}
            </ol>
        </div>
    );
}

export default App;
