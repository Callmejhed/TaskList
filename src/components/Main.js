import {React} from 'react';
import List from '@mui/material/List';

export default function Main(props){


    return(
        <main onClick={props.onClick}>
            <List>
               {props.taskList} 
            </List> 
        </main>
    )
}