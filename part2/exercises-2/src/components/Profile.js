import './styles.css';
import Button from './Button';
//import oceans from './oceans.json';
import oceans from './oceans.json';

const listItem = oceans.map(ocean =>
   
   <div key={ocean.id} className="profile" className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>
                        
      
      <img src={ocean.image} alt={ocean.name} className="img"/>

         <h1>{ocean.name}</h1> 

      <h3>Fun Facts:</h3>
<ul>
   <li>{ocean.fact1}</li>
   
   <li>{ocean.fact2}</li>
   <li>{ocean.fact3}</li>

   </ul>

         <Button />

      </div>
);

export default function Profile()
{
   return(
   
      
   <>     
        <ul> 
            {listItem}     
      </ul> 
</>
      
      // <h1>{oceans.name}</h1> 

   
   /* <ul>

      <  h3>Fun Facts:</h3>

   <li>{oceans.facts1}</li>
   
   <li>{oceans.facts2}</li>
   <li>{oceans.facts3}</li>

         <Button /> */
    
         

      
   );
}
// export default Profile;

// export default Profile;