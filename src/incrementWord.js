import { useState } from "react";
//import { Button } from '@material-ui/core';
import { Input } from "@mui/material";


/*
export function updateWord(){
    
}*/

function AddWord(){

    const [word,updateWord]=useState(" ");
            
    return(
        
        <div>
            
            <Input type='text' value={word} onChange={e => updateWord(e.target.value)}></Input>
            
    <h1>{word}</h1>
        </div>

    );
}



export default AddWord;

//export default updateWord;

//<Button  onClick={console.log(word)}>press</Button>
