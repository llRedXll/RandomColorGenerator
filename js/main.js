//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getRandomColor)

function getRandomColor(){

//Get a random color from xColors API
fetch("https://x-colors.herokuapp.com/api/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.documentElement.style.setProperty('--primary-color', data.hex)
      document.getElementById('hex').innerHTML = data.hex
      document.getElementById('rgb').innerHTML = data.rgb
      document.getElementById('hsl').innerHTML = data.hsl
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

// Copy color value text