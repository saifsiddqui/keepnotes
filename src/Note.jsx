import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = ({title, text, add, id, setAdd}) =>{

         const del = () =>{
            setAdd(()=>{
                return(
                    add.filter((ele,indx)=>{
                        return indx != id
                    })
                )
            })
         }
    

    return (
        <>
        <div className="last">
            <p className="first"> {title} </p>
            <p className="sec"> {text} </p>
            <button className="inbtn" onClick={del} >
                <DeleteOutlineIcon />
            </button>
        </div>
        </>
    );
        
}
export default Note;
