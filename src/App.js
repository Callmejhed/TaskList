import {React, useState} from 'react'
import "./App.css"
import Footer from './components/Footer';
import Header from "./components/Header";
import Main from './components/Main'

function App() {
    const [light, setLight] = useState(true)

    function toggleLight(){
        setLight(!light)
    }

    return (
        <>
            <Header 
            toggle = {toggleLight}
            light = {light}
            />

            <Main light = {light}/>

            <Footer />
        </>
    );
}

export default App;