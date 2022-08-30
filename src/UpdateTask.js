import React, {useState} from 'react';

const UpdateTask = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const [updateTask, setUpdateTask]=useState('')

    const saveHandler = () =>{
        props.updatingTask(props.el.id, updateTask)
        setIsOpen(!isOpen)
    }

    return (
        <li key={props.el.id}>
            {props.el.value}
            <button onClick={() => props.deleteTask(props.index)}>Delete</button>
            <button onClick={()=>setIsOpen(!isOpen)} disabled={isOpen===true}>Update</button>
            <button onClick={() => props.up(props.index)} disabled={props.index === 0}>Up</button>
            <button onClick={() => props.down(props.index)} disabled={props.index === props.task.length - 1}>Down</button>
            {isOpen && <div>
                <input type={"text"} value={updateTask} onChange={e=> setUpdateTask(e.target.value)}/>
                <button onClick={()=>saveHandler()}>Save</button>
                <button onClick={()=>setIsOpen(!isOpen)}>Cancel</button>
            </div>}


        </li>
    );
};

export default UpdateTask;