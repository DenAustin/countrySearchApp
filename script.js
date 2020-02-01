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
const searchStringsBtn = document.querySelector(".search-word");
const buttonsDiv = document.querySelector('.buttons')
const reverseButton = document.querySelector(".reverse-button")
const resultFlash = document.querySelector(".result-flash")

// function to filter nations by start letter
const filterCountriesByStartingStr = () => {
  countriesContainer.innerHTML = ""
  let keys = document.querySelector(".search-field").value;
  const filteredCountries = countries.filter((country) => country.toLowerCase().startsWith(keys.toLowerCase()))
  showCountries(filteredCountries)
  
  return filteredCountries
}
filterCountriesByStartingStr()


// function to filter nations by string segment
const filterNationsByStrSequence = () => {
  countriesContainer.innerHTML = ""
  let clues = document.querySelector(".search-field").value;
  const filteredCountries = countries.filter((country) => country.toLowerCase().indexOf(clues.toLowerCase()) > -1)
  showCountries(filteredCountries)
  return showCountries(filteredCountries)
}
filterNationsByStrSequence()

//<i class="fas fa-sort-alpha-up"></i>

// Event listener for the buttons and input

startLetterBtn.addEventListener("click", function(){
  if(searchField.value.length == 1){
    filterCountriesByStartingStr()
    numberOfStates = filterCountriesByStartingStr().length
    resultFlash.innerHTML = ""
    //resultFlash.innerHTML = numberOfStates
    resultFlash.innerHTML = `The search yields: ${numberOfStates} county/ies`
  }else{
    alert("THIS BUTTON SEARCHES BY FIRST LETTER OF COUNTRY")
  }
  
})
searchStringsBtn.addEventListener("click", function(){
  
  filterNationsByStrSequence()
  
})

reverseButton.addEventListener("click", function(){
  if(searchField.value.length <= 0){
    let reverseArr = countries.reverse();
    showCountries(reverseArr)

  }else if (searchField.value.length >= 2){
    const filterRepsByStrSequence = () => {
      countriesContainer.innerHTML = ""
      let clues = document.querySelector(".search-field").value;
      let revCountries = countries.reverse()
      const filteredCountries = revCountries.filter((country) => country.toLowerCase().includes(clues.toLowerCase()))
      showCountries(filteredCountries)
      //showCountries(filteredCountries)
      showCountries(filteredCountries)

     
      
      return filteredCountries
      
    }
    
    filterRepsByStrSequence()
    //I want this event with the >= click instead
    console.log(filterRepsByStrSequence().length)
    resultFlash.innerHTML = ""
    resultFlash.innerHTML = `The search yields: ${filterRepsByStrSequence().length} county/ies`


  }else{
    const filterStatesByStartingStr = () => {
      countriesContainer.innerHTML = ""
      let keyz = document.querySelector(".search-field").value;
      let statesArray = countries.reverse()
      const filteredStates = statesArray.filter((country) => country.toLowerCase().startsWith(keyz.toLowerCase()))
      showCountries(filteredStates)
      return filteredStates
    }
    filterStatesByStartingStr()
  }
});


let unneededIcon = document.querySelector(".display-order")
unneededIcon.remove()

//code to flash result
/*
      numberOfStates = filterRepsByStrSequence().length
      resultFlash.innerHTML = ""
      //resultFlash.innerHTML = numberOfStates
      resultFlash.innerHTML = `The search yields: ${numberOfStates} county/ies`
      */






