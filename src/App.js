import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import Header from "./components/Header";
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
    componentDidMount(){
        setTimeout(() => {
            console.log('La app se ha cargado correctamente');
        }, 2000);
    }   

    render(){
        return (
            <div className='App'>
                <Header appName="SoundCloud"/>
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
