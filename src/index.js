import React from 'react';
import ReactDOM from 'react-dom';
import{ Fragment } from "react";
import './index.css';

const App = () =>{
    return(
        <Fragment>
        <header>
            <div className="topText">
            Hello
            </div>
        </header>
        <main className="topMain">
            <section className="topSection">
                <div className="rezText">
                    <h1>My Name:<span>Oleh Lemekh</span></h1>
                    <h1>Date of birth:<span>04.04.1991</span></h1>
                    <h1>Address of residence:<span>St. Bandera 62a (Princess Olga: 1)</span></h1>
                    <h1>Phone: <span>+380987828946</span></h1>
                    <h1>Email:<span>lemeholeh@gmail.com</span></h1>
                    <h1>Education:<span>secondary, junior specialist</span></h1>
                    <h1>Professional Skills:<span>Computer engineer</span></h1>
                    <h1>Personal skills:<span>junior specialist</span></h1>

                </div>

            </section>
        </main>
        </Fragment>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));


