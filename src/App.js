import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Middle from './Middle';
import { useState } from 'react';
import Note from './Note';

const Agg = () =>{
    const [input, setInput]=useState({
        title : "",
        text : ""
    });

    const [add, setAdd]=useState([]);
return(
        <>
        <div className="main">
        <Header />
        <Middle add={add} setAdd={setAdd} input={input} setInput={setInput} />

        {add.map((elem ,index)=>{
            return(
                <Note title={elem.title} 
                text={elem.text} 
                key={index} 
                id={index} 	
                setAdd={setAdd} 
                add={add} 
                input={input}
                setInput={setInput} 
                 />
            );
        })}

        <Footer />
        </div>
        </>
    );
}
export default Agg;


