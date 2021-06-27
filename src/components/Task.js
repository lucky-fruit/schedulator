import React, { useState, useEffect } from 'react'

function Task() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const saveData = (newTasks) => {
        // console.log(JSON.stringify(newTasks))
        localStorage.setItem("tasks", JSON.stringify(newTasks))
    }

    useEffect(() => {
        if (localStorage.getItem("tasks")) {
            setTasks(JSON.parse(localStorage.getItem("tasks")));
            // console.log(JSON.parse(localStorage.getItem("tasks")))
        }
    }, []);


    const onAddTask = () => {
        if (newTask.trim()) {
            let newTasks = [...tasks, { task: newTask.trim(), id: Date.now() }];
            setTasks(newTasks);
            setNewTask("");
            saveData(newTasks);
        }
    }

    const deleteTask = (id) => {
        let newTasks = tasks.filter((task) => task.id !== id)
        setTasks(newTasks);
        saveData(newTasks);
    }

    return (
        <div className='container-tasklist'>
            <input
                type="text"
                id="taskInput"
                className="form-input"
                placeholder="Add your tasks"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={onAddTask}>Add Task</button>
            <div>
                <ul style={{ "list-style-type":"none" }}>
                    {tasks.map((task) => (
                        <li key={task.id}>{task.task}
                            <button className='delete' onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )


}

export default Task;