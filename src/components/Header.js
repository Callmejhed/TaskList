import {React} from 'react';
import { Switch } from '@mui/material';

export default function Header(props){

    return(
        <header className={props.light ? 'header' : 'darkHeader'}>
            <h2 className='title'>TaskList</h2>
            <div className='lightToggle'>
                <div className='label'>Lumos</div>
                <Switch onClick={props.toggle}/>
                <div className='label'>Nox</div>
            </div>
        </header>
    )
}