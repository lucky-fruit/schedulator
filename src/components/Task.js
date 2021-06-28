import React, { useState, useEffect } from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'


function Task() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const saveData = (newTasks) => {
        localStorage.setItem("tasks", JSON.stringify(newTasks))
    }

    useEffect(() => {
        if (localStorage.getItem("tasks")) {
            setTasks(JSON.parse(localStorage.getItem("tasks")));
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

    // onAddTask: checks if newTask has changed, adds a task to the tasks, sets NewTask back to empty, then saves data
    // deleteTask: filters and only takes tasks without the id of the selected, which removes the task
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
            <Button onClick={onAddTask}>
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><rect fill="none" height="24" width="24" /><path d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8 c1.57,0,3.04,0.46,4.28,1.25l1.45-1.45C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c1.73,0,3.36-0.44,4.78-1.22 l-1.5-1.5C14.28,19.74,13.17,20,12,20z M19,15h-3v2h3v3h2v-3h3v-2h-3v-3h-2V15z" /></svg>
            </Button>
            <div>
                <Container>
                    {/* <ul style={{ "listStyleType":"none" }}>*/}
                    <Row>
                        {/* {tasks.map((task) => (
                        <li key={task.id}>{task.task}
                            <Button className='delete' onClick={() => deleteTask(task.id)}>Delete</Button>
                        </li>
                    ))} */}
                        {tasks.map((task) => (
                            <Card.Text key={task.id}>{task.task}
                                <Button className='delete' onClick={() => deleteTask(task.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /></svg>
                                </Button>
                            </Card.Text>
                        ))}

                    </Row>
                </Container>
            </div>
        </div>
    )


}

export default Task;