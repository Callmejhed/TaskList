import {React, useEffect, useState} from 'react';
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
import CloseIcon from '@mui/icons-material/Close'
import {ListItem, ListItemButton, ListItemText} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import {nanoid} from 'nanoid' 
import "./App.css"
import Header from "./components/Header";
import Main from './components/Main'
import Footer from './components/Footer';
import Tasks from './Tasks'
import AddTask from './components/AddTask';
import DeleteTask from './components/DeleteTask';

export default function App() {
    const [light, setLight] = useState(true)//State to check if we're in light or dark mode
    const [edit, toggleEdit] = useState(false)//State to check if we're in tasklist edit mode
    const [backdrop, toggleBackdrop] = useState(false)//State to toggle backdrop to add or remove tasks
    const [add, toggleAdd] = useState(false)//State to check if we're in task addition mode
    const [remove, toggleRemove] = useState(false)//State to check if we're in task delete mode
    const [task, setTask] = useState({})//State to hold task to be added to the tasklist
    
    //Object styles
    const fab = {
        position: "fixed", 
        right: "10px", 
        bottom: "100px",
        transition: 'all 150ms ease-in-out'
    }
    const create = {
        position: "fixed", 
        right: "10px", 
        bottom: "170px",
        transition: 'all 150ms ease-in-out'
    }
    const del = {
        position: "fixed", 
        right: "10px", 
        bottom: "240px",
        transition: 'all 150ms ease-in-out'
    }
    const close ={
        position : 'absolute',
        top : '33.5%', left : '34%',
        border : '1px solid',
        borderRadius : '50%',
        backgroundColor : '#000000',
        cursor : 'pointer'
    }

    const taskList = Tasks.map(Task=>{
        return(
            <>
                <ListItemButton>
                    <ListItem>
                        <ListItemText 
                            primary={Task.taskTitle} 
                            secondary={Task.taskDescription}
                        />
                        <Checkbox />
                    </ListItem>
                </ListItemButton>
                <Divider 
                Tasks = {Tasks}/>
            </>
        )
    })//Creates a list of tasks

    function toggleLight(){setLight(!light)}//This function toggles light and dark mode
    function editTasks(){toggleEdit(!edit)}//This Function gives our options for editing Tasks array
    function closeBackdrop(){
        toggleAdd(false)
        toggleRemove(false)
        toggleBackdrop(false)
        toggleEdit(false)
    }//This function removes us from task edit mode and closes the backdrop
    function openBackdrop(){toggleBackdrop(!backdrop)}//This function opens the backdrop
    function closeEdit(){toggleEdit(false)}//This function removes us from task edit mode
    function createTask(){
        openBackdrop()
        toggleAdd(true)
    }//This function opens the backdrop with us in task creation mode
    function deleteTask(){
        openBackdrop()
        toggleRemove(true)
    }//This function opens the backdrop with us in task delete mode 
    function addTask(){
        if(task.taskTitle.length === 0){
            closeBackdrop()
            closeEdit()
        }
        else{
            Tasks.unshift(task)
            closeBackdrop()
            closeEdit()
        }//The if statement stops us from adding an empty task
    }//This function adds tasks that have been created to the universal Tasks Array
    function handleChange(){
        setTask({
            id : nanoid(),
            taskTitle : document.getElementById('taskTitle').value,
            taskDescription : document.getElementById('taskDescription').value
        })
    }//This function updates task state with the values enetered in task creation mode

    return (
        <>
            <Header 
            toggle = {toggleLight}
            light = {light}/>

            <Main 
            light = {light}
            Tasks = {Tasks}
            taskList = {taskList}
            onClick = {closeEdit}/>

            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={backdrop}>
                {add &&<>
                    <CloseIcon onClick={closeBackdrop} sx={close}/>
                    <AddTask 
                    handleChange = {handleChange}
                    addTask = {addTask}/>
                </>}
                {remove &&<>
                    <CloseIcon onClick={closeBackdrop} sx={close}/>
                    <DeleteTask 
                    Tasks = {Tasks}
                    taskList = {taskList}/>
                </>}
            </Backdrop>

            <Fab 
            color='primary'  
            sx={edit? del: fab}
            onClick={deleteTask}>
                <DeleteIcon />
            </Fab>

            <Fab 
            color='primary' 
            sx={edit? create: fab}        
            onClick={createTask}>
                <AddIcon />
            </Fab>

            <Fab 
            color='primary'  
            sx={fab}
            onClick={editTasks}>
                <EditIcon />
            </Fab>

            <Footer />
        </>
    );
}