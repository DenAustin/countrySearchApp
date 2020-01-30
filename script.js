const countriesContainer = document.querySelector(".countries-container");

//Loot to creates the elements 
const showCountries = (arr) => {
  countriesContainer.innerHTML = ''
  let content = ''
  for(const country of arr){

    content += `<div>
    <h1>${country}</h1>
    </div>`
  }
  countriesContainer.innerHTML = content
}
showCountries(countries)

//Dom calls

const searchField = document.querySelector(".search-field"); // User input text field
const totalCountries = document.querySelector('.total-countries')
const startLetterBtn = document.querySelector(".starting-letter"); // Search states by starting letters
const searchLetterBtn = document.querySelector(".search-word");
const buttonsDiv = document.querySelector('.buttons')
const reverseButton = document.querySelector(".reverse-button")

// function to filter nations by start letter
const filterCountriesByStartingStr = () => {
  countriesContainer.innerHTML = ""
  let states = document.querySelector(".search-field").value;
  const filteredCountries = countries.filter((country) => country.toLowerCase().startsWith(states.toLowerCase()))
  showCountries(filteredCountries)
  return filteredCountries
}
filterCountriesByStartingStr()

// function to filter nations by string segment
const filterNationsByStrSequence = () => {
  countriesContainer.innerHTML = ""
  let states = document.querySelector(".search-field").value;
  const filteredCountries = countries.filter((country) => country.toLowerCase().indexOf(states.toLowerCase()) > -1)
  showCountries(filteredCountries)
  return filteredCountries
}
filterNationsByStrSequence()

//<i class="fas fa-sort-alpha-up"></i>

// Event listener for the buttons and input

startLetterBtn.addEventListener("click", function(){
  filterCountriesByStartingStr()
  filterNationsByStrSequence()

})

searchLetterBtn.addEventListener("click", function(){
  
  filterNationsByStrSequence()

})

reverseButton.addEventListener("click", function(){
  countries.reverse();
  //countries.reverse();
  console.log(countries);
})



