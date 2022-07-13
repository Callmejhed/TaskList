import { List, ListItemButton,ListItem, ListItemText, Checkbox, Divider, Button } from '@mui/material'
import {React} from 'react'

export default function DeleteTask(props){
    //When checkbox is checked add task to a separate array of selectedTasks
    //When ```Delete Task``` button is clicked, remove selectedTasks subArray from Tasks Array  
    const taskList = props.Tasks.map(Task=>{
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
                <Divider />
            </>
        )
    })//Creates a list of tasks

    return(
        <>
            <List>
                {taskList}
            </List>
            <Button>`Delete Task${selectedTasks.length>1? 's': ''}`</Button>
        </>
        //list of tasks with a checkbox
    )
}