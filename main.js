// state
let aliensExist = undefined

// unchanging data to process
const planets = [
  { name: 'Mercury', hasLife: false },
  { name: 'Venus', hasLife: false },
  { name: 'Earth', hasLife: true },
  { name: 'Mars', hasLife: true },
  { name: 'Jupiter', hasLife: undefined },
  { name: 'Saturn', hasLife: undefined },
  { name: 'Uranus', hasLife: undefined },
  { name: 'Neptune', hasLife: undefined },
  { name: 'Pluto', hasLife: undefined },
]



// Runs when the button is clicked
const handleClick = () => {
  console.log('clicked!');
  // debugger;
  checkIfAliensExist();
}




// most of our logic is here
const checkIfAliensExist = () => {
  console.log('checking if aliens exist...');
  for ( const planet of planets ){

    if ( planet.name === 'Earth' ) {
      continue;
    }

    if ( checkIfPlanetHasLife( planet ) === true ){
      aliensExist = true;
      break
    }

  }


  if ( aliensExist ) {
    console.log('aliens exist!');
  }


}


// returns boolean
const checkIfPlanetHasLife = ( planet ) => {
  console.log(`checking for life on ${planet.name}...`);

  if ( planet.hasLife ) {
    console.log(`we found life on ${planet.name}!`);
    return true;
  }

  return false;
}



// how we create an event listener on the button.
document.querySelector('.js-btn').addEventListener('click', handleClick)