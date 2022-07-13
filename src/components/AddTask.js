import {React} from 'react'
import { Button, TextField, Typography } from '@mui/material'

export default function AddTask(props){

    return(
        <form className='taskForm'>
            <Typography>Add a New Task</Typography>

            <TextField 
            id='taskTitle'
            label='Task Title'
            required
            variant='standard' 
            onChange={props.handleChange}/> 

            <TextField 
            label='Task description'
            id='taskDescription'
            variant='standard' 
            onChange={props.handleChange}/>

            <Button 
            variant='contained' 
            onClick={props.addTask}>
                Add Task
            </Button>
        </form>
    )
}