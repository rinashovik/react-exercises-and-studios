


let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

export default function RateARecipe() {


function GivenRating(props){
return <h3>{stars[props.rating-1]}y
</h3>
  }

  return stars;
  
}

//export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
