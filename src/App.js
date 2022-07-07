import {React, useState} from 'react';
import Fab from "@mui/material/Fab";
import AddIcon from '@mui/icons-material/Add';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Divider } from '@mui/material';
// import Backdrop from '@mui/material/Backdrop';
import "./App.css"
import Header from "./components/Header";
import Main from './components/Main'
import Footer from './components/Footer';
import Tasks from './Tasks'

function App() {
    const [light, setLight] = useState(true)
    const fab = {
        position: "fixed", 
        right: "10px", 
        bottom: "100px"
    }
    const taskList = Tasks.map(()=>{
        return(
            <>
                <ListItemButton>
                    <ListItem>
                        <ListItemText 
                            primary={"Task Item"} 
                            secondary={"Learn how to properly use react and especially MUI"}
                        />
                        <Checkbox />
                    </ListItem>
                </ListItemButton>
                <Divider />
            </>
        )
    })

    function toggleLight(){
        setLight(!light)
    }
    function addTask(){
        console.log('sanityCheck')
    }

    return (
        <>
            <Header 
            toggle = {toggleLight}
            light = {light}
            />

            <Main 
            light = {light}
            Tasks = {Tasks}
            taskList = {taskList}
            />

            {/* <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            onClick={handleClose}
            ></Backdrop> */}

            <Fab 
            color='primary'  
            sx={fab}>
                <AddIcon />
            </Fab>

            <Footer onClick={addTask}/>
        </>
    );
}

export default App;