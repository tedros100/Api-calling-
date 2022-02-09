import { BrowserRouter } from "react-router-dom";
import React from "react";
import Header from "./components/Header"
import "./App.css";


const App = () => {
    return (
        <BrowserRouter>

            <div className="App" style={{ backgroundImage: `url("https://image.shutterstock.com/image-vector/seamless-geometric-triangle-vector-pattern-600w-704254540.jpg")` }}>
          
                < Header />

             </div>

        </BrowserRouter>
    );
}

export default App;