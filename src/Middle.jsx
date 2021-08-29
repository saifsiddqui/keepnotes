import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const Middle = ( {input, setInput, setAdd, add} ) =>{

    const [expand, setExpand] = useState(false);
    
    const inputEvent = (event) =>{
       const {name, value}=event.target;
        setInput(()=>{
            return{
                    ...input,
                    [name]:value
                };
        });

    };
 
    const addItems = () =>{
        setAdd(()=>{
            return [...add, input];
        });
        
        setInput({
          title : "",
          text : ""
        });
        
         
    };
    const addExpand = () =>{
        setExpand(true);
    }

    return(
        <>
        <div className="middle">
            <form >
            {expand ?
            <input type="text" placeholder="Title" value={input.title} onChange={inputEvent} name="title" /> :null}

            <textarea cols="10 " rows="5" placeholder="Write a note" value={input.text} onChange={inputEvent} 
            name="text" onClick={addExpand} ></textarea>

            {expand ?
            <Button className="btm" onClick={addItems} >
                <AddIcon className="btn" />
            </Button> :null }
            </form>
        </div>
        
        </>
    )
}
export default Middle;
