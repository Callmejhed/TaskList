import {React} from 'react';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';

export default function Main(props){

    return(
        <main>
            <div className={props.light ? 'task': 'task darkTask'}>
                <div className='taskDetails'>
                    <h4 className='taskHeading'>Learn To Use MUI</h4>
                    <p className='taskDescription'>Become better with using react components</p>
                    <ul className='taskNotes'>
                        <li>Figure out how to customize components</li>
                        <li>Figure out how to customize components</li>
                        <li>Figure out how to customize components</li>
                    </ul>
                </div>

                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}/>
            </div>
            <Divider />
            <div className={props.light ? 'task': 'task darkTask'}>
                <div className='taskDetails'>
                    <h4 className='taskHeading'>Learn To Use MUI</h4>
                    <p className='taskDescription'>Become better with using react components</p>
                    <ul className='taskNotes'>
                        <li>Figure out how to customize components</li>
                        <li>Figure out how to customize components</li>
                        <li>Figure out how to customize components</li>
                    </ul>
                </div>

                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}/>
            </div>
            <Divider />
            <div className={props.light ? 'task': 'task darkTask'}>
                <div className='taskDetails'>
                    <h4 className='taskHeading'>Learn To Use MUI</h4>
                    <p className='taskDescription'>Become better with using react components</p>
                    <ul className='taskNotes'>
                        <li>Figure out how to customize components</li>
                        <li>Figure out how to customize components</li>
                        <li>Figure out how to customize components</li>
                    </ul>
                </div>

                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}/>
            </div>
            <Divider />
            <div className={props.light ? 'task': 'task darkTask'}>
                <div className='taskDetails'>
                    <h4 className='taskHeading'>Learn To Use MUI</h4>
                    <p className='taskDescription'>Become better with using react components</p>
                    <ul className='taskNotes'>
                        <li>Figure out how to customize components</li>
                        <li>Figure out how to customize components</li>
                        <li>Figure out how to customize components</li>
                    </ul>
                </div>

                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}/>
            </div>
        </main>
    )
}