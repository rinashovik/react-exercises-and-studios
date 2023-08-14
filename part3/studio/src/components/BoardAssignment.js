import { useState } from 'react';
import recepe from './Recipe'

export default function BoardAssignment () {
   const boards = [];


      const [boardName, setBoardName] = useState("no boards yet!");

   const handleChange = (event) => {

      setBoardName(event.target.value);

      }
   


   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boards} onChange={handleChange}>

         {boards.map((item) => {
            
         <option value={item}>{item}</option>})}
         {/* <option value="pasta">{Pasta}</option>
         <option value="Shrimp">{Shrimp}</option>
 */}

      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}