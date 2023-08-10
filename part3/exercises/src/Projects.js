

//import data from './../data.json';
import data from './components/data.json';
import {useState} from 'react';



export default function MyProjects(){

const [index, setIndex] = useState(0);


function handleClick(){

if(index < data.projects.length-1){
    setIndex(index +1);

}else{
    setIndex(0);

}
}

    return(
<button onClick={handleClick}>next</button> 

    );
}