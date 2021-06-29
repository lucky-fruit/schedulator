import React, { useState, useEffect } from 'react'
import { Button, Input } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));
  
function Task() {
    const classes = useStyles();
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

            <Input
                type="text"
                id="taskInput"
                className={classes.textField}
                placeholder="Add a task here"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                variant="contained"
                size="normal"
                color="secondary"
            />

            <Button onClick={onAddTask} startIcon={<AddCircleOutlineOutlinedIcon />}>
                ADD
            </Button>

            <div>
                <ul>
                    {tasks.map((task) => (
                        <li style={{listStyleType: 'none'}} key={task.id}>
                            
                            {task.task}
                            <Button className='delete' onClick={() => deleteTask(task.id)} 
                            startIcon={<DeleteOutlined />}>
                            </Button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )


}

export default Task;