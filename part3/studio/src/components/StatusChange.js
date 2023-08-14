import { useState } from 'react';
import recepe from './Recipe';
import boardAssignment from './BoardAssignment'


export default function StatusChange () {
   const[notes, setNotes] = useState("");
   const[recepiStatus, setRecepiStatus] = useState(false);


   const handleChange = (event) => {
      setNotes(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefaults();
      setRecepiStatus(event.target.true);
   }

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your {notes} here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>My Recipe {notes} aren't here!</p>

         <p>I have not tried this recipe!</p>
      </div>
   );
}