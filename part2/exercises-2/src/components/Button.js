import './styles.css';

export default function Button() {
function onLearnMore(){
   alert('Slipsh Splash');
}
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}


//export default Button;